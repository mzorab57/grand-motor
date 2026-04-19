import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const fallbackPages = [
  {
    id: "welcome",
    leftBgImage: "/assets/images/service1.jpg",
    rightBgImage: null,
    leftContent: {
      eyebrow: "Grand Group",
      heading: "Integrated automotive solutions.",
      description:
        "From sales and shipping to rental services, Grand Group delivers a complete mobility ecosystem in Iraq.",
      tags: ["Trading", "Rental", "Transportation"],
    },
    rightContent: {
      eyebrow: "Scroll Experience",
      heading: "Built for smooth storytelling.",
      description:
        "Use your mouse wheel or arrow keys to move through each service and discover the strength of every division.",
      tags: ["Immersive", "Interactive", "Responsive"],
    },
  },
];

const ContentBlock = ({ content, align = "left" }) => {
  if (!content) return null;

  return (
    <div
      className={`relative z-10 max-w-xl rounded-[2rem] border border-white/10 bg-black/35 p-6 text-white backdrop-blur-md md:p-8 ${
        align === "right" ? "md:ml-auto" : ""
      }`}
    >
      {content.eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
          {content.eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
        {content.heading}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-200 md:text-lg">
        {content.description}
      </p>
      {content.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AnimatedScroll({
  pages = fallbackPages,
  className = "",
  title = "Scroll Adventure",
}) {
  const safePages = useMemo(
    () => (Array.isArray(pages) && pages.length > 0 ? pages : fallbackPages),
    [pages]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const numOfPages = safePages.length;
  const animTime = 1000;
  const scrolling = useRef(false);
  const rootRef = useRef(null);

  const navigateUp = useCallback(() => {
    setCurrentPage((page) => (page > 1 ? page - 1 : page));
  }, []);

  const navigateDown = useCallback(() => {
    setCurrentPage((page) => (page < numOfPages ? page + 1 : page));
  }, [numOfPages]);

  useEffect(() => {
    if (!rootRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(rootRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!isInView || scrolling.current) return;

      scrolling.current = true;
      if (event.deltaY > 0) {
        navigateDown();
      } else if (event.deltaY < 0) {
        navigateUp();
      }

      window.setTimeout(() => {
        scrolling.current = false;
      }, animTime);
    };

    const handleKeyDown = (event) => {
      if (!isInView || scrolling.current) return;

      if (event.key === "ArrowUp") {
        scrolling.current = true;
        navigateUp();
      } else if (event.key === "ArrowDown") {
        scrolling.current = true;
        navigateDown();
      } else {
        return;
      }

      window.setTimeout(() => {
        scrolling.current = false;
      }, animTime);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isInView, navigateDown, navigateUp]);

  return (
    <div ref={rootRef} className={`relative h-screen overflow-hidden bg-black ${className}`}>
      <div className="pointer-events-none absolute left-6 top-6 z-30 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md md:left-8 md:top-8">
        {title}
      </div>

      <div className="pointer-events-none absolute right-6 top-6 z-30 flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md md:right-8 md:top-8">
        <ArrowUp className="h-4 w-4" />
        <span>
          {String(currentPage).padStart(2, "0")} / {String(numOfPages).padStart(2, "0")}
        </span>
        <ArrowDown className="h-4 w-4" />
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-200 backdrop-blur-md md:bottom-8">
        Scroll or use arrow keys
      </div>

      {safePages.map((page, index) => {
        const idx = index + 1;
        const isActive = currentPage === idx;
        const upOff = "translateY(-100%)";
        const downOff = "translateY(100%)";
        const leftTrans = isActive ? "translateY(0)" : downOff;
        const rightTrans = isActive ? "translateY(0)" : upOff;

        return (
          <div key={page.id || idx} className="absolute inset-0">
            <div
              className="absolute left-0 top-0 h-1/2 w-full transition-transform duration-[1000ms] md:h-full md:w-1/2"
              style={{ transform: leftTrans }}
            >
              <div
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.leftBgImage
                    ? `linear-gradient(rgba(2,6,23,0.35), rgba(2,6,23,0.55)), url(${page.leftBgImage})`
                    : "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.95))",
                }}
              >
                <div className="flex h-full items-center justify-center p-4 md:p-8">
                  <ContentBlock content={page.leftContent} />
                </div>
              </div>
            </div>

            <div
              className="absolute left-0 top-1/2 h-1/2 w-full transition-transform duration-[1000ms] md:left-1/2 md:top-0 md:h-full md:w-1/2"
              style={{ transform: rightTrans }}
            >
              <div
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.rightBgImage
                    ? `linear-gradient(rgba(15,23,42,0.25), rgba(15,23,42,0.6)), url(${page.rightBgImage})`
                    : "linear-gradient(135deg, rgba(2,6,23,0.98), rgba(127,29,29,0.88))",
                }}
              >
                <div className="flex h-full items-center justify-center p-4 md:p-8">
                  <ContentBlock content={page.rightContent} align="right" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
