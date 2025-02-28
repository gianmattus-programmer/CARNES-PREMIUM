
import React from 'react';
import { useScrollReveal, useImageLoader } from '@/lib/animations';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { ref: sectionRef, isIntersecting: isSectionVisible } = useScrollReveal();
  const { isLoaded, handleImageLoaded } = useImageLoader();

  return (
    <section id="nuestra-historia" className="section-padding bg-butcher-light">
      <div 
        ref={sectionRef}
        className={cn(
          "container-fluid premium-transition",
          isSectionVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={cn(
            "premium-transition",
            isSectionVisible ? "animate-fade-in-left" : ""
          )}>
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium uppercase tracking-widest bg-butcher-accent text-butcher-dark rounded-sm">
              Nuestra historia
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-butcher-dark mb-6 leading-tight">
              Una Tradición Familiar de Excelencia Desde 1952
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Lo que comenzó como un pequeño negocio familiar en las pampas peruanas se
              ha convertido en referente de calidad y tradición. Tres generaciones 
              preservando el arte de la selección y maduración de las mejores carnes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro compromiso con la excelencia nos ha llevado a ser los proveedores
              preferidos de los restaurantes más exclusivos de Perú y ahora 
              llevamos esa misma calidad directo a su mesa.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-butcher-burgundy">70+</p>
                <p className="text-sm text-muted-foreground">Años de tradición</p>
              </div>
              <div className="w-px h-16 bg-butcher-accent"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-butcher-burgundy">100%</p>
                <p className="text-sm text-muted-foreground">Ganado en libertad</p>
              </div>
              <div className="w-px h-16 bg-butcher-accent"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-butcher-burgundy">24</p>
                <p className="text-sm text-muted-foreground">Premios de calidad</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "premium-image premium-transition rounded overflow-hidden",
            isSectionVisible ? "animate-fade-in-right" : ""
          )}>
            <div className={cn(
              "aspect-[4/5] premium-transition",
              isLoaded ? "animate-image-reveal" : "opacity-0"
            )}>
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1335"
                alt="Tradición carnicera argentina"
                className="w-full h-full object-cover"
                onLoad={handleImageLoaded}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
