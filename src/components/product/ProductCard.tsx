import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    });
  };

  const formatPrice = (price: number) => {
    return `Bs ${price.toFixed(2)}`;
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-product hover:-translate-y-1 bg-white">
      <Link to={`/producto/${product.id}`}>
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-muted/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">Agotado</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              
              <Button
                variant="fresh"
                size="sm"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="transition-all duration-300"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Agregar</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};