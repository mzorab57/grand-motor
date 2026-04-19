import React from 'react'
import { FaEye, FaRocket } from 'react-icons/fa'
import HeaderText from './ui/HeaderText'

const VisionMision = () => {
  return (
      <section className="py-20  relative overflow-hidden">
        {/* Decorative background elements */}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full opacity-10 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-400 rounded-full opacity-10 translate-x-40 translate-y-40"></div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-3xl max-w-7xl camel-case text-start md:text-[150px] w-full
     font-medium leading-tight bg-gradient-to-r from-gray-400 via-gray-800
      to-gray-300 bg-clip-text text-transparent">
     Vision & Mission
    </div>
            {/* <HeaderText text="Vision & Mission" /> */}
            
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl  md:p-10  hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ">
                <div className="flex items-center justify-center mb-8">
                  {/* <div className="w-20 h-20 border border-red-300 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaEye className="text-3xl text-red-400" />
                  </div> */}
                </div>
                
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 text-center group-hover:text-red-700 transition-colors">
                  Our Vision
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
                  To become the leading destination in Iraq for automotive trading, transportation, 
                  and rental services, with future regional expansion.
                </p>
                
               
              </div>
            </div>

            {/* Mission Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10  hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ">
                <div className="flex items-center justify-center mb-8">
                  {/* <div className="w-20 h-20 border border-red-300 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaRocket className="text-3xl text-red-400" />
                  </div> */}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 text-center group-hover:text-red-700 transition-colors">
                  Our Mission
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
                  To provide integrated solutions that combine quality, competitive pricing, 
                  and exceptional service to meet the needs of our customers and partners.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default VisionMision
