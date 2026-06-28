import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, Sparkles, Heart, Facebook, Instagram, Twitter, Youtube, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-wood-900 text-wood-300 pt-16 pb-8 border-t-2 border-wood-900 relative overflow-hidden bg-wood-texture">
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-none bg-gold-950/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-wood-800">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-none bg-gold-500 flex items-center justify-center border border-wood-900">
                <span className="font-serif text-xl font-bold text-wood-900">W</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg font-bold text-gold-100 tracking-wider uppercase leading-tight">
                  Wooden Bakery
                </span>
                <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest leading-none font-bold">
                  Artisan Wood Oven
                </span>
              </div>
            </a>
            
            <p className="text-xs text-wood-400 leading-relaxed font-light max-w-sm text-left">
              Crafting premium freshly baked sourdough bread, customized luxury tiered wedding and event cakes, and flaky delicate Viennoiseries daily inside our volcanic-stone deck wood ovens. Established in 2016.
            </p>

            {/* Social media icons */}
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-wood-950 border border-wood-800 text-gold-400 hover:text-wood-950 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-wood-950 border border-wood-800 text-gold-400 hover:text-wood-950 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-wood-950 border border-wood-800 text-gold-400 hover:text-wood-950 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-wood-950 border border-wood-800 text-gold-400 hover:text-wood-950 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-widest">Quick Navigation</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button onClick={() => scrollToSection('#home')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('#about')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">About Us</button>
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Gourmet Menu</button>
              <button onClick={() => scrollToSection('#custom-orders')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Custom Cakes</button>
              <button onClick={() => scrollToSection('#gallery')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Photo Gallery</button>
              <button onClick={() => scrollToSection('#faq')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">FAQ Help</button>
            </div>
          </div>

          {/* Column 3: Categories */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-widest">Our Offerings</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Artisan Bread</button>
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Birthday Cakes</button>
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Wedding Cakes</button>
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Fine Pastries</button>
              <button onClick={() => scrollToSection('#menu')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Macarons & Treats</button>
              <button onClick={() => scrollToSection('#custom-orders')} className="text-left hover:text-gold-400 transition-colors py-0.5 cursor-pointer">Occasions Designs</button>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Join Our Newsletter</span>
            </h4>
            <p className="text-xs text-wood-400 font-light leading-relaxed">
              Subscribe to receive baking secrets from our chef, first access to weekend specialties, and special seasonal holiday coupons!
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-wood-950 border border-wood-800 text-xs text-white rounded-none focus:outline-hidden focus:border-gold-500 font-light"
                  required
                />
                <button
                  id="newsletter-subscribe-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-wood-950 font-serif font-bold text-xs rounded-none border border-wood-800 transition-colors shadow flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4 text-wood-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            ) : (
              <div className="p-3.5 bg-gold-950/20 border border-gold-900/30 rounded-none text-xs text-gold-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Subscribed! Check your inbox for your 10% coupon.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-wood-500 font-mono gap-4">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Wooden Bakery. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-0.5">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in the Wood Oven
            </span>
          </div>

          <div className="flex gap-4 justify-center sm:justify-end">
            <a href="#about" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
