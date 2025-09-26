import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/product/ProductCard';
import { CategoryCard } from '@/components/product/CategoryCard';
import { categories, getFeaturedProducts } from '@/data/products';
import heroImage from '@/assets/hero-grocery.jpg';

export const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Productos frescos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Tu tienda de barrio de <span className="text-accent">confianza</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Productos frescos, precios justos y atención familiar desde hace más de 15 años
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/productos">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Ver todos los productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explora nuestras categorías
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encuentra todo lo que necesitas para tu hogar en nuestras diferentes secciones
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Productos destacados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Los favoritos de nuestros clientes, siempre frescos y al mejor precio
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/productos">
              <Button variant="fresh" size="lg">
                Ver todos los productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-fresh">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Calidad garantizada</h3>
                <p className="text-white/80">
                  Seleccionamos los mejores productos para tu familia
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Atención familiar</h3>
                <p className="text-white/80">
                  Te conocemos y sabemos lo que necesitas
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Domicilios rápidos</h3>
                <p className="text-white/80">
                  Llevamos tus productos hasta la puerta de tu casa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Más que una tienda, somos familia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Desde 2008 hemos sido parte de esta comunidad, ofreciendo no solo productos 
              de calidad, sino también el calor humano que caracteriza a las tiendas de barrio. 
              Conocemos a nuestros clientes por su nombre y sabemos qué necesita cada familia.
            </p>
            <Link to="/contacto">
              <Button variant="trust" size="lg">
                Conoce más sobre nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};