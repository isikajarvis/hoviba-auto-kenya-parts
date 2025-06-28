
import WishlistButton from './WishlistButton';
import StockIndicator from './StockIndicator';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl?: string;
  stock?: number;
  price?: number;
  rating?: number;
  reviewCount?: number;
}

const ProductCard = ({ 
  name, 
  description, 
  imageUrl, 
  stock = Math.floor(Math.random() * 20), // Random stock for demo
  price = Math.floor(Math.random() * 10000) + 1000, // Random price for demo
  rating = Math.round((Math.random() * 2 + 3) * 10) / 10, // Random rating 3-5
  reviewCount = Math.floor(Math.random() * 50) + 1 // Random review count
}: ProductCardProps) => {
  const handleInquire = () => {
    const message = `Hi! I'm interested in learning more about ${name}. ${description}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">H</span>
              </div>
              <span className="text-sm">Product Image</span>
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <StockIndicator stock={stock} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        {/* Price and Rating */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg font-bold text-red-600">
            KSh {price.toLocaleString()}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span className="text-yellow-400">★</span>
            <span>{rating}</span>
            <span>({reviewCount})</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <button 
            onClick={handleInquire}
            disabled={stock === 0}
            className={`w-full py-2 px-4 rounded transition-colors ${
              stock === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {stock === 0 ? 'Out of Stock' : 'Inquire Now'}
          </button>
          <WishlistButton productName={name} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
