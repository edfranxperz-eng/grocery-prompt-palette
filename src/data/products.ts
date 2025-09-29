import { Product, Category } from '@/types/product';

// Import product images
import arrozDiana from '@/assets/products/arroz-diana.jpg';
import aceiteGirasol from '@/assets/products/aceite-girasol.jpg';
import cocaCola from '@/assets/products/coca-cola.jpg';
import galletasFestival from '@/assets/products/galletas-festival.jpg';
import lecheAlpina from '@/assets/products/leche-alpina.jpg';
import detergenteAriel from '@/assets/products/detergente-ariel.jpg';

export const categories: Category[] = [
  { id: 'refrescos', name: 'Refrescos', icon: '🥤', color: 'bg-trust' },
  { id: 'dulces', name: 'Dulces', icon: '🍬', color: 'bg-secondary' },
  { id: 'queques', name: 'Queques', icon: '🧁', color: 'bg-primary' },
  { id: 'gelatinas', name: 'Gelatinas', icon: '🍮', color: 'bg-accent' },
  { id: 'helados', name: 'Helados', icon: '🍦', color: 'bg-primary-glow' },
  { id: 'chicles', name: 'Chicles', icon: '🍃', color: 'bg-warm' },
  { id: 'galletas', name: 'Galletas', icon: '🍪', color: 'bg-secondary' },
  { id: 'pipocas', name: 'Pipocas', icon: '🍿', color: 'bg-trust' },
];

export const products: Product[] = [
  // Refrescos
  {
    id: '1',
    name: 'Coca-Cola 600ml',
    price: 6.50,
    image: cocaCola,
    category: 'refrescos',
    description: 'La bebida refrescante original. Perfecta para acompañar tus comidas.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Pepsi 500ml',
    price: 6.00,
    image: cocaCola, // Placeholder
    category: 'refrescos',
    description: 'Refresco de cola con sabor único y refrescante.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Fanta Naranja 500ml',
    price: 5.50,
    image: cocaCola, // Placeholder
    category: 'refrescos',
    description: 'Refresco de naranja con sabor natural y vitamina C.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Sprite 500ml',
    price: 5.50,
    image: cocaCola, // Placeholder
    category: 'refrescos',
    description: 'Refresco de lima-limón, refrescante y sin cafeína.',
    inStock: true,
  },
  
  // Dulces
  {
    id: '5',
    name: 'Chocolate Sublime',
    price: 3.50,
    image: galletasFestival, // Placeholder
    category: 'dulces',
    description: 'Clásico chocolate boliviano con maní tostado.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Caramelos Mentitas',
    price: 2.00,
    image: galletasFestival, // Placeholder
    category: 'dulces',
    description: 'Caramelos de menta refrescantes, ideales para después de comer.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Gomitas Haribo',
    price: 4.50,
    image: galletasFestival, // Placeholder
    category: 'dulces',
    description: 'Deliciosas gomitas de frutas en diferentes sabores.',
    inStock: true,
  },
  
  // Queques
  {
    id: '8',
    name: 'Queque Montecarlo',
    price: 12.00,
    image: galletasFestival, // Placeholder
    category: 'queques',
    description: 'Queque esponjoso con relleno de manjar y coco.',
    inStock: true,
  },
  {
    id: '9',
    name: 'Queque de Chocolate',
    price: 15.00,
    image: galletasFestival, // Placeholder
    category: 'queques',
    description: 'Queque húmedo de chocolate con chispas de chocolate.',
    inStock: true,
  },
  
  // Gelatinas
  {
    id: '10',
    name: 'Gelatina Royal Fresa',
    price: 3.00,
    image: detergenteAriel, // Placeholder
    category: 'gelatinas',
    description: 'Gelatina en polvo sabor fresa, fácil de preparar.',
    inStock: true,
  },
  {
    id: '11',
    name: 'Gelatina Royal Limón',
    price: 3.00,
    image: detergenteAriel, // Placeholder
    category: 'gelatinas',
    description: 'Gelatina en polvo sabor limón, refrescante y deliciosa.',
    inStock: true,
  },
  
  // Helados
  {
    id: '12',
    name: 'Helado Pil Vainilla',
    price: 8.50,
    image: lecheAlpina, // Placeholder
    category: 'helados',
    description: 'Helado cremoso de vainilla, perfecto para cualquier momento.',
    inStock: true,
  },
  {
    id: '13',
    name: 'Paleta Bon Ice',
    price: 2.50,
    image: lecheAlpina, // Placeholder
    category: 'helados',
    description: 'Paleta de hielo con sabores frutales variados.',
    inStock: true,
  },
  
  // Chicles
  {
    id: '14',
    name: 'Chicle Boomer',
    price: 1.50,
    image: galletasFestival, // Placeholder
    category: 'chicles',
    description: 'Chicle globero con sabor a tutti frutti.',
    inStock: true,
  },
  {
    id: '15',
    name: 'Chicle Trident Menta',
    price: 4.00,
    image: galletasFestival, // Placeholder
    category: 'chicles',
    description: 'Chicle sin azúcar con sabor a menta fresca.',
    inStock: true,
  },
  
  // Galletas
  {
    id: '16',
    name: 'Galletas Chiquilín',
    price: 5.50,
    image: galletasFestival,
    category: 'galletas',
    description: 'Galletas dulces tradicionales bolivianas, perfectas para el té.',
    inStock: true,
  },
  {
    id: '17',
    name: 'Galletas Oreo',
    price: 7.00,
    image: galletasFestival, // Placeholder
    category: 'galletas',
    description: 'Galletas de chocolate con crema, el clásico mundial.',
    inStock: true,
  },
  
  // Pipocas
  {
    id: '18',
    name: 'Pipocas Tostaduría',
    price: 4.50,
    image: arrozDiana, // Placeholder
    category: 'pipocas',
    description: 'Pipocas saladas crujientes, perfectas para cualquier ocasión.',
    inStock: true,
  },
  {
    id: '19',
    name: 'Pipocas Dulces',
    price: 5.00,
    image: arrozDiana, // Placeholder
    category: 'pipocas',
    description: 'Pipocas caramelizadas con azúcar, irresistibles.',
    inStock: true,
  },
  {
    id: '20',
    name: 'Chifles La Especial',
    price: 6.50,
    image: arrozDiana, // Placeholder
    category: 'pipocas',
    description: 'Chifles crujientes de plátano verde, snack boliviano tradicional.',
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