
import React from 'react';
import { useScrollReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

const processes = [
  {
    id: 1,
    title: 'Selección Experta',
    description: 'Escogemos solo el 5% superior del ganado criado en libertad en las pampas argentinas.',
    number: '01'
  },
  {
    id: 2,
    title: 'Maduración Controlada',
    description: 'Cada corte se madura en ambiente controlado entre 14 y 60 días para desarrollar su máximo sabor.',
    number: '02'
  },
  {
    id: 3,
    title: 'Corte Artesanal',
    description: 'Maestros carniceros con décadas de experiencia realizan cada corte con precisión milimétrica.',
    number: '03'
  },
  {
    id: 4,
    title: 'Empaque Premium',
    description: 'Envasamos al vacío para preservar la frescura y el sabor hasta llegar a su mesa.',
    number: '04'
  }
];

const CraftSection = () => {
  const { ref: sectionRef, isIntersecting: isSectionVisible } = useScrollReveal();

  return (
    <section id="proceso" className="section-padding bg-butcher-dark text-white">
      <div 
        ref={sectionRef}
        className={cn(
          "container-fluid premium-transition",
          isSectionVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium uppercase tracking-widest bg-butcher-accent text-butcher-dark rounded-sm">
            Nuestro proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            El Arte Detrás de Cada Corte
          </h2>
          <p className="text-lg text-butcher-cream/80">
            Combinamos tradición centenaria con técnicas modernas para ofrecerle solo lo mejor.
            Cada paso de nuestro proceso está diseñado para maximizar el sabor y la calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div 
              key={process.id}
              className={cn(
                "border border-butcher-burgundy/40 rounded-sm p-8 relative overflow-hidden premium-transition group",
                isSectionVisible ? `animate-fade-in-up [animation-delay:${index * 150}ms]` : ""
              )}
            >
              <span className="absolute -right-2 -top-8 text-8xl font-serif font-bold text-butcher-burgundy/10 premium-transition group-hover:text-butcher-burgundy/20">
                {process.number}
              </span>
              <h3 className="text-xl font-serif font-medium text-white mb-4 relative z-10">
                {process.title}
              </h3>
              <p className="text-sm text-butcher-cream/70 relative z-10">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
