import { useState, DragEvent, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, Heart, Gift, Sparkles, GraduationCap, Briefcase, FileUp, Check, X, Calendar, Users, Info } from 'lucide-react';
import { CUSTOM_CAKE_IMAGE, CAKE_OCCASIONS } from '../data';

export default function CustomCakes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Weddings',
    guests: '20-50',
    layers: '2',
    flavor: 'Chocolate Fudge',
    date: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake': return <Cake className="w-5 h-5 text-gold-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-gold-500" />;
      case 'Gift': return <Gift className="w-5 h-5 text-gold-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-gold-500" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-gold-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-gold-500" />;
      default: return <Cake className="w-5 h-5 text-gold-500" />;
    }
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!formData.date) tempErrors.date = 'Event date is required';
    if (!formData.description.trim()) tempErrors.description = 'Please tell us a bit about your design theme';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Reset form states
    setTimeout(() => {
      setIsSubmitted(false);
      setFileName('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        occasion: 'Weddings',
        guests: '20-50',
        layers: '2',
        flavor: 'Chocolate Fudge',
        date: '',
        description: '',
      });
      setErrors({});
    }, 300);
  };

  return (
    <section id="custom-orders" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Columns */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="absolute -inset-3 border border-wood-900 rounded-none transform -translate-x-2 translate-y-2 pointer-events-none opacity-60" />
            
            <div className="relative overflow-hidden rounded-none shadow-none aspect-4/3 border-2 border-wood-900 bg-wood-100">
              <img
                src={CUSTOM_CAKE_IMAGE}
                alt="Luxury customized wedding cake by Wooden Bakery"
                className="w-full h-full object-cover transform hover:scale-105 duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-wood-900/95 text-gold-300 border border-wood-900 rounded-none flex items-center justify-between shadow-none">
                <div className="text-left">
                  <h4 className="font-serif text-sm font-bold text-white">Award-Winning Craftsmanship</h4>
                  <p className="text-[11px] text-wood-200">Custom wedding and event cakes designed to stun</p>
                </div>
                <div className="px-2 py-1 rounded-none bg-gold-400 text-wood-950 font-mono text-[10px] font-bold">
                  Bespoke
                </div>
              </div>
            </div>
          </div>

          {/* Texts Columns */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center gap-1.5">
                <Cake className="w-3.5 h-3.5 text-gold-500" />
                Celebration Masterpieces
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900 leading-tight">
                Your Dreams, Sculpted in Gourmet Cake Artistry
              </h2>
              <p className="text-sm sm:text-base text-wood-700 font-light leading-relaxed">
                Whether you are celebrating a magnificent wedding, a milestone anniversary, or a sweet first birthday, our custom cake studio brings your grandest visions to spectacular, delicious life. We collaborate on design sketches, flavor pairings, and details down to the last hand-painted petal.
              </p>
            </div>

            {/* Occasion Cards list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CAKE_OCCASIONS.map((occ) => (
                <div
                  key={occ.id}
                  className="p-4 bg-white rounded-none border border-wood-900 hover:border-gold-500 transition-all text-left"
                >
                  <div className="w-9 h-9 rounded-none bg-wood-50 border border-wood-900 flex items-center justify-center mb-3 shadow-none">
                    {getIcon(occ.icon)}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-wood-900 mb-1">{occ.name}</h4>
                  <p className="text-[11px] text-wood-600 leading-tight font-light">{occ.description}</p>
                </div>
              ))}
            </div>

            {/* Trigger Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="request-custom-cake-btn"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 font-serif font-bold rounded-none transition-all flex items-center gap-2 uppercase tracking-widest text-xs border border-wood-900 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request a Custom Cake</span>
              </button>
              <p className="text-xs text-wood-500 max-w-xs font-light leading-tight">
                *We recommend booking wedding cakes 2 to 6 months in advance. Standard celebration cakes require at least 5 to 7 days notice.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Consultation Request Form Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/40 z-50"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed inset-x-4 top-10 bottom-10 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl bg-wood-50 z-50 rounded-none shadow-2xl border-2 border-wood-900 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-wood-900 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5 text-gold-600" />
                  <h3 className="font-serif text-lg font-bold text-wood-900">Bespoke Cake Consultation</h3>
                </div>
                <button
                  id="close-custom-cake-modal"
                  onClick={handleClose}
                  className="p-1 rounded-none text-wood-500 hover:text-wood-900 hover:bg-wood-100 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-xs text-wood-700 font-light leading-relaxed text-left">
                      Fill out the details of your dream cake below, and our award-winning cake designers will craft a personalized quotation and schedule a complimentary virtual tasting session!
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Your Name *</label>
                        <input
                          id="cake-name-input"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-3 py-2 text-xs font-serif bg-white border ${errors.name ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                          placeholder="Full Name"
                        />
                        {errors.name && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Occasion *</label>
                        <select
                          id="cake-occasion-select"
                          value={formData.occasion}
                          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-serif bg-white border border-wood-900 rounded-none focus:outline-hidden focus:bg-white text-wood-900"
                        >
                          <option>Weddings</option>
                          <option>Birthdays</option>
                          <option>Anniversaries</option>
                          <option>Baby Showers</option>
                          <option>Graduation Parties</option>
                          <option>Corporate Events</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Email Address *</label>
                        <input
                          id="cake-email-input"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-3 py-2 text-xs font-serif bg-white border ${errors.email ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Phone Number *</label>
                        <input
                          id="cake-phone-input"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-3 py-2 text-xs font-serif bg-white border ${errors.phone ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                          placeholder="+1 (555) 012-3456"
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-left">
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-wood-500" />
                          <span>Guests</span>
                        </label>
                        <select
                          id="cake-guests-select"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-serif bg-white border border-wood-900 rounded-none text-wood-900 focus:outline-hidden focus:bg-white"
                        >
                          <option>Under 20</option>
                          <option>20-50</option>
                          <option>50-100</option>
                          <option>100-200</option>
                          <option>200+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Tiers</label>
                        <select
                          id="cake-layers-select"
                          value={formData.layers}
                          onChange={(e) => setFormData({ ...formData, layers: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-serif bg-white border border-wood-900 rounded-none text-wood-900 focus:outline-hidden focus:bg-white"
                        >
                          <option>1 Tier</option>
                          <option>2 Tiers</option>
                          <option>3 Tiers</option>
                          <option>4+ Tiers</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-wood-900 mb-1 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-wood-500" />
                          <span>Event Date *</span>
                        </label>
                        <input
                          id="cake-date-input"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={`w-full px-3 py-2 text-xs font-serif bg-white border ${errors.date ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white`}
                        />
                        {errors.date && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{errors.date}</p>}
                      </div>
                    </div>

                    <div className="text-left">
                      <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Preferred Flavor Profile</label>
                      <select
                        id="cake-flavor-select"
                        value={formData.flavor}
                        onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-serif bg-white border border-wood-900 rounded-none text-wood-900 focus:outline-hidden focus:bg-white"
                      >
                        <option>Chocolate Fudge with Salted Caramel</option>
                        <option>Madagascar Vanilla Bean with Fresh Raspberries</option>
                        <option>Red Velvet with Velvet Cream Cheese</option>
                        <option>Zesty Lemon Curd with Elderflower buttercream</option>
                        <option>Hazelnut Praline with Chocolate Ganache</option>
                      </select>
                    </div>

                    <div className="text-left">
                      <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Bespoke Design Theme & Details *</label>
                      <textarea
                        id="cake-details-textarea"
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className={`w-full px-3 py-2 text-xs font-serif bg-white border ${errors.description ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                        placeholder="Tell us about your event theme, favorite colors, text inscription required, flowers, or specific structures..."
                      />
                      {errors.description && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{errors.description}</p>}
                    </div>

                    {/* Drag and Drop File Upload */}
                    <div className="text-left">
                      <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Inspirations / Reference Images</label>
                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-none p-4 text-center cursor-pointer transition-all ${
                          dragActive ? 'border-gold-500 bg-gold-50' : 'border-wood-900 bg-white hover:bg-wood-50'
                        }`}
                      >
                        <input
                          id="cake-file-upload"
                          type="file"
                          multiple={false}
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*"
                        />
                        <label htmlFor="cake-file-upload" className="cursor-pointer">
                          <FileUp className="w-6 h-6 text-wood-400 mx-auto mb-1" />
                          <span className="block text-xs text-wood-900 font-bold font-serif">
                            {fileName ? `Selected: ${fileName}` : 'Drag & Drop or Click to Upload inspiration image'}
                          </span>
                          <span className="block text-[10px] text-wood-500 mt-0.5">JPEG, PNG up to 10MB</span>
                        </label>
                      </div>
                    </div>

                    {/* Estimate Informational card */}
                    <div className="p-4 bg-gold-50 border border-wood-900 rounded-none text-left text-[11px] text-wood-900 flex gap-2">
                      <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-serif font-bold">Complimentary Tasting Included</p>
                        <p className="text-wood-700 leading-tight mt-0.5">
                          Every custom order above 2 tiers includes a complimentary cake tasting flight of 5 flavors for up to 3 guests at our bakery salon or delivered to your door.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-custom-cake-form"
                      type="submit"
                      className="w-full py-3.5 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 font-serif font-bold uppercase tracking-widest text-xs rounded-none border border-wood-900 transition-colors cursor-pointer text-center"
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-12 h-12 rounded-none bg-emerald-100 border border-emerald-800 flex items-center justify-center text-emerald-800 mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-wood-900">Consultation Request Dispatched!</h4>
                      <p className="text-sm text-wood-700 max-w-sm mx-auto font-light leading-relaxed">
                        Thank you, <span className="font-bold text-wood-900">{formData.name}</span>. Our head cake architect will review your inspiration notes for the <span className="font-bold text-gold-600">{formData.occasion}</span> and contact you at <span className="font-bold text-wood-900">{formData.phone}</span> within 24 hours.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white border border-wood-900 text-left text-xs text-wood-700 rounded-none max-w-sm mx-auto space-y-1.5 font-mono shadow-none">
                      <p className="font-bold text-wood-900 border-b border-wood-900/10 pb-1 mb-2">Cake Reservation Summary</p>
                      <div className="flex justify-between"><span>Event Type:</span><span className="text-wood-900 font-semibold">{formData.occasion}</span></div>
                      <div className="flex justify-between"><span>Guest Range:</span><span className="text-wood-900 font-semibold">{formData.guests}</span></div>
                      <div className="flex justify-between"><span>Preferred Flavor:</span><span className="text-wood-900 font-semibold truncate max-w-[180px]">{formData.flavor}</span></div>
                      <div className="flex justify-between"><span>Scheduled Date:</span><span className="text-wood-900 font-semibold">{formData.date}</span></div>
                      {fileName && <div className="flex justify-between"><span>Inspiration:</span><span className="text-emerald-800 font-bold">✓ {fileName}</span></div>}
                    </div>

                    <button
                      id="close-success-cake-btn"
                      onClick={handleClose}
                      className="px-8 py-3 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 text-xs font-serif font-bold uppercase tracking-widest rounded-none transition-colors border border-wood-900 cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
