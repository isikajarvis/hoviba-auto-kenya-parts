
import { useEffect, useState } from 'react';

const BrandSlider = () => {
  const brands = [
    { 
      name: 'Toyota', 
      logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Nissan', 
      logo: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Honda', 
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Subaru', 
      logo: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Mitsubishi', 
      logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Mazda', 
      logo: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Isuzu', 
      logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Suzuki', 
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Volkswagen', 
      logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Mercedes-Benz', 
      logo: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'BMW', 
      logo: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Hyundai', 
      logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Kia', 
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=100&h=100&fit=crop&crop=center'
    },
    { 
      name: 'Ford', 
      logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 3000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const start = currentSlide * 4;
    return brands.slice(start, start + 4);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Authorized Parts for Leading Brands
        </h2>
        
        {/* Desktop View - Show all brands in a grid */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-6">
          {brands.slice(0, 14).map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain rounded-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{brand.name}</h3>
            </div>
          ))}
        </div>

        {/* Tablet View - Show 4 brands per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-4 gap-4">
          {getVisibleBrands().map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain rounded-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{brand.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile View - Show 2 brands per row */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {getVisibleBrands().slice(0, 4).map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain rounded-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{brand.name}</h3>
            </div>
          ))}
        </div>
        
        {/* Slider indicators for mobile and tablet */}
        <div className="lg:hidden flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
