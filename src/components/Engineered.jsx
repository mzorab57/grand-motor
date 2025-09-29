import React, { useEffect, useRef, useState } from 'react';

const Engineered = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) based on scroll-down
      let progress = 0;
      if (rect.top < windowHeight && rect.bottom >= 90) {
        // Progress increases as user scrolls down
        progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="scrolljack-container "
    >
      <div className="scrolljack-content">
        {/* Background layer with new styling */}
        <div 
          className="background-layer"
          style={{
            clipPath: `inset(0px 0% 0px ${130 - (scrollProgress * 100)}%)`
          }}
        />
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="row_container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Text */}
            <div 
              className="space-y-8"
              style={{
                transform: `translateX(${-50 + (scrollProgress * 50)}px)`,
                opacity: Math.max(0.3, scrollProgress)
              }}
            >
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="relative inline-block">
                    Engineered for
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-white"
                      style={{
                        width: `${scrollProgress * 100}%`,
                        transition: 'width 0.3s ease'
                      }}
                    />
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    today and
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-white"
                      style={{
                        width: `${Math.max(0, (scrollProgress - 0.2) * 100)}%`,
                        transition: 'width 0.3s ease'
                      }}
                    />
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    tomorrow
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-white"
                      style={{
                        width: `${Math.max(0, (scrollProgress - 0.4) * 100)}%`,
                        transition: 'width 0.3s ease'
                      }}
                    />
                  </span>
                </h2>
              </div>
            </div>
            
            {/* Right Content - Description and Button */}
            <div 
              className="space-y-6"
              style={{
                transform: `translateX(${50 - (scrollProgress * 50)}px)`,
                opacity: Math.max(0.3, scrollProgress)
              }}
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                A car should be built to go the distance with you. It's why we design every new 
                feature and technology to make your drive safe, easier, and more enjoyable for 
                years to come.
              </p>
              
              <button 
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                style={{
                  transform: `scale(${0.8 + (scrollProgress * 0.2)})`,
                  opacity: scrollProgress > 0.6 ? 1 : 0
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineered;
