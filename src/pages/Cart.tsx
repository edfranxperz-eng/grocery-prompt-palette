import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

export const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get suggested products (random selection)
  const suggestedProducts = products
    .filter(product => !state.items.find(item => item.id === product.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ¡Explora nuestros productos y encuentra todo lo que necesitas para tu hogar!
            </p>
            <Link to="/productos">
              <Button variant="hero" size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Comenzar a comprar
              </Button>
            </Link>
          </div>

          {/* Suggested Products for Empty Cart */}
          {suggestedProducts.length > 0 && (
            <section className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Te recomendamos estos productos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {suggestedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/productos"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Seguir comprando
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-foreground">
              Mi Carrito
            </h1>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Vaciar carrito
            </Button>
          </div>
          
          <p className="text-muted-foreground mt-2">
            {state.itemCount} producto{state.itemCount !== 1 ? 's' : ''} en tu carrito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <Link 
                        to={`/producto/${item.id}`}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex flex-col justify-between items-end space-y-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold px-3 py-1 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="text-right space-y-2">
                        <div className="text-lg font-bold text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="mr-1 h-4 w-4" />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Resumen del pedido
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({state.itemCount} productos)</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domicilio</span>
                    <span className="text-green-600 font-medium">Gratis</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                </div>

                <Link to="/contacto" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Proceder al pedido
                  </Button>
                </Link>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Te contactaremos para confirmar tu pedido y coordinar la entrega
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Suggested Products */}
        {suggestedProducts.length > 0 && (
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              También te puede interesar
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {suggestedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};