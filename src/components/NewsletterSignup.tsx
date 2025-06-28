
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
        
        // Create WhatsApp onboarding message
        const message = `Welcome to our auto parts family! 🚗✨

Thank you for joining our WhatsApp updates! You'll now receive:
• Exclusive offers and discounts
• New product alerts
• Maintenance tips and guides
• Priority customer support

We're here to help with all your vehicle parts needs. Feel free to message us anytime!

Best regards,
The Auto Parts Team`;
        
        const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        console.log('Newsletter signup:', formattedPhone);
        setIsSubscribed(true);
        setPhone('');
        setTimeout(() => setIsSubscribed(false), 5000);
      } catch (error) {
        console.error('Error sending WhatsApp message:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-red-600 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MessageCircle className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Stay Updated via WhatsApp</h3>
        </div>
        <p className="text-red-100 mb-6">
          Get the latest offers, maintenance tips, and product updates delivered directly to your WhatsApp.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">
            <p className="font-medium">Thank you for subscribing! Check your WhatsApp for a welcome message.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex space-x-2">
            <Input
              type="tel"
              placeholder="Enter your phone number (e.g., 0712345678)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 text-gray-900"
              required
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-white text-red-600 hover:bg-gray-100"
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
