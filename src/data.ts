import { 
  MenuItem, 
  CustomCakeOccasion, 
  WhyChooseUsItem, 
  GalleryItem, 
  TestimonialItem, 
  SpecialOfferItem, 
  FAQItem 
} from './types';

export const HERO_IMAGE = '/src/assets/images/bakery_hero_banner_1782616501647.jpg';
export const CUSTOM_CAKE_IMAGE = '/src/assets/images/custom_cake_showcase_1782616518072.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Artisan Country Loaf',
    category: 'bread',
    description: 'Rustic crust with a soft, airy crumb, baked in our stone-deck wood oven daily.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Best Seller', 'Traditional']
  },
  {
    id: 'm2',
    name: 'Signature Sourdough',
    category: 'bread',
    description: 'Slow-fermented for 36 hours using our 10-year-old wild yeast starter.',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    tags: ['Wild Yeast', 'Organic']
  },
  {
    id: 'm3',
    name: 'Belgian Chocolate Fudge Cake',
    category: 'cake',
    description: 'Rich layers of moist chocolate sponge filled and frosted with velvety premium dark chocolate ganache.',
    price: 34.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    tags: ['Decadent', 'Chocolate']
  },
  {
    id: 'm4',
    name: 'Classic Red Velvet Cake',
    category: 'cake',
    description: 'Deep crimson velvet layers separated by whipped Madagascar vanilla cream cheese frosting.',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Elegant']
  },
  {
    id: 'm5',
    name: 'New York Baked Cheesecake',
    category: 'cake',
    description: 'Silky smooth cream cheese filling baked on a golden buttery graham cracker crust.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    tags: ['Classic']
  },
  {
    id: 'm6',
    name: 'Golden Birthday Drip Cake',
    category: 'cake',
    description: 'Celebration layers with hand-painted gold drip, premium sprinkles, and buttercream florets.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Customizable', 'Celebration']
  },
  {
    id: 'm7',
    name: 'Artisan Floral Wedding Cake',
    category: 'cake',
    description: 'Stunning multi-tiered cake adorned with elegant detailing and gorgeous handcrafted sugar flowers.',
    price: 180.00,
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    tags: ['Tiered', 'Luxury']
  },
  {
    id: 'm8',
    name: 'Handcrafted Gourmet Cupcakes',
    category: 'cookie',
    description: 'Assortment of red velvet, vanilla bean, and salted caramel cupcakes with premium toppings.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    tags: ['Sweet', 'Assorted']
  },
  {
    id: 'm9',
    name: 'Giant Chocolate Chunk Cookies',
    category: 'cookie',
    description: 'Chewy cookies loaded with hand-chopped 70% dark Belgian chocolate and a pinch of sea salt.',
    price: 2.95,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Sea Salt', 'Crispy']
  },
  {
    id: 'm10',
    name: 'Double Chocolate Fudge Brownies',
    category: 'cookie',
    description: 'Rich, dense, and fudgy center with a shiny crinkle crust, packed with premium cocoa.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    tags: ['Rich', 'Fudgy']
  },
  {
    id: 'm11',
    name: 'All-Butter French Croissant',
    category: 'pastry',
    description: 'Flaky, golden-brown puff layers crafted with authentic European AOP-certified butter.',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Award Winning', 'Flaky']
  },
  {
    id: 'm12',
    name: 'Gourmet Glazed Donuts',
    category: 'pastry',
    description: 'Fluffy brioche donuts with natural vanilla bean glaze and handcrafted sugar toppings.',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    tags: ['Brioche']
  },
  {
    id: 'm13',
    name: 'Fresh Blueberry Crumble Muffins',
    category: 'pastry',
    description: 'Moist, fluffy muffins bursting with wild blueberries and topped with a brown sugar oat crumble.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    tags: ['Fruit', 'Breakfast']
  },
  {
    id: 'm14',
    name: 'Almond Apricot Danish Pastry',
    category: 'pastry',
    description: 'Delicate, laminated pastry filled with sweet almond frangipane and fresh apricot compote.',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    tags: ['Viennoiserie']
  },
  {
    id: 'm15',
    name: 'Parisian Macaron Collection',
    category: 'cookie',
    description: 'Delicate almond meringue shells filled with white chocolate ganache, raspberry, and pistachio.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Gift Set', 'Gluten-Free*']
  },
  {
    id: 'm16',
    name: 'Signature Cinnamon Roll',
    category: 'pastry',
    description: 'Soft brioche dough swirled with sweet cassia cinnamon and generous warm cream cheese glaze.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    tags: ['Warm Served']
  }
];

