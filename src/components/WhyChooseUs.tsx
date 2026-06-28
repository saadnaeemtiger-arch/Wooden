import { Flame, Sparkles, Heart, Award, BadgePercent, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  // Map icons dynamically
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      case 'Heart': return <Heart className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      case 'Award': return <Award className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      case 'Smile': return <Smile className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
      default: return <Sparkles className="w-6 h-6 text-gold-500 group-hover:text-wood-950 transition-colors" />;
    }
  };

  return (
    <section className="py-24 bg-wood-900 text-wood-50 relative overflow-hidden border-b-2 border-wood-950">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 bg-wood-texture opacity-15 pointer-events-none" />

      {/* Aesthetic circle gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-none bg-gold-950/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-none bg-gold-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            The Wooden Bakery Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Why Choose Wooden Bakery?
          </h2>
          <div className="h-[2px] w-16 bg-gold-400 mx-auto" />
          <p className="text-sm sm:text-base text-wood-300 font-light max-w-2xl mx-auto leading-relaxed">
            Our commitment is to bring warmth, exceptional taste, and handcrafted perfection to your table. Here is the recipe that guides our daily baking standards.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-none bg-wood-950 border border-wood-800 hover:border-gold-500 transition-all shadow-none hover:bg-wood-900 duration-300 group text-left"
            >
              <div className="w-12 h-12 rounded-none bg-wood-900 border border-wood-800 flex items-center justify-center mb-6 shadow-none group-hover:bg-gold-500 transition-colors">
                {getFeatureIcon(item.iconName)}
              </div>
              
              <h3 className="font-serif text-lg font-bold text-gold-100 group-hover:text-gold-200 transition-colors mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-wood-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
