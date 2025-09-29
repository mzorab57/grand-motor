import { useState, useEffect } from 'react';
import AnimatedImage from './ui/AnimatedImage';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carImages = [
    { src: '/car-1.png', title: 'BMW i8 Concept' },
    { src: '/car-2.png', title: 'BMW Vision Next' }
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen px-1 w-full bg-white text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full  mx-auto  flex flex-col  items-center gap-20 md:gap-24">
        <div className="flex-1">
          <h1 className="text-5xl uppercase text-center md:text-[4.5rem] w-full font-bold leading-tight bg-gradient-to-l from-black/5 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            GRAND MOTORS
            
            Quality <br />at the Right Price
          </h1>

          {/* <button className="mt-8 px-6 py-3 text-center bg-gradient-to-r from-green-500 to-green-700 rounded-full text-black font-semibold hover:brightness-110 transition">
            Contact Us
          </button> */}
        </div>

        <div className="relative flex-1  w-full max-w-5xl px-3 ">
          <div className="relative  rounded-3xl   ">
            <AnimatedImage
              src={carImages[currentImageIndex].src}
              alt={carImages[currentImageIndex].title}
              animation="zoom-in"
              duration={1200}
              delay={200}
              easing="ease-out-cubic"
            />

            {/* Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 -left-2 -translate-y-1/2 px-1.5 md:px-3 scale-125  border  text-black hover:bg-black/5 transition"
            >
              &#8592;
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 -right-2 -translate-y-1/2 px-1.5 md:px-3 scale-125 border  text-black hover:bg-black/5 transition"
            >
              &#8594;
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {carImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-3 w-3 rounded-full ${i === currentImageIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
