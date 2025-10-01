import React from 'react';
import AnimatedImage from './ui/AnimatedImage';
import HeaderText from './ui/HeaderText';
import TitleText from './ui/TitleText';

// Stats data configuration
const STATS_DATA = [
  {
    title: "2020",
    description: "Founded Grand Motors",
    icon: "🚗"
  },
  {
    title: "Regional",
    description: "Serving Iraq & Beyond"
  },
  {
    title: "Premium",
    description: "New Cars Only",
    icon: "⭐"
  },
  {
    title: "10+",
    description: "Years Experience",
    icon: "🏆"
  }
];

// Gallery images configuration
const GALLERY_IMAGES = [
  {
    src: "/assets/images/tobg.png",
    alt: "Premium Car Collection",
    title: "Toyota Collection",
    subtitle: "Discover our exclusive range",
    animation: "slide-right",
    duration: 500,
    delay: 100,
    aosDelay: 600,
    className: "md:col-span-2"
  },
  {
    src: "/assets/images/landrover.png",
    alt: "Advanced Technology",
    title: "Land Rover Collection",
    subtitle: "Future of mobility",
    animation: "zoom-in",
    duration: 1200,
    delay: 900,
    aosDelay: 900,
    className: "relative group"
  },
  {
    src: "/assets/images/bmgb.png",
    alt: "MBW Brand Excellence",
    title: "MBW Collection",
    subtitle: "Innovation and quality",
    animation: "slide-left",
    duration: 600,
    delay: 200,
    aosDelay: 700,
    className: "relative group"
  },
  {
    src: "/assets/images/camrybg.png",
    alt: "Advanced Technology",
    title: "Camry Collection",
    subtitle: "Future of mobility",
    animation: "zoom-in",
    duration: 1200,
    delay: 900,
    aosDelay: 900,
    className: "relative group"
  }
];

const AboutUs = () => {
  // Component render methods
  const renderBackgroundElements = () => (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  );

  const renderHeader = () => (
    <div className="text-center mb-10" data-aos="fade-up">
      <HeaderText text="About Grand Group" />
      
      <div className="max-w-3xl mx-auto mb-1 mt-1" data-aos="fade-up" data-aos-delay="200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold">Founded by Mr. Muhanad Hasan in 2020</span> as{' '}
          <span className="font-semibold">Grand Motors for General & Auto Trading</span>, 
          we have evolved into <span className="font-semibold">Grand Group for General Trading</span>, 
          becoming a comprehensive solution provider in the automotive industry with successive 
          achievements and business expansion.
        </p>
      </div>
    </div>
  );

  const renderStatsGrid = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto gap-8 mb-28">
      {STATS_DATA.map((stat, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={200 + index * 100}
        >
          <div className="bg-white text-center">
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
  );

  const renderImageOverlay = (image) => (
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl transition-opacity duration-500 flex items-end p-2 md:p-4">
      <div className="text-white ">
        <h4 className={`font-bold  uppercase ${image.className?.includes('col-span-2') ? 'text-2xl ' : 'text-lg'}`}>
          {image.title}
        </h4>
        <p className={`text-gray-200 ${image.className?.includes('col-span-2') ? '' : 'text-sm'}`}>
          {image.subtitle}
        </p>
      </div>
    </div>
  );

  const renderGallerySection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-20">
      {/* Main large image */}
      <div data-aos="slide-right" data-aos-delay="600" className="md:col-span-2 md:space-y-6 space-y-20">
        <div className="relative group">
          <AnimatedImage
            src={GALLERY_IMAGES[0].src}
            alt={GALLERY_IMAGES[0].alt}
            animation={GALLERY_IMAGES[0].animation}
            duration={GALLERY_IMAGES[0].duration}
            delay={GALLERY_IMAGES[0].delay}
            className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
          />
          {renderImageOverlay(GALLERY_IMAGES[0])}
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="900" className="relative group">
          <AnimatedImage
            src={GALLERY_IMAGES[1].src}
            alt={GALLERY_IMAGES[1].alt}
            animation={GALLERY_IMAGES[1].animation}
            duration={GALLERY_IMAGES[1].duration}
            delay={GALLERY_IMAGES[1].delay}
            className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
          />
          {renderImageOverlay(GALLERY_IMAGES[1])}
        </div>
      </div>
      
      {/* Side images */}
      <div data-aos="slide-left" data-aos-delay="700" className="md:space-y-6 space-y-20">
        <div className="relative group">
          <AnimatedImage
            src={GALLERY_IMAGES[2].src}
            alt={GALLERY_IMAGES[2].alt}
            animation={GALLERY_IMAGES[2].animation}
            duration={GALLERY_IMAGES[2].duration}
            delay={GALLERY_IMAGES[2].delay}
            className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
          />
          {renderImageOverlay(GALLERY_IMAGES[2])}
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="900" className="relative group">
          <AnimatedImage
            src={GALLERY_IMAGES[3].src}
            alt={GALLERY_IMAGES[3].alt}
            animation={GALLERY_IMAGES[3].animation}
            duration={GALLERY_IMAGES[3].duration}
            delay={GALLERY_IMAGES[3].delay}
            className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700"
          />
          {renderImageOverlay(GALLERY_IMAGES[3])}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-2 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      {renderBackgroundElements()}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        {renderHeader()}

        {/* Stats Grid */}
        {renderStatsGrid()}

        {/* Gallery Section */}
        {renderGallerySection()}
      </div>
    </section>
  );
};

export default AboutUs;


