import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types/product';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/productos?categoria=${category.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-6 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${category.color} text-white transition-transform duration-300 group-hover:scale-110`}>
            {category.icon}
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};