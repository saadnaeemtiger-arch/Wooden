import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Check, Sparkles, Phone, Mail, Clock, MapPin, ClipboardList } from 'lucide-react';
import { MenuItem, InquiryItem } from '../types';

interface InquiryCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: InquiryItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function InquiryCart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: InquiryCartProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    deliveryType: 'pickup' as 'pickup' | 'delivery',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) newErrors.time = 'Preferred time is required';

    if (formData.deliveryType === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (cartItems.length === 0) return;
      setStep(2);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderId('WB-' + Math.floor(100000 + Math.random() * 900000));
      setStep(3);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    onClearCart();
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      deliveryType: 'pickup',
      address: '',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            id="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            id="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#faf8f5] shadow-2xl z-50 flex flex-col border-l border-wood-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-wood-200 bg-[#faf8f5] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-600" />
                <h2 className="font-serif text-xl font-semibold text-wood-900">
                  {step === 1 && 'Order Inquiry Basket'}
                  {step === 2 && 'Inquiry Details'}
                  {step === 3 && 'Inquiry Received!'}
                </h2>
              </div>
              <button
                id="close-cart-btn"
                onClick={onClose}
                className="p-1 rounded-full text-wood-500 hover:text-gold-600 hover:bg-wood-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Stepper */}
            {step !== 3 && (
              <div className="px-5 py-3 bg-wood-100 border-b border-wood-200 flex justify-between items-center text-xs text-wood-600 font-mono">
                <span className={`${step === 1 ? 'text-gold-700 font-semibold' : 'opacity-60'}`}>1. Review Basket</span>
                <ArrowRight className="w-3 h-3 opacity-40" />
                <span className={`${step === 2 ? 'text-gold-700 font-semibold' : 'opacity-60'}`}>2. Delivery & Details</span>
                <ArrowRight className="w-3 h-3 opacity-40" />
                <span className="opacity-40">3. Confirmation</span>
              </div>
            )}

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-5">
              {step === 1 && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-wood-100 flex items-center justify-center text-wood-400 mb-4">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif text-lg font-medium text-wood-800 mb-2">Your basket is empty</h3>
                      <p className="text-sm text-wood-500 max-w-xs mb-6">
                        Explore our gourmet menu and add fresh bread, cakes, or pastries to initiate an inquiry!
                      </p>
                      <button
                        id="start-exploring-btn"
                        onClick={onClose}
                        className="px-6 py-2.5 bg-wood-800 hover:bg-wood-900 text-gold-100 font-medium rounded-lg transition-colors text-sm shadow"
                      >
                        Start Exploring
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-3 p-3 bg-white rounded-xl border border-wood-200 shadow-xs"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-lg object-cover bg-wood-100"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="text-sm font-medium text-wood-950 truncate">{item.product.name}</h4>
                              <span className="text-xs font-mono font-semibold text-gold-800">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                            <p className="text-xs text-wood-500 truncate mt-0.5">{item.product.description}</p>
                            
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-wood-400 font-mono">${item.product.price.toFixed(2)} each</span>
                              <div className="flex items-center gap-2 border border-wood-200 rounded-lg bg-wood-50 p-0.5">
                                <button
                                  id={`qty-minus-${item.product.id}`}
                                  onClick={() => onUpdateQuantity(item.product.id, -1)}
                                  className="p-1 rounded-md text-wood-600 hover:text-gold-700 hover:bg-white transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-mono font-medium px-1 text-wood-900 w-4 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  id={`qty-plus-${item.product.id}`}
                                  onClick={() => onUpdateQuantity(item.product.id, 1)}
                                  className="p-1 rounded-md text-wood-600 hover:text-gold-700 hover:bg-white transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Summary card */}
                      <div className="p-4 bg-wood-100/60 rounded-xl border border-wood-200/80 mt-6 space-y-2">
                        <div className="flex justify-between text-xs text-wood-600">
                          <span>Items Count</span>
                          <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</span>
                        </div>
                        <div className="flex justify-between text-xs text-wood-600">
                          <span>Subtotal Estimate</span>
                          <span className="font-mono">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-wood-200 my-2 pt-2 flex justify-between text-sm font-medium text-wood-950">
                          <span>Estimated Total</span>
                          <span className="font-mono text-gold-800">${totalPrice.toFixed(2)}</span>
                        </div>
                        <p className="text-[10px] text-wood-500 leading-tight mt-1">
                          *This is a non-binding inquiry. Our baking concierge will contact you within 2 hours to confirm flavor selection, allergen needs, delivery rates, and process final payment.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}

              {step === 2 && (
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-4 pb-6">
                  <div>
                    <label className="block text-xs font-medium text-wood-700 mb-1">Full Name *</label>
                    <input
                      id="form-name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2 text-sm bg-white border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-wood-700 mb-1">Email Address *</label>
                      <input
                        id="form-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-white border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-wood-700 mb-1">Phone Number *</label>
                      <input
                        id="form-phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-white border ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                        placeholder="+1 (555) 019-2834"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-wood-700 mb-1">Desired Date *</label>
                      <input
                        id="form-date-input"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-white border ${errors.date ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                      />
                      {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-wood-700 mb-1">Preferred Time *</label>
                      <input
                        id="form-time-input"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-white border ${errors.time ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                      />
                      {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-wood-700 mb-1">Delivery / Pick-up Option *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.deliveryType === 'pickup' ? 'border-gold-600 bg-gold-50/50 text-gold-900 font-medium' : 'border-wood-300 bg-white hover:bg-wood-50'}`}>
                        <input
                          id="form-pickup-radio"
                          type="radio"
                          name="deliveryType"
                          value="pickup"
                          checked={formData.deliveryType === 'pickup'}
                          onChange={() => setFormData({ ...formData, deliveryType: 'pickup' })}
                          className="sr-only"
                        />
                        <MapPin className="w-4 h-4" />
                        <span>Store Pick-up</span>
                      </label>
                      <label className={`flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.deliveryType === 'delivery' ? 'border-gold-600 bg-gold-50/50 text-gold-900 font-medium' : 'border-wood-300 bg-white hover:bg-wood-50'}`}>
                        <input
                          id="form-delivery-radio"
                          type="radio"
                          name="deliveryType"
                          value="delivery"
                          checked={formData.deliveryType === 'delivery'}
                          onChange={() => setFormData({ ...formData, deliveryType: 'delivery' })}
                          className="sr-only"
                        />
                        <Clock className="w-4 h-4" />
                        <span>Doorstep Delivery</span>
                      </label>
                    </div>
                  </div>

                  {formData.deliveryType === 'delivery' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-medium text-wood-700 mb-1">Delivery Address *</label>
                      <textarea
                        id="form-address-input"
                        rows={2}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-white border ${errors.address ? 'border-red-400 focus:ring-red-200' : 'border-wood-300 focus:ring-gold-200'} rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500`}
                        placeholder="123 Artisan Lane, Flour District"
                      />
                      {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-wood-700 mb-1">Special Baking Notes / Allergens</label>
                    <textarea
                      id="form-notes-input"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-wood-300 focus:ring-gold-200 rounded-lg focus:outline-hidden focus:ring-2 focus:border-gold-500"
                      placeholder="Eggless preferences, custom cake text, allergen warnings, or gate entry codes..."
                    />
                  </div>

                  <div className="p-3 bg-gold-50 border border-gold-200/50 rounded-lg text-xs text-gold-800 flex gap-2">
                    <ClipboardList className="w-4 h-4 shrink-0 mt-0.5 text-gold-600" />
                    <div>
                      <p className="font-semibold">Review your estimate</p>
                      <p className="mt-0.5 font-medium">Estimated subtotal is <span className="font-mono text-gold-900">${totalPrice.toFixed(2)}</span>. Payment will be coordinated securely via phone/email after confirmation.</p>
                    </div>
                  </div>
                </form>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 bg-gold-100 text-gold-900 text-[10px] font-mono rounded-full font-semibold">
                      Inquiry ID: {orderId}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-wood-950">We have received your order request!</h3>
                    <p className="text-sm text-wood-600 max-w-sm">
                      Thank you, <span className="font-medium text-wood-900">{formData.name}</span>. Our baking concierge will review the availability of your items and contact you shortly.
                    </p>
                  </div>

                  <div className="w-full border-t border-b border-wood-200 py-3 my-4 text-left space-y-2 text-xs text-wood-700 font-mono bg-white p-3 rounded-lg border">
                    <div className="flex justify-between font-semibold text-wood-900 mb-1">
                      <span>Receipt Summary</span>
                      <span>Estimated Invoice</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer</span>
                      <span className="text-wood-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone</span>
                      <span className="text-wood-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service</span>
                      <span className="text-wood-900 capitalize">{formData.deliveryType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scheduled for</span>
                      <span className="text-wood-900">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="border-t border-dashed border-wood-200 pt-2 flex justify-between font-bold text-sm text-gold-900">
                      <span>Total Estimate</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-wood-100 rounded-lg text-xs text-wood-600 border border-wood-200">
                    <p className="font-medium">What happens next?</p>
                    <p className="mt-1">
                      A copy of this inquiry invoice has been dispatched to <span className="font-medium text-wood-900">{formData.email}</span>. We will follow up via phone to coordinate the secure pick-up or delivery arrangements.
                    </p>
                  </div>

                  <button
                    id="finish-order-btn"
                    onClick={handleReset}
                    className="w-full py-3 bg-wood-800 hover:bg-wood-900 text-gold-50 font-semibold rounded-lg transition-colors text-sm shadow flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>Done & Continue Exploring</span>
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer buttons */}
            {step !== 3 && cartItems.length > 0 && (
              <div className="p-5 border-t border-wood-200 bg-white">
                <div className="flex justify-between text-sm font-medium text-wood-950 mb-3">
                  <span>Inquiry Estimate</span>
                  <span className="font-mono text-lg text-gold-800 font-bold">${totalPrice.toFixed(2)}</span>
                </div>

                {step === 1 ? (
                  <button
                    id="checkout-next-btn"
                    onClick={handleNext}
                    className="w-full py-3.5 bg-wood-800 hover:bg-wood-900 text-gold-100 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                  >
                    <span>Proceed to Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      id="checkout-back-btn"
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3.5 border border-wood-300 text-wood-700 hover:bg-wood-100 font-medium rounded-lg transition-colors text-sm text-center"
                    >
                      Back
                    </button>
                    <button
                      id="checkout-submit-btn"
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="col-span-2 py-3.5 bg-gold-700 hover:bg-gold-800 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Submit Order Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