export const CAKE_OCCASIONS: CustomCakeOccasion[] = [
  { id: 'o1', name: 'Birthdays', description: 'Fun, whimsical, or elegant designs tailored with favorite flavors.', icon: 'Cake' },
  { id: 'o2', name: 'Weddings', description: 'Stunning multi-tiered showstoppers custom-styled for your big day.', icon: 'Heart' },
  { id: 'o3', name: 'Anniversaries', description: 'Exquisite decorations symbolizing long-lasting love and memories.', icon: 'Gift' },
  { id: 'o4', name: 'Baby Showers', description: 'Sweet, charming pastel creations to celebrate new beginnings.', icon: 'Sparkles' },
  { id: 'o5', name: 'Graduation Parties', description: 'Milestone achievements custom crafted with academic school colors.', icon: 'GraduationCap' },
  { id: 'o6', name: 'Corporate Events', description: 'Professional, branded cake designs matching your business theme.', icon: 'Briefcase' }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'w1',
    title: 'Freshly Baked Every Day',
    description: 'We ignite our wood ovens before dawn, ensuring you experience bread and pastries at their ultimate peak of flavor and warmth.',
    iconName: 'Flame'
  },
  {
    id: 'w2',
    title: 'Premium Ingredients',
    description: 'From organic locally sourced stoneground flour to Belgian chocolate and farm-fresh cream, we never compromise on our ingredients.',
    iconName: 'Sparkles'
  },
  {
    id: 'w3',
    title: 'Handmade with Care',
    description: 'Every single product is shaped by hand using time-tested heritage techniques, preserving authentic textures and artisan beauty.',
    iconName: 'Heart'
  },
  {
    id: 'w4',
    title: 'Custom Cake Designs',
    description: 'Our award-winning pastry chefs transform your personal dreams and event concepts into elegant, jaw-dropping sugar masterpieces.',
    iconName: 'Award'
  },
  {
    id: 'w5',
    title: 'Affordable Prices',
    description: 'We believe premium quality food should be accessible. Enjoy artisan excellence at friendly prices perfect for every day.',
    iconName: 'BadgePercent'
  },
  {
    id: 'w6',
    title: 'Friendly Customer Service',
    description: 'Whether placing an order online or visiting our cozy store, our passion is making you feel warm, valued, and welcome.',
    iconName: 'Smile'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Artisan Breads',
    title: 'Our Signature Sourdough Fresh Out the Oven',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    category: 'Cakes',
    title: 'Elegant Belgian Chocolate Celebration Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    category: 'Cupcakes',
    title: 'Handmade Frosted Vanilla and Caramel Cupcakes',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    category: 'Wedding Cakes',
    title: 'Three-tier Minimalist Wedding Cake with Fresh Orchids',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    category: 'Pastries',
    title: 'Perfectly Layered Almond Apricot Viennoiserie',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    category: 'Cookies',
    title: 'Warm Giant Chocolate Chunk Sea Salt Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    category: 'Bakery Interior',
    title: 'Cozy Rustic Wooden Counter & Bakery Atmosphere',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    category: 'Fresh Baking Process',
    title: 'Artisan Kneading Dough and Preparing Crusts',
    image: 'https://images.unsplash.com/photo-1581339399838-2a120c18bafc?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sophia Laurent',
    role: 'Local Food Critic',
    rating: 5,
    comment: 'The sourdough here is absolute perfection! It has the ultimate crunchy crust, a wonderfully sour and airy crumb, and holds up so beautifully. Wooden Bakery is hands-down the best artisan bakery in town.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Marcus Sterling',
    role: 'Groom',
    rating: 5,
    comment: 'We commissioned our wedding cake from Wooden Bakery, and it surpassed all our hopes! Our guests could not stop talking about the delicate raspberry white chocolate layers and the stunning hand-painted details.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Mother & Repeat Client',
    rating: 5,
    comment: 'Their chocolate fudge drip cake for my daughters 10th birthday was a triumph! Not only was it visually beautiful, but it was incredibly moist, rich, and fresh. Prompt and super friendly service!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't4',
    name: 'Daniel Kim',
    role: 'Daily Coffee & Pastry Enthusiast',
    rating: 5,
    comment: 'Every morning I grab an all-butter croissant and a coffee here. The croissant layers are so beautifully flaky and buttery, it rivals Paris. Highly recommend the warm cinnamon rolls too!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't5',
    name: 'Victoria Vance',
    role: 'Corporate Event Organizer',
    rating: 5,
    comment: 'We ordered 100 assorted gourmet cupcakes and custom macarons for our luxury product launch. They arrived perfectly boxed, customized with our brand colors, and tasted heavenly. Exceptional professionalism.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't6',
    name: 'Julian Alvarez',
    role: 'Pastry Collector',
    rating: 5,
    comment: 'If you havent tried their apricot danish pastry, you are missing out on life. The pastry base is incredibly delicate, and the apricot center strikes the absolute perfect balance of sweet and tart.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150'
  }
];

