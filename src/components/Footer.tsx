import React from 'react';
import { Facebook, Instagram, Twitter, UtensilsCrossed } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-8 h-8 text-brand-red" />
            <span className="text-2xl font-serif font-bold tracking-tight">BELLA VISTA</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Experience the true essence of Italian hospitality and culinary excellence in the heart of the city.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-brand-cream transition-colors">Our Menu</a></li>
            <li><a href="#" className="hover:text-brand-cream transition-colors">Reservations</a></li>
            <li><a href="#" className="hover:text-brand-cream transition-colors">Private Events</a></li>
            <li><a href="#" className="hover:text-brand-cream transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Hours</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>5:00 PM - 10:00 PM</span></li>
            <li className="flex justify-between"><span>Fri - Sat</span> <span>5:00 PM - 11:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>4:00 PM - 9:00 PM</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>123 Culinary Avenue<br />Gourmet District, NY 10001</li>
            <li>+1 (555) 123-4567</li>
            <li>ciao@bellavista.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Bella Vista Italian Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};
