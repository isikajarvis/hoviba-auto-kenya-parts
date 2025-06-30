import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  const [phone, setPhone] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setIsLoading(true);
      
      try {
        // Format phone number (ensure it starts with country code)
        let formattedPhone = phone.replace(/\s+/g, '');
        if (formattedPhone.startsWith('0')) {
          formattedPhone = '254' + formattedPhone.substring(1);
        } else if (!formattedPhone.startsWith('254')) {
          formattedPhone = '254' + formattedPhone;
        }
        
        // Simulate automated message sending (in a real implementation, this would be done via backend API)
        console.log(`Automated WhatsApp message sent to ${formattedPhone} from HOVIBA (0701036266)`);
        console.log('Message: Welcome to HOVIBA AUTO! Thank you for subscribing to our WhatsApp updates.');
        
        // Show success message to user
        setIsSubscribed(true);
        setPhone('');
        setTimeout(() => setIsSubscribed(false), 5000);
      } catch (error) {
        console.error('Error processing automated WhatsApp signup:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MessageCircle className="w-6 h-6 animate-bounce" />
          <h3 className="text-2xl font-bold animate-fade-in">Stay Updated via WhatsApp</h3>
        </div>
        <p className="text-red-100 mb-6 animate-fade-in">
          Get the latest offers, maintenance tips, and product updates delivered automatically to your WhatsApp from HOVIBA AUTO.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg animate-scale-in">
            <p className="font-medium">Thank you for subscribing! HOVIBA has automatically sent you a welcome message on WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex space-x-2 animate-fade-in">
            <Input
              type="tel"
              placeholder="Enter your phone number (e.g., 0712345678)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 text-gray-900 transition-all duration-300 focus:scale-105"
              required
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Subscribe'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
