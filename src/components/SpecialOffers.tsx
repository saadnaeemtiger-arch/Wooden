import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BadgePercent, Copy, Check, Calendar, Sparkles } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data';

export default function SpecialOffers() {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeId(id);
      setTimeout(() => {
        setCopiedCodeId(null);
      }, 2000);
    });
  };

  return (
    <section className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <BadgePercent className="w-3.5 h-3.5 text-gold-500" />
            Seasonal Delights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900">
            Exclusive Baking Offers
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light max-w-2xl mx-auto leading-relaxed">
            Claim these limited-time promotional benefits. Simply copy the coupon code and reference it when submitting your Order Inquiry to redeem your discount!
          </p>
        </div>

        {/* Coupon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-none border-2 border-dashed border-wood-900 bg-white hover:bg-wood-50/10 hover:border-gold-500 transition-all p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            >
              {/* Left Side: Discount badge & textual content */}
              <div className="flex-1 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-wood-900 text-gold-400 font-mono font-bold text-xs rounded-none tracking-widest uppercase">
                    {offer.discount}
                  </span>
                  <span className="text-[10px] font-mono text-wood-500 flex items-center gap-1 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    {offer.expiry}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-wood-900">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-wood-700 leading-relaxed font-light">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Copy Coupon Trigger */}
              <div className="w-full sm:w-auto shrink-0 flex flex-col items-stretch sm:items-center justify-center p-4 bg-wood-50 rounded-none border border-wood-900 space-y-2 text-center">
                <span className="text-[10px] font-mono text-wood-500 uppercase tracking-widest font-bold">Coupon Code</span>
                
                <span className="block font-mono text-base font-bold text-wood-900 border border-dashed border-wood-900 px-4 py-1.5 rounded-none bg-white select-all">
                  {offer.code}
                </span>

                <button
                  id={`copy-offer-btn-${offer.id}`}
                  onClick={() => handleCopyCode(offer.code, offer.id)}
                  className={`px-4 py-2 text-xs font-serif font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    copiedCodeId === offer.id
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-800'
                      : 'bg-wood-900 text-wood-50 hover:bg-gold-500 hover:text-wood-950 border-wood-900'
                  }`}
                >
                  {copiedCodeId === offer.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scissors decorative line cutout */}
              <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 rounded-none rotate-45 bg-wood-50 border border-dashed border-wood-900 hidden md:block" />
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 rounded-none rotate-45 bg-wood-50 border border-dashed border-wood-900 hidden md:block" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
