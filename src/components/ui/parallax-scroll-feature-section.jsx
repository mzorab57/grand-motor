import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

const MotionDiv = motion.div;

const FeatureSection = ({ section }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipProgress = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "flex min-h-screen items-center justify-center gap-10 px-4 py-16 md:px-8 lg:gap-24 lg:px-16",
        section.reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        "flex-col"
      )}
    >
      <MotionDiv style={{ y: translateContent }} className="w-full max-w-xl">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
          {section.eyebrow}
        </p> */}
        <h2 className="mt-5 text-4xl  leading-tight text-white md:text-6xl">
          {section.title}
          
        </h2>
        <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
          {section.description}
        </p>
        {section.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {section.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </MotionDiv>

      <MotionDiv
        style={{
          opacity: opacityContent,
          clipPath: clipProgress,
        }}
        className="relative w-full max-w-xl"
      >
        <div className="absolute -inset-6 rounded-[2.5rem] bg-red-500/10 blur-3xl" />
        <div className="relative overflow-hidden rounded border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <img
            src={section.imageUrl}
            className="h-[420px] w-full object-cover md:h-[520px]"
            alt={section.title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            {section.badge}
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export const Component = ({ sections, intro, ending }) => {
  const featureSections = sections ?? [];

  return (
    <div className="bg-[#242424] ">
    

      <div className="flex flex-col">
        {featureSections.map((section) => (
          <FeatureSection key={section.id} section={section} />
        ))}
      </div>

     
    </div>
  );
};
