import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import CustomCakes from './components/CustomCakes';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import SpecialOffers from './components/SpecialOffers';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InquiryCart from './components/InquiryCart';
import { MenuItem, InquiryItem } from './types';

export default function App() {
  // Inquiry Basket States
  const [cartItems, setCartItems] = useState<InquiryItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO Meta and Local Schema injection
  useEffect(() => {
    // 1. Set Title and Meta
    document.title = 'Wooden Bakery | Premium Artisan Breads, Cakes & Pastries';
    
    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = 'Experience the ultimate taste of handcrafted artisan breads, sourdoughs, elegant custom cakes, and fine French pastries. Baked daily in wood-fired stone ovens.';
    document.head.appendChild(metaDesc);

    // 2. Open Graph Tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Wooden Bakery | Handcrafted Premium Bread, Cakes & Pastries';
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.content = 'Order premium artisan bread, explore our customized birthday and wedding drip cakes, and claim holiday specials. Fresh daily.';
    document.head.appendChild(ogDesc);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = '/src/assets/images/bakery_hero_banner_1782616501647.jpg';
    document.head.appendChild(ogImage);

    // 3. Twitter Card Tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    document.head.appendChild(twitterCard);

    // 4. Local Business Schema Markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Bakery',
      'name': 'Wooden Bakery',
      'image': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
      '@id': 'https://woodenbakery.com/#bakery',
      'url': 'https://woodenbakery.com',
      'telephone': '+1-555-019-2834',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '456 Artisan Way, Flour District',
        'addressLocality': 'New York',
        'addressRegion': 'NY',
        'postalCode': '10012',
        'addressCountry': 'US'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '19:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '06:30',
          'closes': '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '07:00',
          'closes': '17:00'
        }
      ],
      'menu': 'https://woodenbakery.com/#menu',
      'servesCuisine': ['Bakery', 'French Pastries', 'Custom Cakes', 'Artisan Bread']
    });
    document.head.appendChild(schemaScript);

    // Scroll top button listener
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup elements on dismount
    return () => {
      document.head.removeChild(metaDesc);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDesc);
      document.head.removeChild(ogImage);
      document.head.removeChild(twitterCard);
      document.head.removeChild(schemaScript);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Basket Action Handlers
  const handleAddToInquiry = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === item.id);
      if (existing) {
        return prev.map((i) => (i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { product: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((i) => {
          if (i.product.id === productId) {
            const nextQty = i.quantity + delta;
            return { ...i, quantity: nextQty };
          }
          return i;
        })
        .filter((i) => i.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-wood-50 text-wood-900 font-serif border-4 md:border-8 border-wood-900">
      {/* 1. Header/Navigation Bar */}
      <Navbar cartItems={cartItems} onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Hero Section Banner */}
      <Hero onOrderNowClick={handleScrollToMenu} />

      {/* 3. About Us Block */}
      <About />

      {/* 4. Filterable & Searchable Product Menu */}
      <MenuSection onAddToInquiry={handleAddToInquiry} />

      {/* 5. Custom Orders & Requests form */}
      <CustomCakes />

      {/* 6. Why Choose Feature Card Deck */}
      <WhyChooseUs />

      {/* 7. Image Lightbox Photo Gallery */}
      <GallerySection />

      {/* 8. Six Testimonials Grid */}
      <Testimonials />

      {/* 9. Tear-off Promotional Coupons */}
      <SpecialOffers />

      {/* 10. Frequently Asked Questions Accordions */}
      <FAQSection />

      {/* 11. Contact Details & Social Chat Modules */}
      <ContactSection />

      {/* 12. Footer segment */}
      <Footer />

      {/* 13. Interactive Inquiry Basket Drawer */}
      <InquiryCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Scroll-to-Top Floating Trigger */}
      <button
        id="scroll-to-top-trigger"
        onClick={handleScrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 rounded-full bg-wood-850 hover:bg-gold-700 text-gold-100 hover:text-wood-950 shadow-2xl transition-all duration-300 transform hover:scale-115 active:scale-90 flex items-center justify-center cursor-pointer border border-wood-700 ${
          showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top of the page"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
