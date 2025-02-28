import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 premium-transition",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <a href="/" className={cn("text-2xl font-serif font-bold", isScrolled ? "text-butcher-dark" : "text-white")}>
            CARNES <span className="text-butcher-burgundy">PREMIUM</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Cortes', 'Nuestra Historia', 'Proceso', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  "text-sm font-medium premium-transition underline-link",
                  isScrolled ? "text-butcher-dark" : "text-white"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-butcher-dark"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[56px] left-0 right-0 bg-white shadow-md premium-transition overflow-hidden md:hidden",
          isMobileMenuOpen ? "max-h-screen py-5" : "max-h-0 py-0"
        )}
      >
        <div className="container-fluid flex flex-col space-y-4">
          {['Inicio', 'Cortes', 'Nuestra Historia', 'Proceso', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-butcher-dark py-2 hover:text-butcher-burgundy premium-transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
