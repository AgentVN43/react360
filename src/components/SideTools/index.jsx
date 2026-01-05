import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import iconHamburger from "../../assets/icons/hamburger.png";
import iconFS from "../../assets/icons/iconFS.png";
import iconWeb from "../../assets/icons/icon_web.png";
import iconGGMap from "../../assets/icons/icon_ggmap.png";
import iconEbook from "../../assets/icons/icon_ebook.png";

export default function SideTools({ OrtherTools }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOpenEBook, setIsOpenEBook] = useState(false);
  const [isOpenGGMap, setIsOpenGGMap] = useState(false);
  const [isOpenWeb, setIsOpenWeb] = useState(false);

  const [showSideTool, setShowSideTool] = useState(true);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.error(`Failed to enter fullscreen mode: ${err.message}`);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.error(`Failed to exit fullscreen mode: ${err.message}`);
        });
    }
  };

  const responsiveState = useSelector((state) => state.responsive);
  const { isMobile } = responsiveState;

  useEffect(() => {
    if (isMobile) {
      setShowSideTool(false);
    }
  }, [isMobile]);
  return (
    <>
      <div className="fixed z-[55] right-2 md:right-4 top-4 flex flex-col gap-2">
        <button
          className={`w-10 h-10 cursor-pointer hover:bg-(--sub) flex flex-col justify-center items-center rounded-md transition-colors ${showSideTool ? "bg-(--sub)" : "bg-opacity-60 bg-(--sub)"
            }`}
          onClick={() => setShowSideTool(!showSideTool)}
        >
          <img
            src={iconHamburger}
            alt="fullscreen_icon"
            className="w-5 h-5 object-contain"
          />
        </button>
        {showSideTool && (
          <>
            {/* Mở/Tắt Toàn Màn Hình */}
            <button
              className={`w-10 h-10 cursor-pointer hover:bg-(--sub) hidden md:flex flex-col justify-center items-center rounded-md transition-colors ${isFullscreen ? "bg-(--sub)" : "bg-(--sub)/60"
                }`}
              onClick={() => toggleFullscreen()}
            >
              <img
                src={iconFS}
                alt="fullscreen_icon"
                className="w-5 h-5 object-contain"
              />
            </button>
            {/* Mở Website */}
            <button
              className="w-10 h-10 cursor-pointer bg-(--sub)/60 hover:bg-opacity-100 hover:bg-(--sub) flex flex-col justify-center items-center rounded-md transition-colors"
              onClick={() => window.open("https://lapura.vn", "_blank")}
            >
              <img
                src={iconWeb}
                alt="web_icon"
                className="w-5 h-5 object-contain"
              />
            </button>
            {/* Mở Google Map */}
            <button
              className="w-10 h-10 cursor-pointer bg-(--sub)/60 hover:bg-opacity-100 hover:bg-(--sub) flex flex-col justify-center items-center rounded-md transition-colors"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/ShWz9xPYozKLc9Vr7",
                  "_blank"
                )
              }
            >
              <img
                src={iconGGMap}
                alt="web_icon"
                className="w-5 h-5 object-contain"
              />
            </button>
            {/* Mở Ebook */}
            <button
              className={`w-10 h-10 cursor-pointer bg-(--sub)/60 hover:bg-(--sub) flex flex-col justify-center items-center rounded-md`}
              onClick={() => {
                setIsOpenEBook(true);
              }}
            >
              <img
                src={iconEbook}
                alt="web_icon"
                className="w-5 h-5 object-contain"
              />
            </button>
          </>
        )}

        {OrtherTools && <OrtherTools />}
        {isOpenEBook && <PopUpEBook setShowEBrochure={setIsOpenEBook} />}
        {isOpenGGMap && <PopUpGGMap setShowPopUp={setIsOpenGGMap} />}
        {isOpenWeb && (
          <PopUpWeb setShowPopUp={setIsOpenWeb} url="https://3dscanning.vn" />
        )}
      </div>
    </>
  );
}
