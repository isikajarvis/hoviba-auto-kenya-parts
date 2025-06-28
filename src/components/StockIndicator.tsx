
import { Package } from 'lucide-react';

interface StockIndicatorProps {
  stock: number;
  className?: string;
}

const StockIndicator = ({ stock, className = '' }: StockIndicatorProps) => {
  const getStockStatus = () => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600', bgColor: 'bg-red-50' };
    if (stock < 5) return { text: `Low Stock (${stock} left)`, color: 'text-orange-600', bgColor: 'bg-orange-50' };
    if (stock < 10) return { text: `${stock} in stock`, color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    return { text: 'In Stock', color: 'text-green-600', bgColor: 'bg-green-50' };
  };

  const status = getStockStatus();

  return (
    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm ${status.bgColor} ${status.color} ${className}`}>
      <Package className="w-4 h-4" />
      <span className="font-medium">{status.text}</span>
    </div>
  );
};

export default StockIndicator;
