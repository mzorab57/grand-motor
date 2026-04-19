import { useEffect, useState } from "react";


const socialLinks = [
  { name: "INSTAGRAM", url: "https://www.instagram.com/grandmotorsiraq" },
  { name: "FACEBOOK", url: "https://www.facebook.com/grandmotorsiraq" },
  { name: "TIKTOK", url: "https://www.tiktok.com/grandmotorsiraq" },
  { name: "SNAPCHAT", url: "https://snapchat.com/adds/grandmotorsiraq" },
];

const heroSlides = [
  {
    image: "/assets/images/bg/hero.jpg",
    eyebrow: "Grand Motors Iraq",
    title: "Premium Cars for Every Drive",
    description: "Discover modern vehicles from trusted global brands with premium presentation, reliable service, and fast support.",
  },
  {
    image: "/assets/images/bg/hero2.png",
    eyebrow: "Rental Solutions",
    title: "Flexible Rentals for Business and Personal Use",
    description: "Choose from clean, modern cars built for daily mobility, executive travel, and company transportation needs.",
  },
  {
    image: "/assets/images/bg/hero3.png",
    eyebrow: "Shipping and Logistics",
    title: "Reliable Delivery from Dubai to Iraq",
    description: "We handle sourcing, shipping, and transport with a strong regional network focused on speed and confidence.",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(intervalId);
  }, []);

  const nextSlide = () => setActiveSlide((s) => (s + 1) % heroSlides.length);
  const previousSlide = () => setActiveSlide((s) => s === 0 ? heroSlides.length - 1 : s - 1);

  return (
    <section className="relative h-[100vh] min-h-[760px] overflow-hidden bg-black text-white">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div key={slide.image} className={`absolute inset-0 transition-opacity duration-[1500ms] ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${index === activeSlide ? 'scale-105' : 'scale-110'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Luxury vertical social */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden 2xl:flex flex-col items-center gap-8">
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        {socialLinks.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" 
             className="text-[10px] tracking-[0.35em] text-white/50 hover:text-white transition-colors duration-300 [writing-mode:vertical-rl] rotate-180">
            {item.name}
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 ">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_400px]">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <div key={activeSlide} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-14 bg-red-500"></div>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-red-400/90">
                  {heroSlides[activeSlide].eyebrow}
                </p>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-light leading-[0.9] tracking-tight">
                {heroSlides[activeSlide].title}
              </h1>
              
              <p className="mt-8 max-w-xl text-lg lg:text-xl leading-relaxed text-gray-200/90 font-light">
                {heroSlides[activeSlide].description}
              </p>

              {/* <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link to="/cars" className="group relative overflow-hidden rounded-full bg-white px-9 py-4 text-[13px] font-semibold uppercase tracking-wider text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <span className="relative z-10">Explore Inventory</span>
                </Link>
                <Link to="/contact" className="rounded-full border border-white/25 bg-white/5 px-9 py-4 text-[13px] font-semibold uppercase tracking-wider backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40">
                  Contact Sales
                </Link>
              </div> */}
            </div>
          </div>

  {/* Right — FLOATING PREVIEW (NO CARD) */}
<div className="relative hidden lg:flex w-[460px] h-[600px] items-center justify-center">
  {/* Ghost big number */}
  <div className="pointer-events-none absolute -left-16 -top-10 text-[220px] font-thin leading-none text-white/[0.035] select-none">
    0{activeSlide + 1}
  </div>

  {/* Layered Images Stack */}
  <div className="relative w-[380px] h-[520px]">
    {heroSlides.map((slide, i) => {
      const offset = (i - activeSlide + heroSlides.length) % heroSlides.length;
      const isActive = i === activeSlide;
      return (
        <div
          key={slide.image}
          onClick={() => setActiveSlide(i)}
          className="absolute inset-0 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{
            transform: `translate(${offset * 22}px, ${-offset * 14}px) scale(${1 - offset * 0.05})`,
            zIndex: 10 - offset,
            opacity: offset > 2 ? 0 : isActive ? 1 : 0.55,
            filter: isActive ? 'none' : 'brightness(0.7)'
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[26px] shadow-[0_50px_120px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            {/* luxury gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* bottom info - only on active */}
            <div className={`absolute bottom-0 inset-x-0 p-7 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">{slide.eyebrow}</p>
              <h3 className="mt-2 text-[22px] font-light leading-tight text-white">{slide.title}</h3>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Minimal vertical controls */}
  <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
    <button onClick={previousSlide} aria-label="Previous" className="group">
      <div className="h-10 w-10 grid place-items-center rounded-full border border-white/15 text-white/60 group-hover:text-white group-hover:border-white/40 transition">
        ‹
      </div>
    </button>
    
    <div className="flex flex-col items-center gap-3">
      {heroSlides.map((_, i) => (
        <button key={i} onClick={() => setActiveSlide(i)} className="py-1">
          <span className={`block w-[2px] rounded-full transition-all duration-500 ${i === activeSlide ? 'h-10 bg-red-500' : 'h-5 bg-white/25 hover:bg-white/50'}`} />
        </button>
      ))}
    </div>
    
    <button onClick={nextSlide} aria-label="Next" className="group">
      <div className="h-10 w-10 grid place-items-center rounded-full border border-white/15 text-white/60 group-hover:text-white group-hover:border-white/40 transition">
        ›
      </div>
    </button>
  </div>
</div>
        </div>
      </div>

      {/* Bottom Progress */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-px w-full bg-white/10">
          <div className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-1000 ease-linear" style={{ width: `${((activeSlide + 1) / heroSlides.length) * 100}%` }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;