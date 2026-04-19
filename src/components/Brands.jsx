import React from 'react';
import HeaderText from './ui/HeaderText';

const brands = [
  { name: 'Toyota', logo: '/assets/images/logos/toyota.png' },
  { name: 'Nissan', logo: '/assets/images/logos/nissan.png' },
  { name: 'Hyundai', logo: '/assets/images/logos/hunday.png' },
  { name: 'Kia', logo: '/assets/images/logos/kia.png' },
  { name: 'Mercedes Benz', logo: '/assets/images/logos/mesides.png' },
  { name: 'Land Rover', logo: '/assets/images/logos/landrover.png' },
  { name: 'BMW', logo: '/assets/images/logos/bmw.png' },
  { name: 'Chery', logo: '/assets/images/logos/chery.png' },
  { name: 'GAC MG', logo: '/assets/images/logos/MGt.png' },
  { name: 'BYD', logo: '/assets/images/logos/byd.png' }
];

// لیستەکە دوو هێندە دەکەین بۆ ئەوەی بێ کۆتایی (Infinite) دەربکەوێت
const duplicatedBrands = [...brands, ...brands];

// am section layer haia bo move auto la index.css

const Brands = () => {
  return (
    <section className="py-10 bg-[#f9f9f9] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <HeaderText text="Global Automotive Brands & Trusted Partners" />
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Fades for smooth edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10" />

          {/* Scrolling Wrapper */}
          <div className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
            <div className="flex gap-4 animate-scroll whitespace-nowrap">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-[140px] sm:w-[200px] h-[100px] sm:h-[150px] bg-white rounded-2xl border border-gray-200/70 flex items-center justify-center p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-20 sm:max-h-24  border-4 rounded-2xl w-auto object-contain  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;