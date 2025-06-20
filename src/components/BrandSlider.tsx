
import { useEffect, useState } from 'react';

const BrandSlider = () => {
  const brands = [
    { 
      name: 'Nissan', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Nissan-Logo.png'
    },
    { 
      name: 'Subaru', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Subaru-Logo.png'
    },
    { 
      name: 'Honda', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png'
    },
    { 
      name: 'Mitsubishi', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Mitsubishi-Logo.png'
    },
    { 
      name: 'Mazda', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Mazda-Logo.png'
    },
    { 
      name: 'Toyota', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Toyota-Logo.png'
    },
    { 
      name: 'Isuzu', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Isuzu-Logo.png'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(brands.length / 3));
    }, 3000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const start = currentSlide * 3;
    return brands.slice(start, start + 3);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Authorized Parts for Leading Brands
        </h2>
        
        {/* Desktop View - Show all brands */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{brand.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {getVisibleBrands().map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{brand.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Slider indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(brands.length / 3) }).map((_, index) => (
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
    </div>
  );
};

export default BrandSlider;
