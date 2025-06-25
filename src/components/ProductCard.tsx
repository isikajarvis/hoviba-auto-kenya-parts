
interface ProductCardProps {
  name: string;
  description: string;
  imageUrl?: string;
}

const ProductCard = ({ name, description, imageUrl }: ProductCardProps) => {
  const handleInquire = () => {
    const message = `Hi! I'm interested in learning more about ${name}. ${description}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
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
        <p className="text-gray-600 text-sm">{description}</p>
        <button 
          onClick={handleInquire}
          className="mt-3 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
