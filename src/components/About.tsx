import { motion } from 'motion/react';
import { Heart, Sparkles, Trophy, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                Our Story & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900 leading-tight">
                Crafting Joy, Layered with Traditional Passion
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-wood-700 font-light leading-relaxed">
              <p>
                Founded in 2016 by a family of master pastry chefs, <strong className="text-wood-900 font-semibold">Wooden Bakery</strong> was born out of a desire to revive the ancient, slow methods of traditional European baking. Our ovens are constructed of volcanic stone, ignited with organic timber every single morning long before the sun rises.
              </p>
              <p>
                We believe that bread is a living, breathing art form. That is why our signature loaves are slow-fermented for up to 36 hours using our precious, wild sourdough starter—named <span className="italic text-gold-600 font-medium">"Aurora"</span>—which we have nurtured since our very first bake. This slow fermentation develops deep complex flavors and makes the bread naturally wholesome and easily digestible.
              </p>
              <p>
                From decadent custom celebration cakes sculpted by award-winning cake designers to flaky, buttery morning croissants and seasonal fruit tarts, we approach every recipe with pristine attention to detail, organic local flours, and farm-fresh ingredients.
              </p>
            </div>

            {/* Blockquote decoration */}
            <div className="pl-4 border-l-2 border-wood-900 italic text-wood-600 text-sm sm:text-base py-1">
              "We don't believe in shortcuts. Excellence requires patience, and the warmth of a community that gathers around the simple, beautiful aroma of freshly baked sourdough."
              <span className="block mt-2 text-xs font-mono font-semibold text-wood-900 not-italic uppercase tracking-wider">
                — GABRIEL & AMARA, FOUNDERS & HEAD BAKERS
              </span>
            </div>

            {/* Quick Badges / Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-white rounded-none border border-wood-900 text-center space-y-1">
                <Calendar className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="block font-serif text-xl font-bold text-wood-900">10+</span>
                <span className="block text-[10px] font-mono text-wood-500 uppercase tracking-wider font-semibold">Years Active</span>
              </div>
              <div className="p-4 bg-white rounded-none border border-wood-900 text-center space-y-1">
                <Trophy className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="block font-serif text-xl font-bold text-wood-900">15+</span>
                <span className="block text-[10px] font-mono text-wood-500 uppercase tracking-wider font-semibold">Baking Awards</span>
              </div>
              <div className="p-4 bg-white rounded-none border border-wood-900 text-center space-y-1">
                <Sparkles className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="block font-serif text-xl font-bold text-wood-900">100%</span>
                <span className="block text-[10px] font-mono text-wood-500 uppercase tracking-wider font-semibold">Natural Yeast</span>
              </div>
              <div className="p-4 bg-white rounded-none border border-wood-900 text-center space-y-1">
                <Heart className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="block font-serif text-xl font-bold text-wood-900">4.9★</span>
                <span className="block text-[10px] font-mono text-wood-500 uppercase tracking-wider font-semibold">Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Background gold decorative frame */}
            <div className="absolute -inset-3 border border-wood-900 rounded-none transform translate-x-2 translate-y-2 pointer-events-none opacity-60" />
            
            <div className="relative overflow-hidden rounded-none shadow-none aspect-4/5 border-2 border-wood-900 bg-wood-100">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                alt="Baker shaping sourdough loaf in wooden kitchen"
                className="w-full h-full object-cover transform hover:scale-105 duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-950/40 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-none border border-wood-900 shadow-none flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-wood-900 flex items-center justify-center text-white shrink-0 font-bold font-serif">W</div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-wood-900">Daily Stone Oven Baking</h4>
                  <p className="text-xs text-wood-600 font-light">Fresh bread loaded with warmth & nutrition</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
