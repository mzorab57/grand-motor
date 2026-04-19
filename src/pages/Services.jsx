import { Link } from 'react-router-dom';
import { Car, Key, ShieldCheck, Truck } from 'lucide-react';
import BgImage from '../components/ui/BgImage';
import HeaderText from '../components/ui/HeaderText';
import { Component as ParallaxScrollFeatureSection } from '../components/ui/parallax-scroll-feature-section';

const Services = () => {
  const serviceSections = [
    {
      id: 'service-1',
      eyebrow: 'Grand Motors',
      title: 'Grand Motors',
      description:
        'Specialized in modern car trading with a curated lineup from trusted global brands. We source and import selected vehicles from Dubai, China, South Korea, Germany, and the USA directly to Erbil.',
      imageUrl: '/assets/images/service1.jpg',
      badge: 'Est. 2020',
      reverse: false,
      tags: ['Toyota', 'Nissan', 'BMW', 'Mercedes', 'Direct Import'],
    },
    {
      id: 'service-2',
      eyebrow: 'Grand Transportation',
      title: 'Grand Transportation',
      description:
        'Professional logistics and vehicle shipping from Dubai to Iraq with organized routing, customs follow-up, and dependable coordination built for customers who value clarity and speed.',
      imageUrl: '/assets/images/service2.jpg',
      badge: 'Est. 2022',
      reverse: true,
      tags: ['Dubai to Iraq', 'Insured Shipping', 'Real-Time Tracking', 'Regional Routes'],
    },
    {
      id: 'service-3',
      eyebrow: 'Grand Rent A Car',
      title: 'Grand Rent A Car',
      description:
        'Premium rental services with a modern fleet for short and long-term use. We provide flexible solutions for individuals, visiting teams, and corporate clients across Iraq.',
      imageUrl: '/assets/images/service5.jpg',
      badge: 'Est. 2023',
      reverse: false,
      tags: ['Modern Fleet', '24/7 Support', 'Corporate Rates', 'Flexible Terms'],
    },
  ];



  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[60vh] md:h-[70vh]">
        <BgImage src="/assets/images/bg/hero3.png" alt="Grand Motors" />
        
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <HeaderText text="Comprehensive Solutions" />
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mt-6">
              Grand Group provides a seamless automotive ecosystem from vehicle
              sourcing and shipping to premium rental services, all presented
              through a more immersive service journey.
            </p>
          </div>

   
        </div>
      </section>

      <ParallaxScrollFeatureSection
        intro={{
          eyebrow: 'Grand Group Services',
          title: 'A premium journey through every division.',
          description:
            'Scroll through our automotive ecosystem and discover how trading, transportation, and rental services work together under one trusted brand.',
        }}
        sections={serviceSections}
       
      />

    
    </div>
  );
};

export default Services;
