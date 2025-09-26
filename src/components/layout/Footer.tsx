import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Calle 123 #45-67, Barrio Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Lun - Sáb: 7:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre Nosotros</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Somos tu tienda de barrio de confianza. Más de 15 años ofreciendo 
              productos de calidad a precios justos. Tu familia es nuestra familia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Domicilios sin costo mínimo</li>
              <li>• Productos frescos diarios</li>
              <li>• Atención personalizada</li>
              <li>• Precios competitivos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>para nuestra comunidad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};