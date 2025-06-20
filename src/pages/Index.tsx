
import BrandSlider from '@/components/BrandSlider';
import ContactButtons from '@/components/ContactButtons';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const branches = ['Kitui', 'Embu', 'Mombasa', 'Kisumu', 'And surrounding areas'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            HOVIBA AUTO
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Quality Car & Motorcycle Spare Parts Across Kenya
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore Products
          </button>
        </div>
      </section>

      {/* Brand Slider */}
      <BrandSlider />

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At HOVIBA AUTO, we specialize in high-quality, affordable car and motorcycle spare parts. 
            Proudly serving clients across Kenya, we ensure every vehicle runs smoothly, safely, and 
            efficiently—wherever the road takes you.
          </p>
        </div>
      </section>

      {/* Contact Buttons */}
      <section className="bg-gray-50">
        <ContactButtons />
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {branches.map((branch, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 animate-pulse" />
                <span className="text-gray-900 font-medium text-sm">{branch}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
