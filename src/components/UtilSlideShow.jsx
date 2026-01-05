import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { plan_filter } from "../data/data";

export default function UtilSlideShow({
  currentMedia,
  selectedFloor,
  selectedUtilFilter,
  setCurrentMedia,
  block,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  console.log("currentMedia", currentMedia);
  const mediaItems = plan_filter[selectedFloor].itemsUtilFilter[
    selectedUtilFilter
  ].items.filter((item) => item.isMedia === true);

  const src =
    selectedUtilFilter === 0
      ? "tret"
      : selectedUtilFilter === 3
        ? "tang20"
        : selectedUtilFilter === 4
          ? "mai"
          : "tang3";

  const mediaUrls = mediaItems.map((item) => {
    const basePath = item.type === "video" ? "/video" : "/images";
    const extension = item.type === "video" ? "mp4" : "jpg";
    const blockPath = selectedUtilFilter === 0 ? "zenia" : block;
    return {
      id: item.id,
      url: `${basePath}/${blockPath}/${src}_${item.id}.${extension}`,
      title: item.label,
      type: item.type,
    };
  });

  useEffect(() => {
    const index = mediaUrls.findIndex((item) => item.id === currentMedia.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaUrls.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaUrls.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Thêm sự kiện bàn phím để điều hướng
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;

      if (e.key === "ArrowLeft") {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? mediaUrls.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (e.key === "ArrowRight") {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === mediaUrls.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mediaUrls.length, isTransitioning]);

  return (
    <div
      className="fixed z-[100] top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center"
      onClick={() => setCurrentMedia(null)}
    >
      {/* Slideshow Content */}
      <div
        className="relative bg-gradient-to-b from-gray-900 to-black rounded-lg w-full md:w-[90%] lg:w-[80%] xl:w-[68%] h-[45%] sm:h-[70%] md:h-[80%] mx-2 sm:mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          {/* Main Image/Video */}
          <div className={`absolute inset-0 flex items-center justify-center`}>
            {mediaUrls[currentIndex].type === "images" ? (
              <img
                src={mediaUrls[currentIndex].url}
                alt={mediaUrls[currentIndex].title}
                className="w-full h-full object-cover shadow-lg"
              />
            ) : (
              <video
                src={mediaUrls[currentIndex].url}
                controls={false}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute top-2 right-1/2 translate-x-1/2 bg-sub text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {mediaUrls.length}
          </div>
          {/* Close btn */}
          <div
            className="absolute top-2 right-2 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-white
          rounded-full cursor-pointer text-sub hover:bg-sub hover:text-white"
            onClick={() => setCurrentMedia(null)}
            onTouchStart={() => setCurrentMedia(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>

          {/* Image Title with Gradient - Responsive text size */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-12 pb-4 sm:pt-16 sm:pb-6 px-3 sm:px-6">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
              {mediaUrls[currentIndex].title}
            </h3>
          </div>

          {/* Navigation Buttons - Responsive sizing */}
          {/* <button
          className="absolute left-2 md:left-7 lg:fixed lg:left-[10%] bg-sub bg-opacity-40 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full transform transition-all duration-300 hover:scale-110 ring-2 ring-primary"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:hidden" />
          <ChevronLeft size={28} className="hidden sm:block" />
        </button> */}

          <button
            onClick={handlePrev}
            className="absolute md:fixed left-2 md:left-12 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-sub hover:text-white bg-white border-none"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute md:fixed right-2 md:right-12 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-sub hover:text-white bg-white border-none"
          >
            <ChevronRight size={24} />
          </button>

          {/* <button
          className="absolute right-2 md:right-7 lg:fixed lg:right-[10%] bg-sub bg-opacity-40 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full transform transition-all duration-300 hover:scale-110 ring-2 ring-primary"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:hidden" />
          <ChevronRight size={28} className="hidden sm:block" />
        </button> */}
        </div>
      </div>
    </div>
  );
}
