import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/product/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, updateQuantity, state } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-semibold mb-4">Producto no encontrado</h2>
          <p className="text-muted-foreground mb-6">
            El producto que buscas no existe o ha sido removido.
          </p>
          <Link to="/productos">
            <Button variant="fresh">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    // Add items one by one to respect the cart logic
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    toast({
      title: "Producto agregado",
      description: `${quantity}x ${product.name} agregado al carrito`,
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/productos"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {formatPrice(product.price)}
              </div>
              {product.inStock ? (
                <span className="text-sm text-green-600 font-medium">✓ Disponible</span>
              ) : (
                <span className="text-sm text-red-600 font-medium">✗ Agotado</span>
              )}
            </div>

            {product.inStock && (
              <div className="space-y-6">
                {/* Quantity Selector */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cantidad
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold px-4 py-2 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-3">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleAddToCart}
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Agregar al carrito - {formatPrice(product.price * quantity)}
                  </Button>
                  
                  <Link to="/carrito" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      Ver carrito ({state.itemCount} productos)
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};