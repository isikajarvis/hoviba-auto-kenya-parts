
import { useEffect, useState } from 'react';

const BrandSlider = () => {
  const brands = [
    { 
      name: 'Toyota', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png'
    },
    { 
      name: 'Nissan', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo.png'
    },
    { 
      name: 'Honda', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Honda-Logo.png'
    },
    { 
      name: 'Subaru', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Subaru-Logo.png'
    },
    { 
      name: 'Mitsubishi', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mitsubishi-Logo.png'
    },
    { 
      name: 'Mazda', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mazda-Logo.png'
    },
    { 
      name: 'Isuzu', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Isuzu-Logo.png'
    },
    { 
      name: 'Suzuki', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Suzuki-Logo.png'
    },
    { 
      name: 'Volkswagen', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Volkswagen-Logo.png'
    },
    { 
      name: 'Mercedes-Benz', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png'
    },
    { 
      name: 'BMW', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png'
    },
    { 
      name: 'Hyundai', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Hyundai-Logo.png'
    },
    { 
      name: 'Kia', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Kia-Logo.png'
    },
    { 
      name: 'Ford', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Ford-Logo.png'
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
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-white rounded-full">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
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
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-white rounded-full">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
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
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-white rounded-full">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
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
