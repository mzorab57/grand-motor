import React from 'react'
import HeaderText from './ui/HeaderText';

const CarBrands = () => {

     const brands = [
    'Toyota', 'Nissan', 'Hyundai', 'Kia', 'Mercedes', 
    'Land Rover', 'BMW', 'Chery', 'GAC MG', 'BYD'
  ];

  return (
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HeaderText text="Car Brands We Represent" />
            <p className="text-xl text-gray-600">Premium vehicles from world-renowned manufacturers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-red-50/10 border border-red-300 rounded-xl p-6 text-center shadow-md  transition-all duration-300 hover:bg-red-100/70">
                <div className="text-lg font-semibold text-gray-900">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CarBrands