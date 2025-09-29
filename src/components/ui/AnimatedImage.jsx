import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedImage = ({ 
  src, 
  alt, 
  className = "", 
  animation = "fade-up",
  duration = 1000,
  delay = 0,
  once = false, // Changed to false so animation repeats on image change
  offset = 120,
  easing = "ease-in-out",
  ...props 
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: duration,
      once: once,
      offset: offset,
      easing: easing,
    });
  }, [duration, once, offset, easing]);

  // Trigger re-animation when src changes
  useEffect(() => {
    setKey(prev => prev + 1);
    // Refresh AOS to detect new elements
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  }, [src]);

  const defaultClasses = "w-full max-w-5xl h-[10rem] sm:h-[15rem] md:h-[23rem] object-contain  transition-all duration-700  transform";
  const combinedClasses = `${defaultClasses} ${className}`;

  return (
    <div 
      key={key} // Force re-render when image changes
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-once={once}
      data-aos-offset={offset}
      data-aos-easing={easing}
      className="relative group"
    >
      <img
        src={src}
        alt={alt}
        className={combinedClasses}
        style={{
          // filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        {...props}
      />
      
      {/* Enhanced overlay effect */}
      {/* <div className="absolute inset-0  transition-all duration-500 rounded-xl pointer-events-none" /> */}
      
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-r from-gray-400/50 via-gray-500 to-gray-500/50 blur-xl -z-10 animate-pulse" />
      
      {/* Shimmer effect on image change */}
      <div 
        key={`shimmer-${key}`}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-6 animate-shimmer opacity-0 rounded-xl pointer-events-none"
        style={{
          animation: 'shimmer 1.5s ease-out'
        }}
      />
    </div>
  );
};

export default AnimatedImage;