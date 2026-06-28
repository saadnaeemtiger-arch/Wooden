import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon, Sparkles, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev', e?: MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (lightboxIndex === null) return;
    
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex >= GALLERY_ITEMS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_ITEMS.length - 1;
    
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-gold-500" />
            Visual Feast
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900">
            A Glimpse of Wooden Bakery
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our cozy bakery shop, inspect the flour-dusted hands of our bakers, and see the artistic detail that goes into our handcrafted products.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-none overflow-hidden bg-wood-100 border border-wood-900 shadow-none cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-wood-950/80 via-wood-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />
              
              {/* Top metadata overlay - visible on hover */}
              <div className="absolute top-4 left-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="px-2.5 py-1 rounded-none bg-gold-400 text-wood-950 font-mono text-[9px] font-bold uppercase tracking-wider border border-gold-500">
                  {item.category}
                </span>
              </div>

              {/* Center icon - visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-none bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom titles - visible on hover */}
              <div className="absolute bottom-4 left-4 right-4 text-left transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif text-sm font-semibold text-white leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-55 flex flex-col items-center justify-center p-4 md:p-10 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-none bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              id="lightbox-prev-btn"
              onClick={(e) => navigateLightbox('prev', e)}
              className="absolute left-4 p-3 rounded-none bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 flex items-center justify-center border border-white/20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="lightbox-next-btn"
              onClick={(e) => navigateLightbox('next', e)}
              className="absolute right-4 p-3 rounded-none bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 flex items-center justify-center border border-white/20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Viewport Area */}
            <div
              className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-none shadow-2xl border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Footer Content info */}
            <div
              className="text-center mt-6 max-w-xl space-y-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-block px-3 py-1 rounded-none bg-gold-400 text-wood-950 font-serif text-[10px] font-bold uppercase tracking-widest border border-gold-500">
                {GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-lg md:text-xl font-bold text-white">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h4>
              <p className="text-xs text-wood-400 font-mono">
                Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
