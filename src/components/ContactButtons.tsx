
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactButtons = () => {
  const contacts = [
    {
      name: 'Call Us',
      icon: Phone,
      action: () => window.open('tel:+254700000000'),
      className: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/254700000000'),
      className: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      action: () => window.open('https://instagram.com/hovibaauto'),
      className: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: () => window.open('https://facebook.com/hovibaauto'),
      className: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Get in Touch
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <button
              key={contact.name}
              onClick={contact.action}
              className={`${contact.className} text-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105 flex flex-col items-center space-y-2`}
            >
              <contact.icon className="w-8 h-8" />
              <span className="font-medium text-sm">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;
