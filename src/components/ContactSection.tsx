import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageSquare, X, ChevronRight, Sparkles } from 'lucide-react';

export default function ContactSection() {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSending, setIsFormSending] = useState(false);

  // WhatsApp Chat Bubble States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'chef'; text: string; time: string }>>([
    { sender: 'chef', text: "Hello! I'm Amara, Head Baker at Wooden Bakery. How can I help you sweeten your day? 🍞✨", time: 'Just now' },
  ]);
  const [isChefTyping, setIsChefTyping] = useState(false);

  // Contact Form Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Provide a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message text cannot be empty';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsFormSending(true);
    setTimeout(() => {
      setIsFormSending(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    }, 1500);
  };

  // WhatsApp Simulation Actions
  const handleSendWhatsAppMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: now }]);
    setChatInput('');
    setIsChefTyping(true);

    // Auto replies based on keywords
    setTimeout(() => {
      let reply = "Thanks for reaching out! I'm currently kneading some sourdough loaves, but I'll reply to your message in just a bit. Feel free to leave your email or submit an inquiry! 🥐🍰";
      
      const lower = userMsg.toLowerCase();
      if (lower.includes('cake') || lower.includes('wedding') || lower.includes('birthday')) {
        reply = "Ooh, a celebration! We absolutely love designing custom cakes. I recommend using our 'Request a Custom Cake' form just above on this page. Or let me know the date & guests count here and I can coordinate! 🎂🎉";
      } else if (lower.includes('delivery') || lower.includes('ship')) {
        reply = "We offer local doorstep deliveries within a 15-mile radius, and temperature-controlled custom courier transport for tiered cakes. What is your delivery zip code? 🚚💨";
      } else if (lower.includes('gluten') || lower.includes('eggless') || lower.includes('allergy')) {
        reply = "We have organic eggless options and naturally gluten-friendly tarts and macarons! Just mention your allergen constraints in your order notes so we can handle them with care in our kitchen. 🌾🚫";
      }

      setChatMessages((prev) => [...prev, { sender: 'chef', text: reply, time: now }]);
      setIsChefTyping(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-wood-50 relative overflow-hidden bg-wood-texture border-b-2 border-wood-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-wood-900">
            Visit Our Bakery & Cafe
          </h2>
          <div className="h-[2px] w-16 bg-wood-900 mx-auto" />
          <p className="text-sm sm:text-base text-wood-700 font-light max-w-2xl mx-auto leading-relaxed">
            Drop by for a warm cup of coffee and fresh pastries, call us to discuss custom orders, or fill out the secure contact form to reach our baking desk.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Contact Cards List */}
              <div className="space-y-4 text-left">
                <div className="flex gap-4 p-4 bg-white rounded-none border border-wood-900 shadow-none">
                  <div className="w-10 h-10 rounded-none bg-wood-50 border border-wood-900 flex items-center justify-center text-gold-600 shrink-0 shadow-none">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-wood-500 uppercase tracking-widest font-bold">Phone Inquiries</h4>
                    <a href="tel:+15550192834" className="text-sm font-serif font-bold text-wood-900 hover:text-gold-600 transition-colors mt-0.5 block">
                      +1 (555) 019-2834
                    </a>
                    <p className="text-[11px] text-wood-500 mt-0.5">Mon–Sun, 7:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-none border border-wood-900 shadow-none">
                  <div className="w-10 h-10 rounded-none bg-wood-50 border border-wood-900 flex items-center justify-center text-gold-600 shrink-0 shadow-none">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-wood-500 uppercase tracking-widest font-bold">Email Desk</h4>
                    <a href="mailto:hello@woodenbakery.com" className="text-sm font-serif font-bold text-wood-900 hover:text-gold-600 transition-colors mt-0.5 block">
                      hello@woodenbakery.com
                    </a>
                    <p className="text-[11px] text-wood-500 mt-0.5">Our baking concierge replies within 2 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-none border border-wood-900 shadow-none">
                  <div className="w-10 h-10 rounded-none bg-wood-50 border border-wood-900 flex items-center justify-center text-gold-600 shrink-0 shadow-none">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-wood-500 uppercase tracking-widest font-bold">Our Flagship Location</h4>
                    <p className="text-sm font-serif font-bold text-wood-900 mt-0.5">
                      456 Artisan Way, Flour District, NY 10012
                    </p>
                    <p className="text-[11px] text-wood-500 mt-0.5">Convenient street parking & wheelchair accessible</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 bg-wood-900 text-wood-200 rounded-none border border-wood-900 space-y-3 text-left">
                <div className="flex items-center gap-2 text-gold-400 border-b border-wood-800 pb-2 mb-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white">Baking & Opening Hours</h4>
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white font-semibold">7:00 AM – 7:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturdays</span><span className="text-white font-semibold">6:30 AM – 8:00 PM</span></div>
                  <div className="flex justify-between"><span>Sundays</span><span className="text-white font-semibold">7:00 AM – 5:00 PM</span></div>
                  <div className="border-t border-wood-800 pt-1.5 text-[10px] text-gold-300">
                    *Our wood ovens are ignited daily at 3:30 AM. Fresh bread hits the racks at 7:00 AM.
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Google Map with directions capability */}
            <div className="relative rounded-none border border-wood-900 overflow-hidden shadow-none group bg-wood-100 min-h-[180px] flex-1 flex flex-col justify-end p-4">
              {/* Map visual background */}
              <div className="absolute inset-0 bg-wood-200/40 bg-[radial-gradient(#9c826c_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
              
              {/* Fake road lines & custom pin overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  {/* Decorative Ripple ring around pin */}
                  <div className="absolute -inset-4 rounded-none border-2 border-wood-900 animate-ping opacity-25" />
                  <div className="w-10 h-10 rounded-none bg-wood-900 border-2 border-white flex items-center justify-center shadow-none relative z-10 text-gold-300 font-serif font-bold">
                    W
                  </div>
                </div>
              </div>

              <div className="absolute top-3 left-3 px-2 py-1 bg-white rounded-none text-[10px] font-mono text-wood-600 border border-wood-900">
                40.7128° N, 74.0060° W
              </div>

              {/* Map card metadata */}
              <div className="relative z-10 p-3 bg-white rounded-none border border-wood-900 shadow-none flex items-center justify-between gap-3">
                <div className="text-left">
                  <h5 className="font-serif text-xs font-bold text-wood-900">Wooden Bakery Flagship</h5>
                  <p className="text-[10px] text-wood-500 leading-none mt-1 font-light">456 Artisan Way, Flour District</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 rounded-none font-serif text-[10px] font-bold uppercase tracking-widest transition-all border border-wood-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Directions</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Secure Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-none border border-wood-900 shadow-none flex flex-col justify-between text-left">
            <div className="space-y-4 mb-6">
              <h3 className="font-serif text-xl font-bold text-wood-900">Send Us a Direct Message</h3>
              <p className="text-xs text-wood-700 font-light leading-relaxed">
                Have general questions about cake tastings, custom dietary orders, corporate gifts, or wholesale deliveries? Submit your details, and our bakery manager will get right back to you.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Your Name *</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 py-2 text-xs font-serif bg-white border ${formErrors.name ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                        placeholder="e.g. John Doe"
                      />
                      {formErrors.name && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Email Address *</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-xs font-serif bg-white border ${formErrors.email ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Message Subject *</label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3 py-2 text-xs font-serif bg-white border ${formErrors.subject ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                      placeholder="e.g. Wholesale inquiry, Event booking, etc."
                    />
                    {formErrors.subject && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{formErrors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold text-wood-900 mb-1">Your Message *</label>
                    <textarea
                      id="contact-message-input"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3 py-2 text-xs font-serif bg-white border ${formErrors.message ? 'border-red-500' : 'border-wood-900'} rounded-none focus:outline-hidden focus:bg-white text-wood-900`}
                      placeholder="Type your questions or feedback here..."
                    />
                    {formErrors.message && <p className="text-[10px] text-red-500 mt-1 font-mono font-semibold">{formErrors.message}</p>}
                  </div>
                </div>

                <button
                  id="submit-contact-message-btn"
                  type="submit"
                  disabled={isFormSending}
                  className="w-full py-3.5 mt-6 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 font-serif font-bold uppercase tracking-widest text-xs rounded-none border border-wood-900 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isFormSending ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-wood-50" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Transmitting message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-400" />
                      <span>Transmit Secure Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 flex-1 flex flex-col justify-center items-center space-y-4">
                <div className="w-12 h-12 rounded-none bg-emerald-100 border border-emerald-800 flex items-center justify-center text-emerald-800">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-wood-900">Message Safely Dispatched!</h4>
                  <p className="text-xs text-wood-700 max-w-sm mx-auto leading-relaxed font-light">
                    We have successfully received your inquiry ticket. A copy of this confirmation has been logs on our secure systems, and we will contact you within 2 business hours.
                  </p>
                </div>
                <button
                  id="reset-contact-form-btn"
                  onClick={() => setFormSubmitted(false)}
                  className="px-8 py-3 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-wood-50 text-xs font-serif font-bold uppercase tracking-widest rounded-none border border-wood-900 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Action Button and Simulated Chat Widget */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end">
        {/* Chat Drawer Box */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="w-80 h-96 bg-white rounded-none shadow-2xl border-2 border-wood-900 flex flex-col overflow-hidden mb-4 mr-1"
            >
              {/* WhatsApp Chat Header */}
              <div className="p-4 bg-wood-900 text-white flex items-center justify-between border-b border-wood-900">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-none bg-gold-400 border border-wood-900 flex items-center justify-center font-serif text-sm font-bold text-wood-950">
                      A
                    </div>
                    {/* Active green status light */}
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-none border border-wood-900" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold leading-tight">Amara • Head Chef</h5>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Online • Replying</span>
                  </div>
                </div>
                <button
                  id="close-whatsapp-chat"
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 rounded-none hover:bg-white/10 text-wood-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 overflow-y-auto p-4 bg-wood-50 space-y-3 flex flex-col">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] rounded-none p-3 text-xs text-left relative leading-relaxed border ${
                      msg.sender === 'chef'
                        ? 'bg-white text-wood-900 self-start border-wood-900'
                        : 'bg-wood-900 text-gold-300 self-end border-wood-900'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[8px] font-mono text-wood-400 text-right mt-1.5">{msg.time}</span>
                  </div>
                ))}
                {isChefTyping && (
                  <div className="bg-white text-wood-500 text-xs self-start rounded-none p-3 border border-wood-900 flex items-center gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce" style={{ animationDelay: '150ms' }}>●</span>
                    <span className="animate-bounce" style={{ animationDelay: '300ms' }}>●</span>
                  </div>
                )}
              </div>

              {/* Chat Input Field Footer */}
              <form onSubmit={handleSendWhatsAppMessage} className="p-3 bg-white border-t border-wood-900 flex gap-2">
                <input
                  id="whatsapp-chat-input"
                  type="text"
                  placeholder="Ask about cakes, breads..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs font-serif bg-wood-50 border border-wood-900 rounded-none focus:outline-hidden focus:bg-white text-wood-900"
                />
                <button
                  id="send-whatsapp-chat-btn"
                  type="submit"
                  className="p-2 bg-wood-900 hover:bg-gold-500 hover:text-wood-950 text-white rounded-none border border-wood-900 transition-all cursor-pointer shadow-none shrink-0 flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>

        {/* The Trigger button itself */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 rounded-none bg-wood-900 hover:bg-gold-500 text-white hover:text-wood-950 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative border-2 border-wood-900 cursor-pointer group"
          aria-label="Chat with our Head Baker on WhatsApp"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-none border border-white animate-pulse" />
              {/* Tooltip on hover */}
              <div className="absolute right-16 px-3 py-1.5 rounded-none bg-wood-900 text-gold-300 font-serif text-[10px] font-bold uppercase tracking-widest shadow-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-wood-900">
                Ask Head Chef
              </div>
            </>
          )}
        </button>
      </div>

    </section>
  );
}
