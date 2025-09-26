import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

export const Contact: React.FC = () => {
  const { state } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generateOrderMessage = () => {
    let message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n`;
    
    if (state.items.length > 0) {
      message += `📋 PRODUCTOS:\n`;
      state.items.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
      });
      message += `\n💰 TOTAL: ${formatPrice(state.total)}\n\n`;
    }
    
    message += `📍 Por favor confirmen disponibilidad y tiempo de entrega.\n\n`;
    message += `Datos de contacto:\n`;
    message += `👤 Nombre: ${formData.name}\n`;
    message += `📱 Teléfono: ${formData.phone}\n`;
    if (formData.email) {
      message += `📧 Email: ${formData.email}\n`;
    }
    if (formData.message) {
      message += `💬 Mensaje adicional: ${formData.message}\n`;
    }
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Datos incompletos",
        description: "Por favor completa tu nombre y teléfono",
        variant: "destructive",
      });
      return;
    }

    const message = generateOrderMessage();
    const whatsappUrl = `https://wa.me/573001234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirigiendo a WhatsApp",
      description: "Te contactaremos pronto para confirmar tu pedido",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppOrder();
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Haz tu pedido o escríbenos para cualquier consulta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                  {state.items.length > 0 ? 'Confirmar Pedido' : 'Enviar Mensaje'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Order Summary */}
                {state.items.length > 0 && (
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Resumen de tu pedido:</h4>
                    <div className="space-y-2 text-sm">
                      {state.items.map(item => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.quantity}x {item.name}</span>
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                      <hr className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span className="text-primary">{formatPrice(state.total)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="300 123 4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email (opcional)
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje adicional
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Dirección de entrega, observaciones especiales..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {state.items.length > 0 ? 'Enviar pedido por WhatsApp' : 'Enviar mensaje por WhatsApp'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar el mensaje serás redirigido a WhatsApp para completar tu pedido
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Store Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de la tienda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Calle 123 #45-67<br />
                      Barrio Centro<br />
                      Ciudad, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Sábado<br />
                      7:00 AM - 8:00 PM<br />
                      Domingos: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +57 300 123 4567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="fresh" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
                
                <a href="tel:+573001234567" className="block">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar ahora
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Mapa de ubicación</p>
                    <p className="text-xs">Calle 123 #45-67, Barrio Centro</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};