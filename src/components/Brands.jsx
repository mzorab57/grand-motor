

import React from 'react'
import HeaderText from './ui/HeaderText';

const Brands = () => {
  const brands = [
    {
      name: 'Toyota',
      logo: '/assets/images/logos/toyota.png',
      gradient: 'from-red-500 to-red-700'
    },
    {
      name: 'Nissan',
      logo: '/assets/images/logos/nissan.png',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Hyundai',
      logo: '/assets/images/logos/hunday.png',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Kia',
      logo: '/assets/images/logos/kia.png',
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'Mercedes Benz',
      logo: '/assets/images/logos/mesides.png',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Land Rover',
      logo: '/assets/images/logos/landrover.png',
      gradient: 'from-green-600 to-green-800'
    },
    {
      name: 'BMW',
      logo: '/assets/images/logos/bmw.png',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Chery',
      logo: '/assets/images/logos/chery.png',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      name: 'GAC MG',
      logo: '/assets/images/logos/MGt.png',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      name: 'BYD',
      logo: '/assets/images/logos/byd.png',
      gradient: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <HeaderText text="Global Automotive Brands" />
          <p className="text-xl text-gray-600">
            Trusted partners from around the world
          </p>
        </div>

        {/* Marquee Style Infinite Scrolling */}
        <main 
          dir="ltr" 
          className="flex flex-col items-center justify-between py-10 overflow-hidden relative " 
        > 
          {/* Left Fog */} 
          <div className="absolute inset-y-0 left-0 w-8 lg:w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" /> 

          {/* marquee */} 
          <div className="flex overflow-hidden select-none gap-4 w-full stopScroll"> 
            {/* marquee content */} 
            <ul className="flex justify-around shrink-0 min-w-full gap-4 enable-animation-x"> 
              {brands.map((brand, index) => ( 
                <li key={index} className="flex-shrink-0"> 
                  <div className="brand-card group relative bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gray-300 min-w-[200px]">
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Logo Image */}
                      <div className="inline-flex items-center justify-center size-28 rounded-xl p-2 mb-4 group-hover:scale-110 transition-transform duration-300 border-gray-100">
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Brand Name */}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {brand.name}
                      </h3>
                      
                      {/* Decorative line */}
                      <div className={`w-12 h-1 bg-gradient-to-r ${brand.gradient} rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${brand.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-300`}></div>
                  </div>
                </li> 
              ))} 
            </ul> 
            <ul 
              aria-hidden="true" 
              className="flex justify-around shrink-0 min-w-full gap-4 enable-animation-x" 
            > 
              {brands.map((brand, index) => ( 
                <li key={index + brands.length} className="flex-shrink-0"> 
                  <div className="brand-card group relative bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gray-300 min-w-[200px]">
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Logo Image */}
                      <div className="inline-flex items-center justify-center size-28 rounded-xl p-2 mb-4 group-hover:scale-110 transition-transform duration-300 border-gray-100">
                        <img 
                          src={brand.logo} 
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Brand Name */}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {brand.name}
                      </h3>
                      
                      {/* Decorative line */}
                      <div className={`w-12 h-1 bg-gradient-to-r ${brand.gradient} rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${brand.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-300`}></div>
                  </div>
                </li> 
              ))} 
            </ul> 
          </div> 

          {/* Right Fog */} 
          <div className="absolute inset-y-0 right-0 w-8 lg:w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" /> 
        </main>
      </div>
    </section>
  )
}

export default Brands