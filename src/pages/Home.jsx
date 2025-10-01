import { Link } from 'react-router-dom';
import AutomotiveBanner from '../components/AutomotiveBanner';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OurGrowth } from '../components/OurGrowth';
import { useEffect } from 'react';
import ServiceSection from '../components/ServiceSection';
import Brands from '../components/Brands';
import VisionMision from '../components/VisionMision';

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
      <ServiceSection />
      <Brands />
     

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to learn more about our services and how we can help you.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;