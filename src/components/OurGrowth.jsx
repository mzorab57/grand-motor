import React from 'react'
import TitleText from './ui/TitleText';
import HeaderText from './ui/HeaderText';

export const OurGrowth = () => {
   




     const services2 = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
      description: "2020",
      title:
        "Cars Sold 273 Revenue $3.8M",
    },
    {
      icon: (
       <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
     description: "2021",
      title:
        "Cars Sold 398 Revenue $6.1M",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      description: "2022",
      title:
        "Cars Sold 733 Revenue $10.2M"
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "2023",
      title:
        "Cars Sold 1146 Revenue $16.7M"
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "2024",
      title:
        "Cars Sold 1825 Revenue $25.5M"
    },
    {
         icon: (
       <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description: "2025",
      title:
        "Cars Sold 3188 Revenue $51.7M"
    },
  ];
  return (
   <div>
   
        {/* Services Grid */}
        <div className="my-20 px-1 relative">
          <div className="text-center mb-12">
           <HeaderText text="Our Growth Journey" />
            <p className="text-xl text-gray-600">Consistent growth and success over the years</p>
          </div>

          {/* Hexagon Grid Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
            
              <div className="w-96 h-96 border border-red-400/20 rounded-full"></div>
              <div className="absolute w-64 h-64 border border-red-400/30 rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 relative">
              {services2.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1 ${
                    index % 2 === 0
                      ? "lg:pr-20"
                      : "lg:pl-20 lg:flex-row-reverse"
                  }`}
                >
                  {/* Hexagon Icon */}
                  <div className="relative group">
                    <div className="w-32 h-32 relative">
                      {/* Hexagon Shape */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <defs>
                            <linearGradient
                              id={`gradient-${index}`}
                              x1="100%"
                              y1="100%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#1E40AF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            // points="5,5 90,2 90,75 50,95 4,5 1,5"
                            fill={`url(#gradient-${index})`}
                            stroke="#3B82F6"
                            strokeWidth="2"
                            className="group-hover:stroke-blue-400 transition-all duration-500"
                          />
                        </svg>
                      </div>

                      {/* Icon */}
                      <div data-aos="fade-left" data-aos-delay="50" className="absolute inset-0 flex items-center justify-center text-black">
                        {service.icon}
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-300/80 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Connection Line */}
                  
                  </div>

                  {/* Content */}
                  <div
                  data-aos="fade-up" data-aos-delay="100"
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-left" : "lg:text-right"
                    }`}
                  >
                   
                   
                     {/* <TitleText title={service.title} /> */}
                     
                     <h3 className={`text-2xl font-bold  mb-2 uppercase relative  ${
                      index % 2 === 0 ? "text-left bg-gradient-to-l" : "lg:text-right lg:bg-gradient-to-r bg-gradient-to-l"
                    }   
                    leading-tight  from-black/30 via-gray-700 to-gray-500 bg-clip-text text-transparent`}>
                      {service.title}
                        <div
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "left-0 w-20" : "right-0 w-20"
                      } h-[2px] bg-gradient-to-r from-gray-900/50 to-transparent translate-y-8 hidden lg:block`}
                    ></div>
                    </h3>
                    <p className="text-gray-900 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    
  )
}
