import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopUpImage = ({ currentImage, imagesPopUp, setIsShowPopUp }) => {
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
              className={`absolute flex items-center justify-center w-full h-full inset-0 transition-opacity duration-500 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="w-[80%] md:w-full md:h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* <div
              className={`${
                index === currentSlide ? "block" : "hidden"
              } absolute -bottom-3 md:bottom-0 left-0 right-0
            pt-12 pb-4 sm:pt-16 sm:pb-6 px-3 sm:px-6`}
            >
              <h3 className="text-sub text-base sm:text-lg md:text-2xl font-bold text-center">
                {item.title}
              </h3>
            </div> */}
          </>
        ))}

        <button
          onClick={handlePrevious}
          className="absolute md:fixed left-1 md:left-12 top-1/2 -translate-y-1/2 p-2 rounded-full 
          md:hover:bg-sub md:hover:text-white bg-sub text-white md:text-slate-800 md:bg-white border-none"
        >
          <ChevronLeft size={24} className="hidden md:block" />
          <ChevronLeft size={14} className="md:hidden block" />
        </button>
        <button
          onClick={handleNext}
          className="absolute md:fixed right-1 md:right-12 top-1/2 -translate-y-1/2 p-2 rounded-full 
          md:hover:bg-sub md:hover:text-white bg-sub text-white md:text-slate-800 md:bg-white border-none"
        >
          <ChevronRight size={24} className="hidden md:block" />
          <ChevronRight size={14} className="md:hidden block" />
        </button>

        <div className="absolute top-2 right-1/2 translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {imagesPopUp.length}
        </div>

        {/* Close btn */}
        <div
          className="absolute top-2 right-2 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-white
          rounded-full cursor-pointer text-sub hover:bg-sub hover:text-white"
          onClick={() => setIsShowPopUp(false)}
          onTouchStart={() => setIsShowPopUp(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>

      <div className="relative w-full overflow-hidden hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2 items-center justify-center">
            {getVisibleThumbnails().map((item, index) => {
              const actualIndex = imagesPopUp.indexOf(item);
              return (
                <img
                  key={actualIndex}
                  onClick={() => setCurrentSlide(actualIndex)}
                  className={`w-24 md:w-32 ${actualIndex === currentSlide
                      ? "opacity-100 border-2 border-sub"
                      : "opacity-60 border-2 border-transparent"
                    } rounded-lg p-0 cursor-pointer`}
                  src={item.img}
                  alt={`Thumbnail ${actualIndex + 1}`}
                />
              );
            })}
          </div>

          {/* <div className="flex gap-2 justify-center">
            {Array.from({ length: totalGroups }, (_, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i * 7)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentGroup === i
                    ? "bg-sub w-[1.5rem]"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to group ${i + 1}`}
              ></div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopUpImage;
