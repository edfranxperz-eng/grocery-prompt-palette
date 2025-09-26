import { Product, Category } from '@/types/product';

// Import product images
import arrozDiana from '@/assets/products/arroz-diana.jpg';
import aceiteGirasol from '@/assets/products/aceite-girasol.jpg';
import cocaCola from '@/assets/products/coca-cola.jpg';
import galletasFestival from '@/assets/products/galletas-festival.jpg';
import lecheAlpina from '@/assets/products/leche-alpina.jpg';
import detergenteAriel from '@/assets/products/detergente-ariel.jpg';

export const categories: Category[] = [
  { id: 'despensa', name: 'Despensa', icon: '🥫', color: 'bg-primary' },
  { id: 'snacks', name: 'Snacks', icon: '🍪', color: 'bg-secondary' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤', color: 'bg-trust' },
  { id: 'limpieza', name: 'Limpieza', icon: '🧽', color: 'bg-accent' },
  { id: 'lacteos', name: 'Lácteos', icon: '🥛', color: 'bg-primary-glow' },
  { id: 'carnes', name: 'Carnes', icon: '🥩', color: 'bg-secondary' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Arroz Diana 1kg',
    price: 3500,
    image: arrozDiana,
    category: 'despensa',
    description: 'Arroz de primera calidad, ideal para toda la familia. Grano largo y suave.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Aceite Girasol 1L',
    price: 8500,
    image: aceiteGirasol,
    category: 'despensa',
    description: 'Aceite de girasol 100% puro, perfecto para cocinar y freír.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Coca-Cola 600ml',
    price: 2800,
    image: cocaCola,
    category: 'bebidas',
    description: 'La bebida refrescante original. Perfecta para acompañar tus comidas.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Galletas Festival',
    price: 2200,
    image: galletasFestival,
    category: 'snacks',
    description: 'Deliciosas galletas dulces, perfectas para compartir en familia.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Leche Alpina 1L',
    price: 4200,
    image: lecheAlpina,
    category: 'lacteos',
    description: 'Leche entera de la mejor calidad, rica en calcio y proteínas.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Detergente Ariel',
    price: 12500,
    image: detergenteAriel,
    category: 'limpieza',
    description: 'Detergente en polvo de alta calidad para una limpieza profunda.',
    inStock: true,
  },
  // Additional products for demonstration
  {
    id: '7',
    name: 'Sal La Fina 500g',
    price: 1200,
    image: arrozDiana, // Placeholder - would generate separate image
    category: 'despensa',
    description: 'Sal refinada de mesa, indispensable en tu cocina.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Chocolate Jet',
    price: 1800,
    image: galletasFestival, // Placeholder
    category: 'snacks',
    description: 'Chocolate cremoso y delicioso para disfrutar en cualquier momento.',
    inStock: true,
  },
  {
    id: '9',
    name: 'Agua Cristal 600ml',
    price: 1500,
    image: cocaCola, // Placeholder
    category: 'bebidas',
    description: 'Agua pura y cristalina, perfecta para hidratarte.',
    inStock: true,
  },
  {
    id: '10',
    name: 'Jabón Rey 150g',
    price: 3200,
    image: detergenteAriel, // Placeholder
    category: 'limpieza',
    description: 'Jabón de tocador con aroma fresco y duradero.',
    inStock: true,
  },
  {
    id: '11',
    name: 'Queso Colanta 250g',
    price: 6800,
    image: lecheAlpina, // Placeholder
    category: 'lacteos',
    description: 'Queso fresco y cremoso, perfecto para tus preparaciones.',
    inStock: true,
  },
  {
    id: '12',
    name: 'Jugo Hit Naranja 200ml',
    price: 2100,
    image: cocaCola, // Placeholder
    category: 'bebidas',
    description: 'Delicioso jugo de naranja natural, rico en vitamina C.',
    inStock: true,
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};