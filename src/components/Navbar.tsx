import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Phone, Sparkles } from 'lucide-react';
import { InquiryItem } from '../types';

interface NavbarProps {
  cartItems: InquiryItem[];
  onOpenCart: () => void;
}

export default function Navbar({ cartItems, onOpenCart }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Custom Orders', href: '#custom-orders' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-wood-900 text-wood-50 py-2 px-4 text-center text-xs font-mono font-medium border-b border-wood-900/30 tracking-wider flex items-center justify-center gap-2 relative z-50">
        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
        <span>Freshness Guaranteed: Fresh Bread & Pastries Baked Daily in Our Traditional Wood Oven</span>
      </div>

      {/* Main Header */}
      <header
        id="app-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-wood-50/95 backdrop-blur-md border-b-2 border-wood-900 py-3 shadow-xs' : 'bg-wood-50/80 backdrop-blur-xs border-b border-wood-900/40 py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-none bg-wood-900 flex items-center justify-center border border-wood-900 group-hover:bg-gold-600 transition-all">
                <span className="font-serif text-2xl font-bold text-wood-50">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-wood-900 tracking-wide uppercase leading-tight group-hover:text-gold-600 transition-colors">
                  Wooden Bakery
                </span>
                <span className="text-[10px] font-mono text-gold-600 uppercase tracking-widest leading-none">
                  Artisan Wood Oven
                </span>
              </div>
            </a>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-serif font-medium text-wood-900 hover:text-gold-600 transition-colors relative py-1 hover:underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Cart / Inquiry Trigger */}
              <button
                id="navbar-cart-trigger"
                onClick={onOpenCart}
                className="p-2.5 rounded-none bg-wood-50 border-2 border-wood-900 text-wood-900 hover:text-wood-50 hover:bg-wood-900 transition-all relative flex items-center justify-center cursor-pointer"
                aria-label="Open Order Inquiry Basket"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {totalItemsCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold-400 text-wood-900 font-mono font-bold text-xs rounded-full flex items-center justify-center border border-wood-900 shadow-sm"
                    >
                      {totalItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Order Now Call button */}
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#menu');
                }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-none bg-wood-900 hover:bg-gold-600 text-wood-50 hover:text-wood-900 font-serif font-bold transition-all text-xs uppercase tracking-widest border border-wood-900 cursor-pointer"
              >
                Order Now
              </a>

              {/* Mobile Menu Toggler */}
              <button
                id="mobile-menu-toggler"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-none text-wood-900 hover:text-gold-600 hover:bg-wood-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            />

            {/* Links Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[110px] bg-wood-50 border-b-2 border-wood-900 p-6 z-30 lg:hidden flex flex-col gap-4 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center p-3 rounded-none bg-white hover:bg-wood-100 text-sm font-serif font-medium text-wood-900 hover:text-gold-600 transition-all border border-wood-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="border-t border-wood-200 pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-none bg-white text-wood-900 font-serif font-semibold border border-wood-900 text-sm hover:bg-wood-100"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Review Inquiry Basket ({totalItemsCount} items)</span>
                </button>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#menu');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-none bg-wood-900 hover:bg-gold-600 text-wood-50 hover:text-wood-900 font-serif font-bold uppercase tracking-widest text-xs border border-wood-900"
                >
                  Explore Our Menu & Order
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
