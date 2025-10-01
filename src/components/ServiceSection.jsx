import React from 'react'
import HeaderText from './ui/HeaderText';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Grand Motors",
      subtitle: "Automotive Trading",
      since: "Since 2020",
      description: "New and modern cars from global brands",
      brands: ["Toyota", "Nissan", "Hyundai", "Kia", "Mercedes Benz", "Land Rover", "BMW", "Chery", "GAC MG", "BYD"],
      features: ["Import from Dubai to Erbil", "Wholesale and retail sales", "B2B & B2C"],
      location: "Dubai, China, South Korea, Germany, USA,",
      backgroundImage: "/assets/images/service1.jpg",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      gradient: "from-red-600 black",
      bgGradient: "from-red-400 via-red-200/30 white"
    },
    

    {
      id: 2,
      title: "Grand Rent A Car",
      subtitle: "Car Rental Services",
      since: "Since 2023",
      description: "Modern car rentals",
      features: ["Short and long-term rentals", "Corporate and individual services", "Flexible rental packages", "Professional customer support"],
      highlights: ["Modern Fleet", "24/7 Service"],
      backgroundImage: "/assets/images/service3.jpg",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
        </svg>
      ),
      gradient: "from-black ",
      bgGradient: "from-black via-black/10 to-white/60 "
    },
    {
      id: 3,
      title: "Grand Transportation",
      subtitle: "Shipping & Logistics",
      since: "Since 2022",
      description: "Car shipping from Dubai, China, South Korea, Germany, USA, to Iraq",
      features: ["Ground transportation services", "Comprehensive logistics solutions", "International shipping", "Reliable delivery network"],
      highlights: ["Logistics", "Regional"],
      backgroundImage: "/assets/images/service2.jpg",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      gradient: "from-orange-400 ",
      bgGradient: "from-orange-300 via-orange-200/20 to-white/60 "
    },
    
  ];

  return (
    <section className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           <HeaderText text="Our Business Divisions" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automotive solutions across trading, rentals, and logistics
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
            onClick={() => window.location.href = `/services`}
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`service-card h-[30rem]  relative cursor-pointer group rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2  border service-gradient-border overflow-hidden`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              ></div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-80 group-hover:opacity-70 transition-all duration-500`}></div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              
              {/* Icon */}
              {/* <div className={`service-icon relative z-20 inline-flex items-center justify-center w-7 h-7 bg-gradient-to-r ${service.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                index === 0 ? 'service-icon-glow' : 
                index === 1 ? 'service-icon-glow-green' : 
                'service-icon-glow-purple'
              }`}>
                {service.icon}
              </div> */}

              {/* Content */}
              <div className="relative z-20">
                {/* Title and Since */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{service.title}</h3>
                  <p className="text-lg font-semibold text-white/90 mb-2 drop-shadow-md">{service.subtitle}</p>
                  <span className={`inline-block absolute top-2 right-0 px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-sm font-medium rounded-full shadow-lg`}>
                    {service.since}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/90 mb-6 text-base leading-relaxed drop-shadow-md">{service.description}</p>

                {/* Brands (for Automotive Trading) */}
                {service.brands && (
                  <div className="mb-1">
                    <h4 className="text-sm font-semibold text-white mb-3 drop-shadow-md">Global Brands:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand, idx) => (
                        <span 
                          key={idx} 
                          className="service-brand px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-lg border border-white/30 hover:bg-white/30 hover:shadow-md transition-all duration-300"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6  ">
                  <h4 className="text-sm font-semibold text-white mb-1 drop-shadow-md">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="service-feature flex items-center text-sm text-white/90 drop-shadow-sm"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 shadow-lg`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                </div>

                {/* Highlights */}
                {service.highlights && (
                  <div className="flex gap-2 mb-4">
                    {service.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Location */}
                {service.location && (
                  <div className="flex items-center text-sm text-white/90 drop-shadow-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {service.location}
                  </div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 z-10`}></div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection