import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Award, Sparkles, Flame } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onOrderNowClick: () => void;
}

export default function Hero({ onOrderNowClick }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] bg-wood-50 text-wood-900 overflow-hidden border-b-2 border-wood-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[85vh]">
        
        {/* Left Column: Title, Subtitle, Stats */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-20 relative border-r-0 lg:border-r-2 border-wood-900 bg-wood-50">
          
          {/* Decorative faint background text */}
          <div className="absolute -left-4 top-10 opacity-5 pointer-events-none select-none hidden sm:block">
            <h2 className="text-[180px] leading-none font-serif font-black italic uppercase text-wood-900">
              Fresh
            </h2>
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-gold-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Est. 2016 &mdash; Handcrafted Daily
            </span>
            
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-wood-900 leading-[0.95] text-left">
              Freshly Baked <br />
              <span className="italic font-medium text-gold-500">with Love.</span>
            </h1>
            
            <p className="font-sans text-sm sm:text-base md:text-lg max-w-lg leading-relaxed text-wood-700 font-light text-left">
              Experience the rich taste of handcrafted breads, customizable celebration cakes, and delicate French pastries made daily in our signature wood-fired stone ovens.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-order-now-btn"
                onClick={onOrderNowClick}
                className="bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 px-8 py-4 font-serif text-xs uppercase tracking-widest font-bold border border-wood-900 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-custom-cake-btn"
                onClick={() => scrollToSection('#custom-orders')}
                className="border-2 border-wood-900 hover:bg-wood-900 hover:text-wood-50 text-wood-900 px-8 py-4 font-serif text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
              >
                Request Custom Cake
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-wood-900/10 pt-8 max-w-lg">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold italic text-wood-900">12+</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-wood-500 font-semibold mt-1">Bread Varieties</span>
            </div>
            <div className="flex flex-col border-l border-wood-900/10 pl-6">
              <span className="font-serif text-2xl sm:text-3xl font-bold italic text-wood-900">100%</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-wood-500 font-semibold mt-1">Natural Flour</span>
            </div>
            <div className="flex flex-col border-l border-wood-900/10 pl-6">
              <span className="font-serif text-2xl sm:text-3xl font-bold italic text-wood-900">03:30 AM</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-wood-500 font-semibold mt-1">Ovens Fired</span>
            </div>
          </div>

        </div>

        {/* Right Column: Dark Showcase panel & highlights */}
        <div className="col-span-1 lg:col-span-5 flex flex-col bg-wood-800 text-wood-100 min-h-[450px] lg:min-h-0">
          
          {/* Main Visual Panel */}
          <div className="flex-grow flex items-center justify-center p-6 sm:p-10 relative overflow-hidden bg-wood-900 min-h-[300px]">
            {/* Visual background with blend overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={HERO_IMAGE}
                alt="Wooden Bakery Sourdough"
                className="w-full h-full object-cover object-center opacity-40 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-wood-950 via-wood-950/40 to-transparent" />
            </div>

            {/* Content box over visual background */}
            <div className="relative z-10 w-full h-full border border-wood-100/20 p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="px-3 py-1 bg-gold-400 text-wood-950 text-[10px] font-mono uppercase tracking-widest font-bold">
                  Pure Bread
                </div>
              </div>
              
              <div className="mt-auto pt-8">
                <h3 className="font-serif text-2xl sm:text-3xl italic font-light leading-snug text-wood-50 mb-4 max-w-sm text-left">
                  Our signature sourdough bread, fermented for 36 hours for perfect crumb and crust.
                </h3>
                <div className="w-12 h-[2px] bg-gold-400 mb-4"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-300 font-bold block text-left">
                  Feature: Sourdough Country Loaf
                </span>
              </div>
            </div>
          </div>

          {/* Sub-panels Grid */}
          <div className="border-t border-wood-900 grid grid-cols-1 sm:grid-cols-2">
            <div className="border-r-0 sm:border-r border-b sm:border-b-0 border-wood-900 flex flex-col justify-center p-6 bg-wood-800 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 mb-2 font-bold">Our Story</span>
              <p className="text-xs leading-relaxed font-serif opacity-80 italic text-wood-200">
                Born from a passion for grain and fire, Wooden Bakery honors traditional baking methods that mass production forgot.
              </p>
            </div>
            
            <div className="flex flex-col justify-center p-6 bg-wood-900 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 mb-2 font-bold">Signature Pastry</span>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-serif font-bold text-wood-50">Classic Butter Croissant</span>
                <span className="text-gold-400 font-mono font-bold text-xs">$3.95</span>
              </div>
              <p className="text-[11px] font-sans opacity-70 text-wood-300">
                Multi-layered, crafted with premium European butter.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
