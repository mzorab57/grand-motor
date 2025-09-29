import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'grand-motors',
      title: 'Grand Motors',
      subtitle: 'Modern Car Trading',
      year: '2020',
      description: 'Specialized in selling new and modern cars from global brands. We import cars from Dubai to Erbil and offer both wholesale and retail sales.',
      features: [
        'New and modern cars from global brands',
        'Import cars from Dubai to Erbil',
        'Wholesale and retail sales',
        'Quality assurance and warranty',
        'Competitive pricing',
        'Professional consultation'
      ],
      brands: ['Toyota', 'Nissan', 'Hyundai', 'Kia', 'Mercedes Benz', 'Land Rover', 'BMW', 'Chery', 'GAC MG', 'BYD'],
      icon: '🚗',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      id: 'grand-rent',
      title: 'Grand Rent A Car',
      subtitle: 'Car Rental Services',
      year: '2023',
      description: 'Modern car rental services for short and long-term periods. We serve both companies and individuals with flexible rental options.',
      features: [
        'Short and long-term car rental',
        'Services for companies and individuals',
        'Modern and well-maintained fleet',
        'Flexible rental packages',
        '24/7 customer support',
        'Competitive rental rates'
      ],
      benefits: [
        'No maintenance costs',
        'Insurance included',
        'Flexible terms',
        'Professional service',
        'Wide vehicle selection',
        'Convenient locations'
      ],
      icon: '🔑',
      color: 'from-green-600 to-green-800',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      id: 'grand-transportation',
      title: 'Grand Transportation & Shipping',
      subtitle: 'Transportation & Logistics',
      year: '2022',
      description: 'Professional car shipping from Dubai to Iraq and comprehensive ground transportation and logistics services.',
      features: [
        'Car shipping from Dubai to Iraq',
        'Ground transportation services',
        'Logistics and supply chain solutions',
        'Secure and insured shipping',
        'Tracking and monitoring',
        'Customs clearance assistance'
      ],
      routes: [
        'Dubai to Erbil',
        'Dubai to Baghdad',
        'Regional transportation',
        'Cross-border logistics'
      ],
      icon: '🚛',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const stats = [
    { number: '2,800+', label: 'Cars Sold', icon: '🚗' },
    { number: '500+', label: 'Rental Clients', icon: '🔑' },
    { number: '1,200+', label: 'Cars Shipped', icon: '🚛' },
    { number: '98%', label: 'Customer Satisfaction', icon: '⭐' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive automotive solutions across three specialized divisions, 
            serving customers throughout Iraq and the region.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-xl text-gray-600">{service.subtitle}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                      Since {service.year}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {service.brands && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Brands:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.brands.map((brand, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.benefits && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.routes && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Routes:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.routes.map((route, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            <span className="text-gray-700">{route}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <div className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl inline-block`}>
                      <div className="text-2xl font-bold">{service.title}</div>
                      <div className="text-lg opacity-90">{service.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help meet your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;