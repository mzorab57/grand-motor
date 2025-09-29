const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Grand Motors Founded',
      description: 'Started as a specialized company in modern car trading, focusing on quality vehicles from global brands.',
      icon: '🚗'
    },
    {
      year: '2022',
      title: 'Grand Transportation Launched',
      description: 'Expanded into shipping and logistics, offering car transportation from Dubai to Iraq.',
      icon: '🚛'
    },
    {
      year: '2023',
      title: 'Grand Rent A Car Established',
      description: 'Added car rental services for both individuals and companies, completing our service portfolio.',
      icon: '🔑'
    },
    {
      year: '2024',
      title: 'Grand Group Formation',
      description: 'Unified all divisions under Grand Group for General Trading, becoming a comprehensive trading company.',
      icon: '🏢'
    }
  ];

  const advantages = [
    {
      title: 'Over 10 Years of Experience',
      description: 'Practical experience spanning more than a decade in the automotive industry.',
      icon: '⭐'
    },
    {
      title: 'Diverse Services',
      description: 'Complete solutions including trading, rental, and shipping services.',
      icon: '🔄'
    },
    {
      title: 'New Cars Only',
      description: 'We exclusively deal in new vehicles, never used cars.',
      icon: '✨'
    },
    {
      title: 'Competitive Pricing',
      description: 'Competitive prices with flexible offers and payment plans.',
      icon: '💰'
    },
    {
      title: 'Regional Partnerships',
      description: 'Trusted regional partnership network for reliable service delivery.',
      icon: '🤝'
    },
    {
      title: 'Professional Team',
      description: 'Integrated team with professional expertise and industry knowledge.',
      icon: '👥'
    }
  ];

  const brands = [
    'Toyota', 'Nissan', 'Hyundai', 'Kia', 'Mercedes Benz', 
    'Land Rover', 'BMW', 'Chery', 'GAC MG', 'BYD'
  ];

  const futureGoals = [
    {
      title: 'Revenue Target',
      description: 'Reach $50 million in annual sales within five years',
      icon: '📈'
    },
    {
      title: 'Sales Volume',
      description: 'Increase sales volume to 2,500-3,000 cars annually',
      icon: '🎯'
    },
    {
      title: 'Baghdad Branch',
      description: 'Open a new branch in Baghdad to expand our reach',
      icon: '🏪'
    },
    {
      title: 'Service Center',
      description: 'Establish a comprehensive Service Center in Erbil',
      icon: '🔧'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Grand Group</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From a specialized car trading company to a comprehensive trading group, 
            our journey represents growth, innovation, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">✨ Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Grand Motors for General & Auto Trading</strong> was founded in 2020 as a specialized 
                  company in modern car trading. With consecutive successes and business expansion, 
                  it transformed into <strong>Grand Group for General Trading</strong> to encompass 
                  several leading companies in diverse sectors.
                </p>
                <p>
                  Today, the group provides integrated solutions in car trading, car rental, 
                  and transportation and shipping, becoming a trusted partner for individual 
                  customers and companies alike, both inside Iraq and abroad.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and exceptional service has 
                  made us a leader in the automotive industry in the Kurdistan Region and Iraq.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600">3</div>
                  <div className="text-gray-600">Business Divisions</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">10+</div>
                  <div className="text-gray-600">Car Brands</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">2,800+</div>
                  <div className="text-gray-600">Cars Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚗 Car Brands We Represent</h2>
            <p className="text-xl text-gray-600">Premium vehicles from world-renowned manufacturers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-lg font-semibold text-gray-900">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Our Competitive Advantages</h2>
            <p className="text-xl text-gray-600">What sets us apart in the market</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎯 Future Goals</h2>
            <p className="text-xl text-gray-300">Our vision for the next five years</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl p-8 text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                <div className="text-5xl mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                <p className="text-gray-300 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;