
import React, { useState } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Tomahawk Premium',
    description: 'Corte grueso con hueso, de intenso sabor y excepcional marmoleo. Maduración: 21 días.',
    price: '$9,800',
    image: '/tomahawak.jpg',
    weight: '800g - 1.2kg',
    featured: true
  },
  {
    id: 2,
    name: 'Bife de Chorizo',
    description: 'El clásico corte argentino, con su característico sabor y perfecta textura. Maduración: 14 días.',
    price: '$7,200',
    image: '/bife_de_chorizo.jpg',
    weight: '400g - 500g',
    featured: true
  },
  {
    id: 3,
    name: 'Ojo de Bife',
    description: 'La parte más tierna del lomo, con excelente marmoleo y sabor intenso. Maduración: 21 días.',
    price: '$8,500',
    image: '/Ojo_de_bife.png',
    weight: '350g - 450g',
    featured: true
  },
  {
    id: 4,
    name: 'Vacío Premium',
    description: 'Un corte tradicional argentino con un característico sabor y jugosidad. Maduración: 14 días.',
    price: '$6,800',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962fd?q=80&w=1470',
    weight: '700g - 900g',
    featured: false
  }
];

const FeaturedCuts = () => {
  const { ref: sectionRef, isIntersecting: isSectionVisible } = useScrollReveal();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="cortes" className="section-padding bg-white">
      <div
        ref={sectionRef}
        className={cn(
          "container-fluid premium-transition",
          isSectionVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium uppercase tracking-widest bg-butcher-accent text-butcher-dark rounded-sm">
            Selección premium
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-butcher-dark mb-6">
            Nuestros Cortes Destacados
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada corte es cuidadosamente seleccionado y madurado para alcanzar su máximo potencial
            de sabor y terneza. Descubra la excelencia en cada bocado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.featured).map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "premium-card border border-border group premium-transition",
                isSectionVisible ? `animate-fade-in-up [animation-delay:${index * 150}ms]` : "",
                hoveredItem === product.id ? "transform scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover premium-transition group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-medium text-butcher-dark">{product.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="secondary-button"
          >
            Ver todos los cortes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCuts;
