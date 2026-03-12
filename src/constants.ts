import { MenuItem, Testimonial, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Bruschetta Classica',
    description: 'Toasted sourdough topped with vine-ripened tomatoes, fresh basil, garlic, and extra virgin olive oil.',
    price: '$14',
    category: 'Appetizers',
    image: 'https://picsum.photos/seed/bruschetta/400/300'
  },
  {
    id: '2',
    name: 'Calamari Fritti',
    description: 'Crispy wild-caught squid served with spicy marinara and lemon aioli.',
    price: '$18',
    category: 'Appetizers',
    image: 'https://picsum.photos/seed/calamari/400/300'
  },
  {
    id: '3',
    name: 'Pappardelle al Cinghiale',
    description: 'Wide ribbon pasta with slow-braised wild boar ragù and pecorino toscano.',
    price: '$28',
    category: 'Pasta',
    image: 'https://picsum.photos/seed/pappardelle/400/300'
  },
  {
    id: '4',
    name: 'Truffle Mushroom Risotto',
    description: 'Acquerello rice with wild mushrooms, black truffle carpaccio, and 24-month aged parmigiano.',
    price: '$32',
    category: 'Pasta',
    image: 'https://picsum.photos/seed/risotto/400/300'
  },
  {
    id: '5',
    name: 'Margherita D.O.P.',
    description: 'San Marzano tomatoes, buffalo mozzarella, fresh basil, and extra virgin olive oil.',
    price: '$22',
    category: 'Pizza',
    image: 'https://picsum.photos/seed/pizza-margherita/400/300'
  },
  {
    id: '6',
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks with saffron risotto and gremolata.',
    price: '$42',
    category: 'Entrees',
    image: 'https://picsum.photos/seed/ossobuco/400/300'
  },
  {
    id: '7',
    name: 'Tiramisu Moderno',
    description: 'Espresso-soaked ladyfingers, mascarpone mousse, and dark chocolate shavings.',
    price: '$12',
    category: 'Desserts',
    image: 'https://picsum.photos/seed/tiramisu/400/300'
  },
  {
    id: '8',
    name: 'Negroni Classico',
    description: 'Gin, Campari, and sweet vermouth, garnished with an orange twist.',
    price: '$16',
    category: 'Drinks',
    image: 'https://picsum.photos/seed/negroni/400/300'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alessandro Rossi',
    text: 'The most authentic Italian food I have had outside of Florence. The Pappardelle is divine.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    text: 'A truly elegant atmosphere. Perfect for our anniversary dinner. The service was impeccable.',
    rating: 5
  },
  {
    id: '3',
    name: 'Michael Chen',
    text: 'The wine selection is outstanding. Highly recommend the Osso Buco.',
    rating: 4
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/seed/restaurant1/800/600', alt: 'Restaurant Interior', category: 'Interior' },
  { id: '2', url: 'https://picsum.photos/seed/food1/800/600', alt: 'Signature Pasta', category: 'Food' },
  { id: '3', url: 'https://picsum.photos/seed/restaurant2/800/600', alt: 'Dining Area', category: 'Interior' },
  { id: '4', url: 'https://picsum.photos/seed/food2/800/600', alt: 'Wood-fired Pizza', category: 'Food' },
  { id: '5', url: 'https://picsum.photos/seed/restaurant3/800/600', alt: 'Bar Area', category: 'Interior' },
  { id: '6', url: 'https://picsum.photos/seed/food3/800/600', alt: 'Italian Dessert', category: 'Food' },
];
