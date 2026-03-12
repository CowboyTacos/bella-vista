import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Reservations', id: 'reservations' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const isHome = activePage === 'home';
  const shouldShowBg = scrolled || !isHome;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${shouldShowBg ? 'bg-brand-charcoal/95 text-brand-cream py-3 shadow-lg' : 'bg-transparent text-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setActivePage('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <UtensilsCrossed className={`w-8 h-8 transition-transform group-hover:rotate-12 ${shouldShowBg ? 'text-brand-red' : 'text-white'}`} />
          <span className="text-2xl font-serif font-bold tracking-tight">BELLA VISTA</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`nav-link text-sm font-medium uppercase tracking-widest cursor-pointer ${activePage === item.id ? 'text-brand-red' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('reservations')}
            className="bg-brand-red hover:bg-red-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-charcoal text-brand-cream p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`text-lg font-serif py-2 border-b border-white/10 text-left ${activePage === item.id ? 'text-brand-red' : ''}`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setActivePage('reservations');
                setIsOpen(false);
              }}
              className="bg-brand-red text-white py-3 rounded-lg font-medium mt-2"
            >
              Book a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
