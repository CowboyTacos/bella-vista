import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold block"
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Contact Us
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-brand-charcoal/40">Address</h4>
                  <p className="font-medium">123 Culinary Avenue<br />Gourmet District, NY 10001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-brand-charcoal/40">Phone</h4>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-brand-charcoal/40">Email</h4>
                  <p className="font-medium">ciao@bellavista.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Opening Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-brand-charcoal/10">
                <span className="font-medium">Monday - Thursday</span>
                <span className="text-brand-charcoal/60">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-brand-charcoal/10">
                <span className="font-medium">Friday - Saturday</span>
                <span className="text-brand-charcoal/60">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-brand-charcoal/10">
                <span className="font-medium">Sunday</span>
                <span className="text-brand-charcoal/60">4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <MessageSquare className="text-brand-red w-8 h-8" />
            <h2 className="text-3xl font-bold">Send a Message</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Email</label>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?"
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Message</label>
              <textarea 
                placeholder="Your message..."
                rows={5}
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full bg-brand-charcoal hover:bg-brand-red text-white py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-24 h-[500px] bg-brand-charcoal/5 rounded-3xl overflow-hidden relative group">
        <img 
          src="https://picsum.photos/seed/fullmap/1600/800" 
          alt="Full Map"
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform">
            <MapPin className="text-brand-red w-8 h-8" />
            <span className="font-serif font-bold text-xl">Bella Vista</span>
            <span className="text-xs text-brand-charcoal/40 uppercase tracking-widest">Gourmet District</span>
          </div>
        </div>
      </div>
    </div>
  );
};
