import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';

export const Reservations: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6 p-12 glass-card rounded-3xl"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold">Table Reserved!</h2>
          <p className="text-brand-charcoal/60">
            Thank you for choosing Bella Vista. We've sent a confirmation email to your inbox. We look forward to serving you!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Make another reservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold block"
          >
            Book Your Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Reservations
          </motion.h1>
          <p className="text-brand-charcoal/60 text-lg leading-relaxed">
            Secure your table at Bella Vista. For parties larger than 8, please contact us directly at +1 (555) 123-4567 to discuss our private dining options.
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                <Users className="w-5 h-5" />
              </div>
              <span className="font-medium">Intimate & Group Dining</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="font-medium">Open 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-medium">Lunch & Dinner Service</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl space-y-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Time</label>
                <select required className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none">
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Guests</label>
              <select required className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none">
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6 People</option>
                <option>7 People</option>
                <option>8 People</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                required
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                required
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Special Requests</label>
              <textarea 
                placeholder="Allergies, special occasions, etc."
                rows={3}
                className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-red hover:bg-red-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1"
            >
              Confirm Reservation
            </button>
          </form>
          <p className="text-center text-xs text-brand-charcoal/40">
            By clicking confirm, you agree to our reservation policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
