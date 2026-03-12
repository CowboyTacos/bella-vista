export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Pasta' | 'Pizza' | 'Entrees' | 'Desserts' | 'Drinks';
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Food' | 'Interior';
}
