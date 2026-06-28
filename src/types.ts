export interface MenuItem {
  id: string;
  name: string;
  category: 'bread' | 'cake' | 'pastry' | 'cookie';
  description: string;
  price: number;
  image: string;
  rating?: number;
  tags?: string[];
}

export interface CustomCakeOccasion {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface SpecialOfferItem {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiry: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryItem {
  product: MenuItem;
  quantity: number;
}
