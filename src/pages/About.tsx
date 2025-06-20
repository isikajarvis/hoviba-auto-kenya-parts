
import { MapPin, Award, Users, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Global standards tailored for local roads'
    },
    {
      icon: MapPin,
      title: 'Nationwide Reach',
      description: 'Serving clients across Kenya'
    },
    {
      icon: Users,
      title: 'Trusted Service',
      description: 'Dedicated team keeping Kenya moving'
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Fast service and reliable supply'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HOVIBA AUTO</h1>
          <p className="text-xl leading-relaxed">
            Your trusted partner in automotive excellence across Kenya
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              HOVIBA AUTO is a trusted supplier of automotive and motorcycle spare parts in Kenya. 
              With a commitment to reliability, affordability, and nationwide reach, we deliver parts 
              that meet global standards while being tailored for local roads.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our growing presence in Kitui, Embu, Mombasa, Kisumu, and nearby areas ensures that 
              every client gets the best in service, selection, and speed. Our team is dedicated to 
              keeping Kenya moving—one part at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose HOVIBA AUTO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Kitui', 'Embu', 'Mombasa', 'Kisumu'].map((location) => (
              <div key={location} className="bg-red-50 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-red-600 mx-auto mb-2 animate-pulse" />
                <span className="font-medium text-gray-900">{location}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">And surrounding areas</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
