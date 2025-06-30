
import { Phone, MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';

const Contact = () => {
  const contacts = [
    {
      name: 'Call Us',
      icon: Phone,
      action: () => window.open('tel:+254701036266'),
      className: 'bg-green-600 hover:bg-green-700',
      info: '+254 701 036 266'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/254701036266'),
      className: 'bg-green-500 hover:bg-green-600',
      info: 'Chat with us'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      action: () => window.open('https://instagram.com/hovibaauto'),
      className: 'bg-pink-600 hover:bg-pink-700',
      info: '@hovibaauto'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: () => window.open('https://facebook.com/hovibaauto'),
      className: 'bg-blue-600 hover:bg-blue-700',
      info: 'HOVIBA AUTO'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
            
            {/* Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {contacts.map((contact) => (
                <button
                  key={contact.name}
                  onClick={contact.action}
                  className={`${contact.className} text-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 text-center`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <contact.icon className="w-8 h-8" />
                    <span className="font-semibold">{contact.name}</span>
                    <p className="text-sm opacity-90">{contact.info}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: 9:00 AM - 3:00 PM</p>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h3>
              <div className="space-y-3">
                {['Kitui', 'Embu', 'Mombasa', 'Kisumu'].map((location) => (
                  <div key={location} className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 animate-pulse" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-2">And surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
