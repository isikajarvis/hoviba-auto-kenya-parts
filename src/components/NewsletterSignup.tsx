
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterSignup = () => {
  const handleSubscribe = () => {
    // Professional WhatsApp message asking for permission to send updates
    const message = `Hello HOVIBA AUTO,

I would like to subscribe to your WhatsApp updates and give you permission to send me:
• Exclusive offers and discounts
• New product alerts  
• Maintenance tips and guides
• Important announcements

Please add me to your WhatsApp update list.

Thank you.`;

    const whatsappUrl = `https://wa.me/254701036266?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
          Get the latest offers, maintenance tips, and product updates delivered to your WhatsApp from HOVIBA AUTO.
        </p>
        
        <Button 
          onClick={handleSubscribe}
          className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-3 text-lg font-semibold"
        >
          Subscribe to Updates
        </Button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
