import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-gold-500" />
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wood-900">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light leading-relaxed">
            Everything you need to know about placing custom cake orders, allergen options, pick-up schedules, and delivery logistics for Wooden Bakery.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-none border border-wood-900 shadow-none hover:border-gold-500 overflow-hidden transition-all"
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-serif text-base font-bold text-wood-900 hover:text-gold-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="shrink-0 p-1 rounded-none border border-wood-900 bg-wood-50 text-wood-700 transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-wood-700 leading-relaxed font-light border-t border-wood-900/10 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
