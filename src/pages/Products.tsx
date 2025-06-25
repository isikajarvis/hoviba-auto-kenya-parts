import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Car, Bike, Bus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

  // Initialize search query from URL parameters
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  const carProducts = [
    {
      name: 'Engine & Air Filters',
      description: 'Reliable filters for cleaner engine performance, ideal for rural/dusty roads.',
      imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop'
    },
    {
      name: 'Oil & Lubricants',
      description: 'Premium motor oils, gearbox fluids, brake fluids for smooth operation.',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Spark Plugs & Ignition Components',
      description: 'Improve engine ignition and fuel efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Designed for safety on Kenya\'s rough terrains.',
      imageUrl: 'https://images.unsplash.com/photo-1609743820088-592b041b5649?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Essential visibility components.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Batteries',
      description: 'Long-lasting power for all vehicle types.',
      imageUrl: 'https://images.unsplash.com/photo-1609097094593-8b6c7ccb8c92?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Fuses & Minor Electricals',
      description: 'Budget-friendly, high-need items.',
      imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
    },
    {
      name: 'Radiators & Hoses',
      description: 'Prevent overheating and coolant leaks.',
      imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Shock Absorbers & Suspension Bushings',
      description: 'For better handling on rough roads.',
      imageUrl: 'https://images.unsplash.com/photo-1558618996-fcd4c3d53819?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Tyres & Tubes',
      description: 'Durable and road-tested for Kenyan conditions.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const motorcycleProducts = [
    {
      name: 'Tyres & Inner Tubes',
      description: 'Durable motorcycle tyres and tubes for all terrains.',
      imageUrl: 'https://images.unsplash.com/photo-1609741199743-db6ead2b9b72?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Brake Pads & Cables',
      description: 'Essential braking components for safety.',
      imageUrl: 'https://images.unsplash.com/photo-1625047508936-ccfa7c2db5a5?w=400&h=300&fit=crop'
    },
    {
      name: 'Clutch & Gear Levers',
      description: 'Smooth gear shifting components.',
      imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop'
    },
    {
      name: 'Chains & Sprockets',
      description: 'High-quality drive train components.',
      imageUrl: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Headlights & Mirrors',
      description: 'Visibility and safety accessories.',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=top'
    },
    {
      name: 'Seats, Shocks & Helmets',
      description: 'Comfort and safety essentials.',
      imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
    }
  ];

  const matatuProducts = [
    {
      name: 'Engine & Fuel Filters',
      description: 'Heavy-duty filters for commercial vehicle engines.',
      imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop&crop=top'
    },
    {
      name: 'Brake Pads & Discs',
      description: 'Commercial-grade braking systems.',
      imageUrl: 'https://images.unsplash.com/photo-1609743820088-592b041b5649?w=400&h=300&fit=crop&crop=top'
    },
    {
      name: 'Suspension Units',
      description: 'Heavy-duty suspension for passenger transport.',
      imageUrl: 'https://images.unsplash.com/photo-1558618996-fcd4c3d53819?w=400&h=300&fit=crop&crop=top'
    },
    {
      name: 'Headlights, Tail-lights & Bulbs',
      description: 'Commercial vehicle lighting solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=top'
    },
    {
      name: 'Tires',
      description: 'Commercial-grade tires for passenger vehicles.',
      imageUrl: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=400&h=300&fit=crop'
    }
  ];

  const tabs = [
    { id: 'cars', name: 'Cars', icon: Car, products: carProducts },
    { id: 'motorcycles', name: 'Motorcycles (Boda-Bodas)', icon: Bike, products: motorcycleProducts },
    { id: 'matatus', name: 'Matatus', icon: Bus, products: matatuProducts }
  ];

  // Get all products from all categories for search
  const allProducts = [
    ...carProducts.map(p => ({ ...p, category: 'cars' })),
    ...motorcycleProducts.map(p => ({ ...p, category: 'motorcycles' })),
    ...matatuProducts.map(p => ({ ...p, category: 'matatus' }))
  ];

  // Filter products based on search query
  const getFilteredProducts = () => {
    if (!searchQuery.trim()) {
      return tabs.find(tab => tab.id === activeTab)?.products || [];
    }
    
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>

        {/* Tab Navigation - Hide when searching */}
        {!searchQuery.trim() && (
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
        )}

        {/* Search Results Info */}
        {searchQuery.trim() && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredProducts.length === 0 
                ? `No products found for "${searchQuery}"` 
                : `Found ${filteredProducts.length} product(s) for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && searchQuery.trim() && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">No products found</p>
              <p className="text-sm">Try searching with different keywords</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