export const SPECIAL_OFFERS: SpecialOfferItem[] = [
  {
    id: 's1',
    title: '15% Off Birthday Cakes',
    description: 'Celebrate your special day with our artisan custom drip or layered birthday cakes. Book your cake at least 5 days in advance.',
    code: 'BDAY15',
    discount: '15% OFF',
    expiry: 'Valid all year round'
  },
  {
    id: 's2',
    title: 'Buy 6 Cupcakes, Get 2 Free',
    description: 'Mix and match your favorite gourmet cupcake flavors. Perfect for sharing with friends, family, or enjoying all on your own!',
    code: 'SWEET6',
    discount: '2 FREE',
    expiry: 'Valid on Weekdays only'
  },
  {
    id: 's3',
    title: 'Weekend Bread Specials',
    description: 'Get a complimentary sourdough bread knife or jar of organic seasonal jam when you purchase any two artisan rustic loaves.',
    code: 'LOAF2',
    discount: 'FREE GIFT',
    expiry: 'Saturdays & Sundays'
  },
  {
    id: 's4',
    title: 'Wedding Cake Package Discounts',
    description: 'Order your tiered dream wedding cake and receive 20% off all accompanying custom macarons, cookies, and dessert towers.',
    code: 'FOREVER',
    discount: '20% OFF ADDONS',
    expiry: 'Requires consultation'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do you make custom cakes?',
    answer: 'Absolutely! Custom cake artistry is one of our primary specialties. We craft bespoke cakes for weddings, birthdays, anniversaries, baby showers, and corporate events. Every cake is custom-designed alongside our head pastry chef to match your design theme and flavor preferences.'
  },
  {
    id: 'f2',
    question: 'How early should I place an order?',
    answer: 'For standard menu items like bread, cupcakes, and pastries, orders should be placed 24 to 48 hours in advance. For custom cakes (birthdays, baby showers), we require at least 5 to 7 days. For large-scale wedding cakes, we recommend booking your consultation 2 to 6 months ahead.'
  },
  {
    id: 'f3',
    question: 'Do you offer delivery?',
    answer: 'Yes, we do! We offer local doorstep delivery for standard menu orders and a specialized temperature-controlled courier delivery for delicate wedding and tiered custom cakes to ensure they arrive in pristine, perfect condition.'
  },
  {
    id: 'f4',
    question: 'Which payment methods are accepted?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, bank transfers for large custom orders, and cash at our retail store counter.'
  },
  {
    id: 'f5',
    question: 'Can I order online?',
    answer: 'Yes! You can explore our featured menu directly on this website, add products to your Order Inquiry Basket, and submit an inquiry instantly. Our baking concierge team will contact you within 2 hours to confirm your items, customize your order, and process your payment.'
  },
  {
    id: 'f6',
    question: 'Do you offer eggless or gluten-free options?',
    answer: 'Yes! We care deeply about dietary preferences. We offer a selection of eggless cakes, cupcakes, and gluten-friendly pastries (like our French macarons, which are naturally gluten-free). Please note that while we take strict measures to prevent cross-contamination, we handle gluten and eggs in our bakery kitchen.'
  }
];
