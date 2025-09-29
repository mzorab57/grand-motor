import React, { useEffect } from 'react';

import AnimatedImage from './ui/AnimatedImage';
import HeaderText from './ui/HeaderText';
import TitleText from './ui/TitleText';

const AboutUs = () => {
  

  const stats = [
    {
      title: "2020",
      description: "Founded Grand Motors",
      year: "Started our journey in automotive excellence",
      icon: "🚗"
    },
    {
      title: "Regional",
      description: "Serving Iraq & Beyond",
      // description: "Expanding our reach across the region",
      // icon: "🌍"
    },
    {
      title: "Premium",
      description: "New Cars Only",
      // description: "Committed to quality and excellence",
      icon: "⭐"
    },
    {
      title: "10+",
      description: "Years Experience",
      // description: "Decade of automotive expertise",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96  rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64  rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section with AnimatedImage logo */}
        <div className="text-center mb-10" data-aos="fade-up">
       
          <HeaderText text="About Grand Group"/>
           
          <div className="max-w-3xl mx-auto mb-1 mt-1" data-aos="fade-up" data-aos-delay="200">
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Founded in <span className="font-semibold ">2020</span> as <span className="font-semibold ">Grand Motors for General & Auto Trading</span>, 
              we have evolved into <span className="font-semibold ">Grand Group for General Trading</span>, becoming a comprehensive solution provider 
              in the automotive industry with successive achievements and business expansion.
            </p>
          </div>
        </div>


        {/* Stats Grid - Simplified */}
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto gap-4 mb-28">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="bg-white   text-center">
               
                
               
                 <TitleText text={stat.title} />
                
                
                {stat.subtitle && (
                  <div className="text-base font-medium text-gray-700 mb-2">
                    {stat.subtitle}
                  </div>
                )}
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Animated Images Section with more dynamic layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div data-aos="slide-right" data-aos-delay="600" className="md:col-span-2 ">
            <div className="relative group">
              <AnimatedImage
                src="/car-2.png"
                alt="Premium Car Collection"
                animation="slide-right"
                duration={500}
                delay={100}
                className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl  transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">Premium Collection</h4>
                  <p className="text-gray-200">Discover our exclusive range of premium vehicles with cutting-edge technology</p>
                </div>
              </div>
            </div>
              <div data-aos="zoom-in" data-aos-delay="900" className="relative group">
              <AnimatedImage
                src="/mg2.webp"
                alt="Advanced Technology"
                animation="zoom-in"
                duration={1200}
                delay={900}
                className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl  transition-opacity duration-500 flex items-end p-4">
                <div className="text-white">
                  <h4 className="text-lg font-bold mb-1">Advanced Tech</h4>
                  <p className="text-gray-200 text-sm">Future of mobility</p>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="slide-left" data-aos-delay="700" className="space-y-6">
            <div className="relative group">
              <AnimatedImage
                src="/mg1.png"
                alt="MG Brand Excellence"
                animation="slide-left"
                duration={600}
                delay={200}
                className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl  transition-opacity duration-500 flex items-end p-4">
                <div className="text-white">
                  <h4 className="text-lg font-bold mb-1">MG Excellence</h4>
                  <p className="text-gray-200 text-sm">Innovation and quality</p>
                </div>
              </div>
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="900" className="relative  group">
              <AnimatedImage
                src="/mg2.webp"
                alt="Advanced Technology"
                animation="zoom-in"
                duration={1200}
                delay={900}
                className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl  transition-opacity duration-500 flex items-end p-4">
                <div className="text-white">
                  <h4 className="text-lg font-bold mb-1">Advanced Tech</h4>
                  <p className="text-gray-200 text-sm">Future of mobility</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;