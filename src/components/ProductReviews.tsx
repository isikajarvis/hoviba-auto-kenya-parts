
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  productName: string;
}

const ProductReviews = ({ productName }: ProductReviewsProps) => {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      customerName: 'John Kamau',
      rating: 5,
      comment: 'Excellent quality part, fits perfectly on my Toyota Corolla. Fast delivery too!',
      date: '2024-01-15'
    },
    {
      id: '2',
      customerName: 'Mary Wanjiku',
      rating: 4,
      comment: 'Good value for money. Installation was straightforward.',
      date: '2024-01-10'
    },
    {
      id: '3',
      customerName: 'Peter Ochieng',
      rating: 5,
      comment: 'Genuine part as advertised. Highly recommend this seller.',
      date: '2024-01-05'
    }
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const StarRating = ({ rating, interactive = false, onRatingChange }: { 
    rating: number; 
    interactive?: boolean; 
    onRatingChange?: (rating: number) => void;
  }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
          onClick={() => interactive && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
        <Button onClick={() => setShowReviewForm(!showReviewForm)} variant="outline">
          Write a Review
        </Button>
      </div>

      {/* Average Rating */}
      <div className="flex items-center space-x-2 mb-6">
        <StarRating rating={Math.round(averageRating)} />
        <span className="text-lg font-medium">{averageRating.toFixed(1)}</span>
        <span className="text-gray-500">({reviews.length} reviews)</span>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="border-t pt-4 mb-6">
          <h4 className="font-medium mb-3">Write Your Review</h4>
          <div className="space-y-4">
            <div>
              <Label>Your Rating</Label>
              <StarRating 
                rating={newReview.rating} 
                interactive 
                onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
              />
            </div>
            <div>
              <Label>Your Review</Label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={3}
                placeholder="Share your experience with this product..."
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
              />
            </div>
            <div className="flex space-x-2">
              <Button size="sm">Submit Review</Button>
              <Button size="sm" variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium text-gray-900">{review.customerName}</div>
                <StarRating rating={review.rating} />
              </div>
              <div className="text-sm text-gray-500">{review.date}</div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
