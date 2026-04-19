import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceSection from '../components/ServiceSection';
import Brands from '../components/Brands';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

 

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <AboutUs />
      <Brands />
      <ServiceSection />
      {/* About Us Section */}
      {/* <OurGrowth /> */}
     

    
    </div>
  );
};

export default Home;
