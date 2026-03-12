import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';

export const Menu: React.FC = () => {
  const categories = ['Appetizers', 'Pasta', 'Pizza', 'Entrees', 'Desserts', 'Drinks'] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Appetizers');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
        >
          Culinary Excellence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Our Menu
        </motion.h1>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base font-medium uppercase tracking-widest pb-2 border-b-2 transition-all cursor-pointer ${activeCategory === cat ? 'border-brand-red text-brand-red' : 'border-transparent text-brand-charcoal/40 hover:text-brand-charcoal'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="flex gap-6 group">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden shadow-md">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-brand-red transition-colors">{item.name}</h3>
                  <div className="h-px bg-brand-charcoal/10 flex-1 hidden md:block"></div>
                  <span className="font-serif font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-brand-charcoal/60 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-24 p-12 bg-brand-charcoal text-brand-cream rounded-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Dietary Requirements?</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          We offer gluten-free pasta and vegan options for most of our dishes. Please inform your server of any allergies or dietary preferences.
        </p>
      </div>
    </div>
  );
};
