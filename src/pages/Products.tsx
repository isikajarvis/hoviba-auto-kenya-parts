
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Car, Bike, Bus } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('cars');

  const carProducts = [
    {
      name: 'Engine & Air Filters',
      description: 'Reliable filters for cleaner engine performance, ideal for rural/dusty roads.',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    },
    {
      name: 'Oil & Lubricants',
      description: 'Premium motor oils, gearbox fluids, brake fluids for smooth operation.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      name: 'Spark Plugs & Ignition Components',
      description: 'Improve engine ignition and fuel efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1609097094593-8b6c7ccb8c92?w=400&h=300&fit=crop'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Designed for safety on Kenya\'s rough terrains.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Essential visibility components.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
    },
    {
      name: 'Batteries',
      description: 'Long-lasting power for all vehicle types.',
      imageUrl: 'https://images.unsplash.com/photo-1609743820088-592b041b5649?w=400&h=300&fit=crop'
    },
    {
      name: 'Fuses & Minor Electricals',
      description: 'Budget-friendly, high-need items.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      name: 'Radiators & Hoses',
      description: 'Prevent overheating and coolant leaks.',
      imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop'
    },
    {
      name: 'Shock Absorbers & Suspension Bushings',
      description: 'For better handling on rough roads.',
      imageUrl: 'https://images.unsplash.com/photo-1558618996-fcd4c3d53819?w=400&h=300&fit=crop'
    },
    {
      name: 'Tyres & Tubes',
      description: 'Durable and road-tested for Kenyan conditions.',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    }
  ];

  const motorcycleProducts = [
    {
      name: 'Tyres & Inner Tubes',
      description: 'Durable motorcycle tyres and tubes for all terrains.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      name: 'Brake Pads & Cables',
      description: 'Essential braking components for safety.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
    },
    {
      name: 'Clutch & Gear Levers',
      description: 'Smooth gear shifting components.',
      imageUrl: 'https://images.unsplash.com/photo-1609097094593-8b6c7ccb8c92?w=400&h=300&fit=crop'
    },
    {
      name: 'Chains & Sprockets',
      description: 'High-quality drive train components.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
    },
    {
      name: 'Headlights & Mirrors',
      description: 'Visibility and safety accessories.',
      imageUrl: 'https://images.unsplash.com/photo-1609743820088-592b041b5649?w=400&h=300&fit=crop'
    },
    {
      name: 'Seats, Shocks & Helmets',
      description: 'Comfort and safety essentials.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    }
  ];

  const matatuProducts = [
    {
      name: 'Engine & Fuel Filters',
      description: 'Heavy-duty filters for commercial vehicle engines.',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Commercial-grade braking systems.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
    },
    {
      name: 'Suspension Units',
      description: 'Heavy-duty suspension for passenger transport.',
      imageUrl: 'https://images.unsplash.com/photo-1558618996-fcd4c3d53819?w=400&h=300&fit=crop'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Commercial vehicle lighting solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
    },
    {
      name: 'Tires',
      description: 'Commercial-grade tires for passenger vehicles.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    }
  ];

  const tabs = [
    { id: 'cars', name: 'Cars', icon: Car, products: carProducts },
    { id: 'motorcycles', name: 'Motorcycles (Boda-Bodas)', icon: Bike, products: motorcycleProducts },
    { id: 'matatus', name: 'Matatus', icon: Bus, products: matatuProducts }
  ];

  const activeProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
