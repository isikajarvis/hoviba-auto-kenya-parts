
import { useEffect, useState } from 'react';

const BrandSlider = () => {
  const brands = [
    { 
      name: 'Toyota', 
      logo: 'https://cdn.worldvectorlogo.com/logos/toyota-6.svg'
    },
    { 
      name: 'Nissan', 
      logo: 'https://cdn.worldvectorlogo.com/logos/nissan-6.svg'
    },
    { 
      name: 'Honda', 
      logo: 'https://cdn.worldvectorlogo.com/logos/honda-2.svg'
    },
    { 
      name: 'Subaru', 
      logo: 'https://cdn.worldvectorlogo.com/logos/subaru-2.svg'
    },
    { 
      name: 'Mitsubishi', 
      logo: 'https://cdn.worldvectorlogo.com/logos/mitsubishi-motors-1.svg'
    },
    { 
      name: 'Mazda', 
      logo: 'https://cdn.worldvectorlogo.com/logos/mazda-2.svg'
    },
    { 
      name: 'Isuzu', 
      logo: 'https://cdn.worldvectorlogo.com/logos/isuzu-1.svg'
    },
    { 
      name: 'Suzuki', 
      logo: 'https://cdn.worldvectorlogo.com/logos/suzuki-3.svg'
    },
    { 
      name: 'Volkswagen', 
      logo: 'https://cdn.worldvectorlogo.com/logos/volkswagen-vw.svg'
    },
    { 
      name: 'Mercedes-Benz', 
      logo: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg'
    },
    { 
      name: 'BMW', 
      logo: 'https://cdn.worldvectorlogo.com/logos/bmw.svg'
    },
    { 
      name: 'Hyundai', 
      logo: 'https://cdn.worldvectorlogo.com/logos/hyundai-motor-company.svg'
    },
    { 
      name: 'Kia', 
      logo: 'https://cdn.worldvectorlogo.com/logos/kia-motors-1.svg'
    },
    { 
      name: 'Ford', 
      logo: 'https://cdn.worldvectorlogo.com/logos/ford-6.svg'
    },
    { 
      name: 'Peugeot', 
      logo: 'https://cdn.worldvectorlogo.com/logos/peugeot-2.svg'
    },
    { 
      name: 'Volvo', 
      logo: 'https://cdn.worldvectorlogo.com/logos/volvo-1.svg'
    },
    { 
      name: 'Audi', 
      logo: 'https://cdn.worldvectorlogo.com/logos/audi-4.svg'
    },
    { 
      name: 'Land Rover', 
      logo: 'https://cdn.worldvectorlogo.com/logos/land-rover.svg'
    },
    { 
      name: 'Jeep', 
      logo: 'https://cdn.worldvectorlogo.com/logos/jeep-1.svg'
    },
    { 
      name: 'Lexus', 
      logo: 'https://cdn.worldvectorlogo.com/logos/lexus-1.svg'
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
          {brands.slice(0, 20).map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-white rounded-full">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    console.log(`Failed to load logo for ${brand.name}`);
                    e.currentTarget.style.display = 'none';
                  }}
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
                  onError={(e) => {
                    console.log(`Failed to load logo for ${brand.name}`);
                    e.currentTarget.style.display = 'none';
                  }}
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
                  onError={(e) => {
                    console.log(`Failed to load logo for ${brand.name}`);
                    e.currentTarget.style.display = 'none';
                  }}
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
