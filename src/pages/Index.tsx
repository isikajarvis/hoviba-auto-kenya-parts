
import BrandSlider from '@/components/BrandSlider';
import ContactButtons from '@/components/ContactButtons';
import Footer from '@/components/Footer';
import { MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const branches = ['Kitui', 'Embu', 'Mombasa', 'Kisumu', 'And surrounding areas'];

  // All products for search suggestions
  const allProducts = [
    { name: 'Engine & Air Filters', category: 'Cars' },
    { name: 'Oil & Lubricants', category: 'Cars' },
    { name: 'Spark Plugs & Ignition Components', category: 'Cars' },
    { name: 'Brake Pads & Discs', category: 'Cars' },
    { name: 'Headlights, Tail-lights & Bulbs', category: 'Cars' },
    { name: 'Batteries', category: 'Cars' },
    { name: 'Fuses & Minor Electricals', category: 'Cars' },
    { name: 'Radiators & Hoses', category: 'Cars' },
    { name: 'Shock Absorbers & Suspension Bushings', category: 'Cars' },
    { name: 'Tyres & Tubes', category: 'Cars' },
    { name: 'Tyres & Inner Tubes', category: 'Motorcycles' },
    { name: 'Brake Pads & Cables', category: 'Motorcycles' },
    { name: 'Clutch & Gear Levers', category: 'Motorcycles' },
    { name: 'Chains & Sprockets', category: 'Motorcycles' },
    { name: 'Headlights & Mirrors', category: 'Motorcycles' },
    { name: 'Seats, Shocks & Helmets', category: 'Motorcycles' },
    { name: 'Engine & Fuel Filters', category: 'Matatus' },
    { name: 'Commercial Brake Pads & Discs', category: 'Matatus' },
    { name: 'Suspension Units', category: 'Matatus' },
    { name: 'Commercial Headlights & Bulbs', category: 'Matatus' },
    { name: 'Tires', category: 'Matatus' }
  ];

  // Filter products based on search query
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setSearchQuery(productName);
    setIsSearchOpen(false);
    navigate(`/products?search=${encodeURIComponent(productName)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearchOpen(value.trim().length > 0);
  };

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
          
          {/* Search Bar with Autocomplete */}
          <div className="max-w-md mx-auto mb-8 relative">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for spare parts..."
                value={searchQuery}
                onChange={handleInputChange}
                className="pl-10 pr-4 py-3 w-full text-gray-900"
              />
            </form>
            
            {/* Dropdown suggestions */}
            {isSearchOpen && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="max-h-60 overflow-y-auto">
                  {filteredSuggestions.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">No products found.</div>
                  ) : (
                    filteredSuggestions.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(product.name)}
                        className="cursor-pointer hover:bg-gray-100 px-4 py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center space-x-2">
                          <Search className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

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
