import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopUpImageUtil = ({ currentImage, imagesPopUp, setIsShowPopUp }) => {
  const [currentSlide, setCurrentSlide] = useState(currentImage);
  // const imagesPopUp = GalleryImgList.map((item) => item.img);
  // console.log("imagesPopUp", imagesPopUp);
  const getVisibleThumbnails = () => {
    let start = currentSlide - 3;
    let end = currentSlide + 3;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    if (end > imagesPopUp.length - 1) {
      start -= end - (imagesPopUp.length - 1);
      end = imagesPopUp.length - 1;
    }

    if (start < 0) start = 0;
    if (end > imagesPopUp.length - 1) end = imagesPopUp.length - 1;

    return imagesPopUp.slice(start, end + 1);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? imagesPopUp.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === imagesPopUp.length - 1 ? 0 : prev + 1));
  };

  // const currentGroup = Math.floor(currentSlide / 7);
  // const totalGroups = Math.ceil(imagesPopUp.length / 7);

  return (
    <div
      className="w-full md:w-[65%] mx-auto px-2 py-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative aspect-video mb-6 bg-[#faffee] rounded-xl overflow-hidden">
        {imagesPopUp.map((item, index) => (
          <>
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className={`${index === currentSlide ? "block" : "hidden"
                } absolute -bottom-3 md:bottom-0 left-0 right-0
            pt-12 pb-4 sm:pt-16 sm:pb-6 px-3 sm:px-6 bg-gradient-to-t from-black to-transparent`}
            >
              <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold text-center">
                {item.title}
              </h3>
            </div>
          </>
        ))}

        <button
          onClick={handlePrevious}
          className="absolute md:fixed left-2 md:left-12 top-1/2 -translate-y-1/2 p-2 rounded-full 
          md:hover:bg-(--sub) md:hover:text-white bg-(--sub) text-white md:text-slate-800 md:bg-white border-none"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute md:fixed right-2 md:right-12 top-1/2 -translate-y-1/2 p-2 rounded-full 
          md:hover:bg-(--sub) md:hover:text-white bg-(--sub) text-white md:text-slate-800 md:bg-white border-none"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute top-2 right-1/2 translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {imagesPopUp.length}
        </div>

        {/* Close btn */}
        <div
          className="absolute top-2 right-2 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-white
          rounded-full cursor-pointer text-(--sub) hover:bg-(--sub) hover:text-white"
          onClick={() => setIsShowPopUp(false)}
          onTouchStart={() => setIsShowPopUp(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default PopUpImageUtil;
