import WishlistButton from './WishlistButton';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
}

const ProductCard = ({ 
  name, 
  description, 
  imageUrl, 
  rating = Math.round((Math.random() * 2 + 3) * 10) / 10, // Random rating 3-5
  reviewCount = Math.floor(Math.random() * 50) + 1 // Random review count
}: ProductCardProps) => {
  const handleInquire = () => {
    // Get current product URL
    const currentUrl = window.location.href;
    
    // Create automatic WhatsApp message from HOVIBA with product link
    const message = `Hello! Thank you for your interest in ${name} from HOVIBA AUTO.

Product Details:
- ${name}
- ${description}
- Product Link: ${currentUrl}

We're here to help you with all your spare parts needs. Our team will get back to you shortly with pricing and availability.

Thank you for choosing HOVIBA AUTO - Quality Car & Motorcycle Spare Parts Across Kenya.

Best regards,
HOVIBA Team`;

    const whatsappUrl = `https://wa.me/254701036266?text=${encodeURIComponent(message)}`;
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
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
          <span className="text-yellow-400">★</span>
          <span>{rating}</span>
          <span>({reviewCount})</span>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <button 
            onClick={handleInquire}
            className="w-full py-2 px-4 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Inquire Now
          </button>
          <WishlistButton productName={name} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
