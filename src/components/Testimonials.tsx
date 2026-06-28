import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-gold-500" />
            Voices of Our Community
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900">
            Loved by Our Customers
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light max-w-2xl mx-auto leading-relaxed">
            Discover why Wooden Bakery is a local favorite. Read honest reviews from food critics, happy brides, sweet families, and our daily morning coffee regulars.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-none bg-white border border-wood-900 hover:border-gold-500 hover:shadow-none transition-all flex flex-col justify-between space-y-6 group"
            >
              {/* Review Text */}
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold-500 fill-gold-500 transform group-hover:scale-110 transition-transform duration-200"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                {/* Comment quote */}
                <p className="text-sm text-wood-700 font-light italic leading-relaxed relative text-left">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Author Metadata */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-wood-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-none object-cover bg-wood-50 border border-wood-900"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif text-sm font-bold text-wood-900 leading-tight">
                    {review.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gold-600 uppercase tracking-widest font-bold">
                    {review.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
