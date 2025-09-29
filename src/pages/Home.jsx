import { Link } from 'react-router-dom';
import AutomotiveBanner from '../components/AutomotiveBanner';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OurGrowth } from '../components/OurGrowth';
import { useEffect } from 'react';

const Home = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  const stats = [
    { year: '2024', cars: '1,050', revenue: '$13M' },
    { year: '2023', cars: '638', revenue: '$10.2M' },
    { year: '2022', cars: '492', revenue: '$8.8M' },
    { year: '2021', cars: '344', revenue: '$6.7M' },
  ];

  const services = [
    {
      title: 'Grand Motors',
      subtitle: 'Car Trading',
      description: 'New and modern cars from global brands including Toyota, Nissan, Hyundai, Mercedes Benz, BMW, and more.',
      icon: '🚗',
      established: '2020'
    },
    {
      title: 'Grand Rent A Car',
      subtitle: 'Car Rental',
      description: 'Short and long-term car rental services for individuals and companies with modern vehicles.',
      icon: '🔑',
      established: '2023'
    },
    {
      title: 'Grand Transportation',
      subtitle: 'Shipping & Logistics',
      description: 'Car shipping from Dubai to Iraq and comprehensive ground transportation and logistics services.',
      icon: '🚛',
      established: '2022'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
    
      {/* About Us Section */}
      <AboutUs />
      <OurGrowth />
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Growth Journey</h2>
            <p className="text-xl text-gray-600">Consistent growth and success over the years</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.year}</div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.cars}</div>
                <div className="text-gray-600 mb-2">Cars Sold</div>
                <div className="text-xl font-bold text-green-600">{stat.revenue}</div>
                <div className="text-gray-500">Revenue</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">2025 Target</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">1,350</div>
                  <div className="text-green-100">Cars</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$18M</div>
                  <div className="text-green-100">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Event Banner */}
      {/* <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AutomotiveBanner />
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business Divisions</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions across multiple sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-4">{service.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Est. {service.established}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-blue-600 mb-3">{service.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">🎯 Our Vision</h2>
              <p className="text-xl leading-relaxed">
                To become the leading destination in Iraq for automotive trading, transportation, 
                and rental services, with future regional expansion.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">🚀 Our Mission</h2>
              <p className="text-xl leading-relaxed">
                To provide integrated solutions that combine quality, competitive pricing, 
                and exceptional service to meet the needs of our customers and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to learn more about our services and how we can help you.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;