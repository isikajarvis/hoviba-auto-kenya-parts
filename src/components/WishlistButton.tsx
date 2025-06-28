
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WishlistButtonProps {
  productName: string;
  className?: string;
}

const WishlistButton = ({ productName, className = '' }: WishlistButtonProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.includes(productName));
  }, [productName]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let newWishlist;
    
    if (isInWishlist) {
      newWishlist = wishlist.filter((item: string) => item !== productName);
    } else {
      newWishlist = [...wishlist, productName];
    }
    
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setIsInWishlist(!isInWishlist);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleWishlist}
      className={`${className} ${isInWishlist ? 'text-red-600 border-red-600' : 'text-gray-400'}`}
    >
      <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </Button>
  );
};

export default WishlistButton;
