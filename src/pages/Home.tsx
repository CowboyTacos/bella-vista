import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Clock, Phone } from 'lucide-react';
import { MENU_ITEMS, TESTIMONIALS } from '../constants';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const featuredDishes = MENU_ITEMS.slice(2, 5);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Italian Dining"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-cream uppercase tracking-[0.3em] text-sm font-medium mb-4 block"
          >
            Welcome to Bella Vista
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl text-white font-serif font-bold mb-8 leading-tight"
          >
            Authentic Italian <br /> Dining Experience
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setActivePage('menu')}
              className="bg-brand-red hover:bg-red-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 group"
            >
              Explore Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActivePage('reservations')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-medium transition-all"
            >
              Book a Table
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Signature Creations</h2>
          <p className="text-brand-charcoal/60 max-w-2xl mx-auto">
            A curated selection of our most beloved dishes, crafted with imported ingredients and traditional techniques.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div 
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActivePage('menu')}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {dish.price}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-red transition-colors">{dish.name}</h3>
              <p className="text-brand-charcoal/60 text-sm line-clamp-2">{dish.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-brand-charcoal text-brand-cream py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef at work"
              className="rounded-2xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-red rounded-2xl -z-0 hidden md:block"></div>
          </div>
          <div className="space-y-8">
            <span className="text-brand-red uppercase tracking-widest text-sm font-bold">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Tradition Meets <br /> Modern Elegance</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Founded in 1994, Bella Vista has been a cornerstone of authentic Italian cuisine. Our philosophy is simple: use the finest seasonal ingredients, respect traditional methods, and treat every guest like family.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="text-3xl font-serif font-bold block mb-1">25+</span>
                <span className="text-sm text-white/40 uppercase tracking-widest">Years of Excellence</span>
              </div>
              <div>
                <span className="text-3xl font-serif font-bold block mb-1">100%</span>
                <span className="text-sm text-white/40 uppercase tracking-widest">Authentic Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Guest Experiences</h2>
            <div className="flex justify-center gap-1 text-brand-red">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-8 rounded-2xl border-none shadow-sm">
                <p className="italic text-brand-charcoal/80 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-32 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Dining table"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Join Us for an Unforgettable Evening</h2>
          <p className="text-white/80 mb-12 text-lg">
            Whether it's a romantic date, a family celebration, or a business dinner, we provide the perfect setting.
          </p>
          <button 
            onClick={() => setActivePage('reservations')}
            className="bg-brand-red hover:bg-red-800 text-white px-12 py-5 rounded-full text-xl font-medium transition-all shadow-xl"
          >
            Reserve Your Table
          </button>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Find Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-brand-charcoal/60">123 Culinary Avenue, Gourmet District, NY 10001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-brand-charcoal/60">Mon-Sat: 5pm - 11pm | Sun: 4pm - 9pm</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Reservations</h4>
                  <p className="text-brand-charcoal/60">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-brand-charcoal/5 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/map/800/600" 
              alt="Map Placeholder"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3">
                <MapPin className="text-brand-red" />
                <span className="font-bold">Bella Vista Kitchen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
