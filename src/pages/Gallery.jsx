import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Play, X } from "lucide-react";
import BgImage from "../components/ui/BgImage";

const galleryItems = [
  { src: "/videos/byd_sedan6.mp4", title: "BYD Sedan Signature", category: "Video", mediaType: "video" },
  { src: "/assets/images/cars/avalon.JPG", title: "Toyota Avalon", category: "Sedan", mediaType: "image" },
  { src: "/videos/byd_suv1.mp4", title: "BYD SUV One", category: "Video", mediaType: "video" },
  { src: "/assets/images/cars/benz.JPG", title: "Mercedes-Benz", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/benz2.JPG", title: "Mercedes Collection", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/benz_spi.JPG", title: "Mercedes Sport", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/bmw.jpg", title: "BMW Series", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/centra.jpg", title: "Nissan Sentra", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/chery.jpg", title: "Chery", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/corola.JPG", title: "Toyota Corolla", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/defender.jpg", title: "Land Rover Defender", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/elentra.JPG", title: "Hyundai Elantra", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/gclass.JPG", title: "Mercedes G-Class", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/gli.jpg", title: "Volkswagen GLI", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/gmc.JPG", title: "GMC", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/landcrus.jpg", title: "Toyota Land Cruiser", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/landcrus3.JPG", title: "Land Cruiser Signature", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/landcurs2.JPG", title: "Land Cruiser Edition", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/lexus_sidan.JPG", title: "Lexus Sedan", category: "Sedan", mediaType: "image" },
  { src: "/assets/images/cars/range.JPG", title: "Range Rover", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/roge.JPG", title: "Nissan Rogue", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/t_rav.JPG", title: "Toyota RAV4", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/t_rav2.jpg", title: "RAV4 Adventure", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/t_rav3.jpg", title: "RAV4 Premium", category: "SUV", mediaType: "image" },
  { src: "/assets/images/cars/t_rav_rash.jpg", title: "RAV4 Rush", category: "SUV", mediaType: "image" },
  { src: "/videos/byd_sedan3.mp4", title: "BYD Sedan Edition", category: "Video", mediaType: "video" },
  { src: "/videos/byd_sedan4.mp4", title: "BYD Sedan Premium", category: "Video", mediaType: "video" },
  { src: "/assets/images/cars/taho.JPG", title: "Chevrolet Tahoe", category: "SUV", mediaType: "image" },
  { src: "/videos/byd2.MP4", title: "BYD Motion", category: "Video", mediaType: "video" },
  { src: "/videos/nissan-patrol1.mp4", title: "Nissan Patrol", category: "Video", mediaType: "video" },
  { src: "/videos/byd_sedan.mp4", title: "BYD Sedan", category: "Video", mediaType: "video" },
  { src: "/videos/byd_sedan2.mp4", title: "BYD Sedan Drive", category: "Video", mediaType: "video" },
  { src: "/videos/byd_sedan5.mp4", title: "BYD Sedan Signature", category: "Video", mediaType: "video" },
  { src: "/videos/byd_suv2.mp4", title: "BYD SUV Two", category: "Video", mediaType: "video" },
  { src: "/videos/byd_suv3.mp4", title: "BYD SUV Three", category: "Video", mediaType: "video" },
  { src: "/videos/byd_suv4.mp4", title: "BYD SUV Four", category: "Video", mediaType: "video" },
  { src: "/videos/byd_suv5.mp4", title: "BYD SUV Five", category: "Video", mediaType: "video" },
];

const filters = ["All", "SUV", "Sedan", "Video"];

const GalleryMedia = ({ item, className = "", isModal = false }) => {
  const mediaRef = useRef(null);
  const [isNearView, setIsNearView] = useState(isModal);

  useEffect(() => {
    if (isModal || item.mediaType !== "video" || !mediaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px",
        threshold: 0.15,
      }
    );

    observer.observe(mediaRef.current);

    return () => observer.disconnect();
  }, [isModal, item.mediaType]);

  if (item.mediaType === "video") {
    return (
      <div
        ref={mediaRef}
        className={`relative ${isModal ? "flex items-center justify-center bg-black" : ""} ${className}`}
      >
        {isNearView ? (
          <video
            src={item.src}
            className={isModal ? "max-h-[75vh] w-full object-contain bg-black" : "h-full w-full object-cover"}
            autoPlay
            muted
            loop
            playsInline
            preload={isModal ? "metadata" : "none"}
            controls={isModal}
          />
        ) : (
          <div className="flex h-full min-h-[22rem] w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_rgba(15,23,42,0.95))]">
            <div className="flex flex-col items-center gap-4 text-white">
              <span className="rounded-full border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <Play className="h-7 w-7 fill-current" />
              </span>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-200">
                Video Preview
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      ref={mediaRef}
      src={item.src}
      alt={item.title}
      loading="lazy"
      className={className}
    />
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % filteredItems.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? filteredItems.length - 1 : current - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredItems.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % filteredItems.length);
  };

  return (
    <>
     
     
      <section className="min-h-screen bg-[#0b0f19] pb-20  text-white">
        <BgImage src="/assets/images/bg/hero.jpg" color={true} alt="Grand Motors Showroom" />
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl border px-5 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "border-blue-400 bg-blue-500/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => (
              <article
                key={item.src}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="relative block w-full text-left"
                >
                  <GalleryMedia
                    item={item}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/25 p-3 backdrop-blur-sm transition group-hover:scale-110">
                    {item.mediaType === "video" ? (
                      <Play className="h-4 w-4 fill-current text-white" />
                    ) : (
                      <Expand className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
                      {item.category}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 px-4 py-10">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="mx-auto w-full  max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f19] shadow-2xl shadow-black/50">
            <GalleryMedia
              item={selectedItem}
              isModal
              className="max-h-[75vh] w-full object-cover object-bottom"
            />
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  {selectedItem.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {selectedItem.title}
                </h3>
              </div>
              <p className="text-sm text-slate-400">
                {selectedIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
