
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useImageLoader } from '@/lib/animations';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { isLoaded, handleImageLoaded } = useImageLoader();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "w-full h-full premium-transition",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1470"
            alt="Premium carnes argentinas"
            className="w-full h-full object-cover"
            onLoad={handleImageLoaded}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-butcher-dark/80 to-butcher-dark/50"></div>
        </div>
      </div>

      <div className="container-fluid relative z-10 mt-16">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium uppercase tracking-widest bg-butcher-burgundy text-white rounded-sm">
              Carnicería premium peruana
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight md:leading-tight">
              Tradición y Excelencia en Cada Corte
            </h1>
            <p className="text-lg text-butcher-cream/90 mb-8 max-w-xl">
              Seleccionamos las mejores carnes peruanas, criadas en libertad, 
              para ofrecer una experiencia gastronómica incomparable que honra 
              nuestra herencia y pasión por la calidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cortes" className="premium-button">
                Explorar cortes
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#nuestra-historia" className="secondary-button border-butcher-cream text-butcher-cream hover:bg-butcher-cream hover:text-butcher-dark">
                Nuestra historia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
