import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMG_PADDING = 12;
const MotionDiv = motion.div;

const serviceSections = [
  {
    imgUrl: "https://pub-8090965640ca4bd1b63bf23a3ab20377.r2.dev/heroV.mp4",
    subheading: "Grand Transportation",
    heading: "Regional shipping and logistics.",
    title: "Reliable transport from sourcing markets to Iraq",
    descriptionOne:
      "Grand Transportation manages the movement of vehicles from major sourcing hubs such as Dubai with organized coordination, dependable follow-up, and a clear logistics process.",
    descriptionTwo:
      "Our logistics division is built to give customers and partners greater clarity, safer handling, and a more dependable delivery timeline from shipment origin to final destination.",
    buttonLabel: "Explore Logistics",
  },
  {
    imgUrl: "/assets/images/service1.jpg",
    subheading: "Grand Motors",
    heading: "Premium automotive trading.",
    title: "A destination for premium new vehicles in Iraq",
    descriptionOne:
      "Grand Motors brings together a refined selection of new vehicles from Toyota, Nissan, Hyundai, BMW, Mercedes-Benz, and other trusted manufacturers for customers who value quality and confidence.",
    descriptionTwo:
      "From first inquiry to final delivery, our team focuses on transparent guidance, premium presentation, and a buying experience that feels as professional as the vehicles we represent.",
    buttonLabel: "Discover Inventory",
  },
  {
    imgUrl: "/assets/images/service3.jpg",
    subheading: "Grand Rent A Car",
    heading: "Flexible rentals that move with you.",
    title: "Rental services designed for comfort and flexibility",
    descriptionOne:
      "Grand Rent A Car provides practical and premium mobility solutions for families, business travelers, company teams, and visitors who need clean, modern vehicles without compromise.",
    descriptionTwo:
      "Whether the need is daily, weekly, or long-term, every booking is shaped around convenience, responsive support, and vehicles ready for smooth travel across the city and beyond.",
    buttonLabel: "Book A Rental",
  },
  
];

export const TextParallaxContentExample = () => {
  return (
    <div className="   ">
      {serviceSections.map((section) => (
        <TextParallaxContent
          key={section.heading}
          imgUrl={section.imgUrl}
          subheading={section.subheading}
          heading={section.heading}
        >
          <ExampleContent section={section} />
        </TextParallaxContent>
      ))}
    </div>
  );
};

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(imgUrl);

  return (
    <MotionDiv
      ref={targetRef}
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-xl"
    >
      {isVideo ? (
        <video
          src={imgUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
      )}
      <MotionDiv
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </MotionDiv>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <MotionDiv
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="max-w-5xl text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </MotionDiv>
  );
};

const ExampleContent = ({ section }) => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-neutral-900 md:col-span-4">
      {section.title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {section.descriptionOne}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {section.descriptionTwo}
      </p>
      <Link
        to="/services"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-900 px-9 py-4 text-xl hover:text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        {section.buttonLabel}
        <ArrowUpRight className="h-5 w-5" />
      </Link>
    </div>
  </div>
);
