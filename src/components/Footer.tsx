import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-butcher-dark text-white pt-16 pb-8">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="/" className="text-2xl font-serif font-bold text-white mb-6 inline-block">
              CARNES<span className="text-butcher-burgundy">PREMIUM</span>
            </a>
            <p className="text-butcher-cream/70 mb-6">
              Tradición y excelencia en cada corte. Seleccionamos lo mejor de la ganadería peruana
              para ofrecer una experiencia premium incomparable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-butcher-burgundy/40 flex items-center justify-center premium-transition hover:bg-butcher-burgundy"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-butcher-burgundy/40 flex items-center justify-center premium-transition hover:bg-butcher-burgundy"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-butcher-burgundy/40 flex items-center justify-center premium-transition hover:bg-butcher-burgundy"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Cortes', 'Nuestra Historia', 'Proceso', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-butcher-cream/70 hover:text-white premium-transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Cortes Premium</h3>
            <ul className="space-y-3">
              {['Tomahawk', 'Bife de Chorizo', 'Ojo de Bife', 'Vacío', 'Asado', 'Entraña'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-butcher-cream/70 hover:text-white premium-transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Boletín</h3>
            <p className="text-butcher-cream/70 mb-4">
              Suscríbase para recibir novedades sobre cortes exclusivos y ofertas especiales.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Su email" 
                className="w-full px-4 py-3 bg-butcher-dark border border-butcher-burgundy/40 rounded-sm text-white placeholder:text-butcher-cream/50 focus:outline-none focus:ring-1 focus:ring-butcher-burgundy"
              />
              <button 
                type="submit" 
                className="premium-button w-full"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-butcher-burgundy/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-butcher-cream/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Premium Carnes. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-butcher-cream/50 text-sm">
              Developed and Designed by <a href="https://github.com/gianmattus-programmer" target="_blank" rel="noopener noreferrer" className="text-butcher-burgundy hover:text-white premium-transition">Gianmattus-Programmer</a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-butcher-cream/50 hover:text-white text-sm premium-transition">
                Términos y Condiciones
              </a>
              <a href="#" className="text-butcher-cream/50 hover:text-white text-sm premium-transition">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
