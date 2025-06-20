
import { useState } from 'react';
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    {
      name: 'Call Us',
      icon: Phone,
      action: () => window.open('tel:+254700000000'),
      className: 'bg-green-600 hover:bg-green-700',
      info: '+254 700 000 000'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/254700000000'),
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            {/* Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contacts.map((contact) => (
                <button
                  key={contact.name}
                  onClick={contact.action}
                  className={`${contact.className} text-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 text-left`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <contact.icon className="w-6 h-6" />
                    <span className="font-semibold">{contact.name}</span>
                  </div>
                  <p className="text-sm opacity-90">{contact.info}</p>
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
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-2">And surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
