import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const { ref: sectionRef, isIntersecting: isSectionVisible } = useScrollReveal();

  return (
    <section id="contacto" className="section-padding bg-butcher-light">
      <div
        ref={sectionRef}
        className={cn(
          "container-fluid premium-transition",
          isSectionVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex justify-center">
          <div className={cn(
            "premium-transition max-w-2xl",
            isSectionVisible ? "animate-fade-in-left" : ""
          )}>
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium uppercase tracking-widest bg-butcher-accent text-butcher-dark rounded-sm">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-butcher-dark mb-6">
              Visite Nuestra Boutique de Carnes
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Lo invitamos a conocer nuestra exclusiva boutique donde podrá descubrir nuestra selección
              premium y recibir asesoramiento personalizado de nuestros expertos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-butcher-burgundy/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-butcher-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-butcher-dark mb-1">Dirección</h3>
                  <p className="text-muted-foreground">Av. Somos Libertad 1891, Recoleta<br />Lima, Perú</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-butcher-burgundy/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-butcher-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-butcher-dark mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+51 987654321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-butcher-burgundy/10 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-butcher-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-butcher-dark mb-1">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes - Viernes: 9:00 - 19:00<br />
                    Sábado: 10:00 - 16:00<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-butcher-burgundy/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-butcher-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-butcher-dark mb-1">Email</h3>
                  <p className="text-muted-foreground">info@premiumcarnes.com.pe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
