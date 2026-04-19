import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa";
import { VerticalCutReveal } from "./vertical-cut-reveal";


const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionFigure = motion.figure;
const MotionP = motion.p;

// ── Data ──────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/grandmotorsiraq",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/grandmotorsiraq",
  },
  {
    name: "Snapchat",
    icon: FaSnapchat,
    url: "https://snapchat.com/adds/grandmotorsiraq",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    url: "https://tiktok.com/grandmotorsiraq",
  },
];

const STATS_INLINE = [
  { value: "2020", label: "Founded" },
  { value: "10+", label: "Global Brands" },
];

const STATS_SIDE = [
  { value: "100+", label: "Cars Sold" },
  { value: "24/7", label: "Customer Support" },
];

const ABOUT_PARAGRAPHS = [
  "In 2020 as Grand Motors for General & Auto Trading, we rapidly grew into one of Iraq's most trusted automotive companies — offering premium new vehicles from the world's top manufacturers.",
  "Every brand has a story, and Grand Group's story is one of ambition, trust, and excellence. From sales to shipping and rentals, we deliver comprehensive mobility solutions across Iraq and the region.",
];

// ── Animation helpers ─────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

// ── Component ─────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-10  bg-[#f9f9f9]"
    >
      <div className="max-w-7xl px-4 mx-auto">
        <div className="relative">

          {/* ── Top Bar: Badge + Socials ── */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">

            {/* Badge */}
            <MotionDiv
              {...fadeUp(0.1)}
              animate={inView ? fadeUp(0.1).animate : fadeUp(0.1).initial}
              className="flex items-center gap-2"
            >
              {/* <span className="text-red-500 animate-spin inline-block">✱</span> */}
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                About Us
              </span>
            </MotionDiv>

            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((item, i) => (
                <MotionA
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(0.1 + i * 0.08)}
                  animate={
                    inView
                      ? fadeUp(0.1 + i * 0.08).animate
                      : fadeUp(0.1 + i * 0.08).initial
                  }
                  className="w-8 h-8 border border-gray-200 bg-white rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-300 transition-all duration-200 shadow-sm"
                >
                  <item.icon size={15} />
                </MotionA>
              ))}
            </div>
          </div>

          {/* ── Hero Image with custom clip-path ── */}
          <MotionFigure
            className="relative group m-0"
            {...fadeIn(0.3)}
            animate={inView ? fadeIn(0.3).animate : fadeIn(0.3).initial}
          >
            <svg className="w-full" width="100%" height="100%" viewBox="0 0 100 40">
              <defs>
                <clipPath id="clip-grand" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-grand)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="../assets/images/bg/hero.jpg"
               
              />
            </svg>

            {/* Side stats floating card */}
            <div className="absolute hidden right-0 bottom-16 lg:flex flex-col gap-2 pr-2">
              {STATS_SIDE.map((stat, i) => (
                <MotionDiv
                  key={stat.label}
                  {...fadeUp(0.5 + i * 0.15)}
                  animate={
                    inView
                      ? fadeUp(0.5 + i * 0.15).animate
                      : fadeUp(0.5 + i * 0.15).initial
                  }
                  className="flex items-baseline gap-2"
                >
                  <span className="text-red-500 font-bold   leading-none">
                    {stat.value}
                  </span>
                  <span className="text-gray-600 uppercase text-xs ">
                    {stat.label}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionFigure>

          {/* ── Inline stats row ── */}
          <MotionDiv
            {...fadeUp(0.55)}
            animate={inView ? fadeUp(0.55).animate : fadeUp(0.55).initial}
            className="flex flex-wrap items-center gap-6 py-4 text-sm"
          >
            {STATS_INLINE.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-red-500 font-bold text-base">
                  {stat.value}
                </span>
                <span className="text-gray-600">{stat.label}</span>
                {i < STATS_INLINE.length - 1 && (
                  <span className="text-gray-300 ml-2">|</span>
                )}
              </div>
            ))}
          </MotionDiv>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid md:grid-cols-3 gap-8 mt-2">

          {/* Left — Title + paragraphs */}
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl !leading-[110%] font-semibold text-gray-900 mb-8">
              {inView && (
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.1}
                  staggerFrom="first"
                  reverse={false}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                    delay: 0.6,
                  }}
                >
                  Driving Excellence Across Iraq & Beyond.
                </VerticalCutReveal>
              )}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-500 text-sm sm:text-base">
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <MotionP
                  key={i}
                  {...fadeUp(0.7 + i * 0.15)}
                  animate={
                    inView
                      ? fadeUp(0.7 + i * 0.15).animate
                      : fadeUp(0.7 + i * 0.15).initial
                  }
                  className="leading-relaxed text-justify"
                >
                  {para}
                </MotionP>
              ))}
            </div>
          </div>

          {/* Right — Company info + CTA */}
          <div className="md:col-span-1">
            <div className="lg:text-right">
              <MotionDiv
                {...fadeUp(0.65)}
                animate={inView ? fadeUp(0.65).animate : fadeUp(0.65).initial}
                className="text-red-500 text-2xl font-bold mb-1 tracking-wider"
              >
                GRAND GROUP
              </MotionDiv>

              <MotionDiv
                {...fadeUp(0.72)}
                animate={inView ? fadeUp(0.72).animate : fadeUp(0.72).initial}
                className="text-gray-500 text-sm mb-8"
              >
                Automotive Sales | Rental | Shipping
              </MotionDiv>

              <MotionP
                {...fadeUp(0.8)}
                animate={inView ? fadeUp(0.8).animate : fadeUp(0.8).initial}
                className="text-gray-800 font-medium mb-6 text-sm leading-relaxed"
              >
                Ready to find your perfect vehicle or explore our premium services?
              </MotionP>

              <MotionDiv
                {...fadeUp(0.88)}
                animate={inView ? fadeUp(0.88).animate : fadeUp(0.88).initial}
              >
                {/* <Link
                  to="/contact"
                  className=" hover:bg-neutral-950  border border-neutral-700 inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-slate-800 hover:text-white px-5 py-3 rounded-lg font-semibold text-sm ml-auto"
                >
                  GET IN TOUCH <ArrowRight size={16} />
                </Link> */}
              </MotionDiv>

              {/* Extra stats cards */}
              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  { value: "Iraq", label: "Primary Market" },
                  { value: "Dubai", label: "Sourcing Hub" },
                  { value: "New", label: "Cars Only" },
                  { value: "2020", label: "Est." },
                ].map((item, i) => (
                  <MotionDiv
                    key={item.label}
                    {...fadeUp(0.9 + i * 0.08)}
                    animate={
                      inView
                        ? fadeUp(0.9 + i * 0.08).animate
                        : fadeUp(0.9 + i * 0.08).initial
                    }
                    className="rounded-xl border border-gray-100 bg-white p-3 text-left shadow-sm"
                  >
                    <p className="text-base font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">
                      {item.label}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
