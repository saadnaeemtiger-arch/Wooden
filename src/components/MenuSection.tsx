import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShoppingBag, Star, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToInquiry: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToInquiry }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', name: 'Full Menu' },
    { id: 'bread', name: 'Artisan Breads' },
    { id: 'cake', name: 'Cakes & Occasions' },
    { id: 'pastry', name: 'Fine Pastries' },
    { id: 'cookie', name: 'Cookies & Sweets' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToInquiry = (item: MenuItem) => {
    onAddToInquiry(item);
    
    // Set adding feedback state
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Baked Fresh Daily
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900">
            Our Signature Creations
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our curated menu of freshly kneaded artisan breads, customizable celebration cakes, flaky morning pastries, and delicate sweet confections.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white p-4 sm:p-5 rounded-none border-2 border-wood-900">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-serif font-bold tracking-widest uppercase rounded-none transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-wood-900 text-gold-400'
                    : 'text-wood-700 hover:text-wood-900 hover:bg-wood-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-wood-500" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search bread, pastry, cake..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-serif bg-wood-50 border border-wood-900 rounded-none focus:outline-hidden focus:bg-white text-wood-900 transition-all"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-none border-2 border-wood-900">
            <SlidersHorizontal className="w-12 h-12 text-wood-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-wood-900">No baked items found</h3>
            <p className="text-sm text-wood-600 mt-1 max-w-sm mx-auto font-light">
              We couldn't find anything matching "{searchQuery}". Try searching for popular items like "sourdough", "croissant", or "cake".
            </p>
            <button
              id="clear-filters-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-6 px-6 py-2.5 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 text-xs font-serif font-bold tracking-widest uppercase rounded-none border border-wood-900 transition-colors cursor-pointer"
            >
              Reset Filters & Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white rounded-none border border-wood-900 transition-all flex flex-col group overflow-hidden shadow-none hover:border-gold-500"
                >
                  {/* Card Image Area */}
                  <div className="relative aspect-4/3 overflow-hidden bg-wood-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow inside card image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Ribbon tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-wood-900/90 text-gold-300 font-mono text-[9px] font-bold tracking-widest uppercase border border-wood-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating overlay badge */}
                    {item.rating && (
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-white text-wood-900 font-mono text-[10px] font-bold flex items-center gap-1 border border-wood-900 shadow-none">
                        <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Text Description */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-serif text-base font-bold text-wood-900 group-hover:text-gold-600 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-wood-600 line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Pricing and Action Button */}
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-wood-100">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-wood-400 uppercase tracking-widest leading-none">Price Estimate</span>
                        <span className="font-mono text-base font-bold text-wood-900 mt-1">${item.price.toFixed(2)}</span>
                      </div>

                      <button
                        id={`order-now-btn-${item.id}`}
                        onClick={() => handleAddToInquiry(item)}
                        className={`px-3 py-2 text-xs font-serif font-bold uppercase tracking-widest rounded-none transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
                          addedItemIds[item.id]
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-800'
                            : 'bg-white text-wood-900 hover:bg-wood-900 hover:text-wood-50 border-wood-900'
                        }`}
                      >
                        {addedItemIds[item.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
