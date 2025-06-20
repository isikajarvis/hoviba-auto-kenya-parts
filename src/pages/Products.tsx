
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Car, Bike, Bus } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('cars');

  const carProducts = [
    {
      name: 'Engine & Air Filters',
      description: 'Reliable filters for cleaner engine performance, ideal for rural/dusty roads.'
    },
    {
      name: 'Oil & Lubricants',
      description: 'Premium motor oils, gearbox fluids, brake fluids for smooth operation.'
    },
    {
      name: 'Spark Plugs & Ignition Components',
      description: 'Improve engine ignition and fuel efficiency.'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Designed for safety on Kenya\'s rough terrains.'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Essential visibility components.'
    },
    {
      name: 'Batteries',
      description: 'Long-lasting power for all vehicle types.'
    },
    {
      name: 'Fuses & Minor Electricals',
      description: 'Budget-friendly, high-need items.'
    },
    {
      name: 'Radiators & Hoses',
      description: 'Prevent overheating and coolant leaks.'
    },
    {
      name: 'Shock Absorbers & Suspension Bushings',
      description: 'For better handling on rough roads.'
    },
    {
      name: 'Tyres & Tubes',
      description: 'Durable and road-tested for Kenyan conditions.'
    }
  ];

  const motorcycleProducts = [
    {
      name: 'Tyres & Inner Tubes',
      description: 'Durable motorcycle tyres and tubes for all terrains.'
    },
    {
      name: 'Brake Pads & Cables',
      description: 'Essential braking components for safety.'
    },
    {
      name: 'Clutch & Gear Levers',
      description: 'Smooth gear shifting components.'
    },
    {
      name: 'Chains & Sprockets',
      description: 'High-quality drive train components.'
    },
    {
      name: 'Headlights & Mirrors',
      description: 'Visibility and safety accessories.'
    },
    {
      name: 'Seats, Shocks & Helmets',
      description: 'Comfort and safety essentials.'
    }
  ];

  const matatuProducts = [
    {
      name: 'Engine & Fuel Filters',
      description: 'Heavy-duty filters for commercial vehicle engines.'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Commercial-grade braking systems.'
    },
    {
      name: 'Suspension Units',
      description: 'Heavy-duty suspension for passenger transport.'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Commercial vehicle lighting solutions.'
    },
    {
      name: 'Tires',
      description: 'Commercial-grade tires for passenger vehicles.'
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
