import React, { useEffect, useState } from "react";
import { plan_filter } from "../../data/data";
import UtilTret from "./Util_Tret";
import Util20 from "./Util_20";
import UtilMai from "./Util_Mai";
import Util20RS from "./risa/Util_20";
import UtilMaiRS from "./risa/Util_Mai";
import zoominIcon from "../../assets/icons/zoomin.svg";
import zoomoutIcon from "../../assets/icons/zoomout.svg";
// import PopUpMedia from "../PopUpMedia";
import UtilSlideShow from "../UtilSlideShow";
import line from "../../assets/icons/line.svg";
import inout from "../../assets/icons/inout.svg";
import updown from "../../assets/icons/updown.svg";
import park from "../../assets/icons/park.svg";
import wc from "../../assets/icons/wc.svg";
import shower from "../../assets/icons/shower.svg";
import videoIcon from "../../assets/icons/video.svg";
import imageIcon from "../../assets/icons/image.svg";
import videoGuideIcon from "../../assets/icons/vid_icon.svg";
import imageGuideIcon from "../../assets/icons/img_icon.svg";
import pointGuideIcon from "../../assets/icons/nothing_icon.svg";
import ImagesUtil from "../ImagesUtil";

const Util = ({
  activeFilterNumber,
  selectedUtilFilter,
  isMobile,
  isRotation,
  block,
}) => {
  const DEFAULT_SCALE = isRotation ? 2.2 : 1;
  const MAX_SCALE = 3.6;
  //   const currentUtil = plan_filter.find((item) => item.id === 75).itemsUtilFilter[selectedUtilFilter]
  const [hoveredUtilItem, setHoveredUtilItem] = useState(null);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [scale, setScale] = useState(DEFAULT_SCALE);

  useEffect(() => {
    isMobile ? setScale(2.2) : setScale(DEFAULT_SCALE);
  }, [isMobile]);

  return (
    <div
      className={`w-full h-screen bg-[#faffee] ${selectedUtilFilter === 1 || selectedUtilFilter === 2
        ? "overflow-auto"
        : "overflow-hidden"
        } md:overflow-auto`}
    >
      {selectedUtilFilter === 1 || selectedUtilFilter === 2 ? (
        <></>
      ) : (
        <>
          <div className="hidden md:flex gap-3 fixed top-5 right-20 md:right-28 md:top-5 z-50">
            <div
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                if (scale >= MAX_SCALE) {
                  return;
                }
                setScale(Math.round((scale + 0.2) * 10) / 10);
              }}
            >
              <img
                src={zoominIcon}
                alt="zoomin"
                className="w-8 h-8 object-contain cursor-pointer "
              />
            </div>
            <div
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                if (scale <= DEFAULT_SCALE) {
                  return;
                }
                setScale(Math.round((scale - 0.2) * 10) / 10);
              }}
            >
              <img
                src={zoomoutIcon}
                alt="zoomout"
                className="w-8 h-8 object-contain cursor-pointer "
              />
            </div>
          </div>
          <div
            className="
        hidden md:block
        fixed md:right-16 md:top-[90px] w-screen md:w-72 h-screen md:h-auto overflow-auto 
       bg-white/60 backdrop-blur-md border border-white/10 shadow-lg 
        rounded-none md:rounded-md p-4 md:p-2 space-y-4 md:space-y-2 z-[80] md:z-40
        "
          >
            <h1 className="text-center text-2xl text-(--sub) font-1kreey py-2">
              Các tiện ích
            </h1>
            <ul className="mt-2 px-1 overflow-y-auto md:max-h-[70vh] space-y-2">
              {plan_filter
                .find((item) => item.id === activeFilterNumber)
                .itemsUtilFilter[selectedUtilFilter].items.map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`flex justify-start items-center gap-2 text-center hover:cursor-pointer
                   w-full h-8 md:h-7 text-xs rounded-lg 
                   ${item.isMedia
                          ? "text-white bg-(--sub) hover:bg-(--primary) hover:text-(--sub)"
                          : "bg-(--sub)/50 text-white"
                        }
                   pl-2`}
                      onMouseEnter={() => setHoveredUtilItem(item.id)}
                      onMouseLeave={() => setHoveredUtilItem(null)}
                      onClick={() => {
                        console.log("item util", item);
                        item.isMedia && setCurrentMedia(item);
                      }}
                    >
                      <div
                        className="w-[20px] h-[18px] rounded-full bg-white 
                flex justify-center items-center text-(--sub) font-bold"
                      >
                        {item.id}
                      </div>
                      <h4 className="font-medium flex justify-between items-center w-full pr-2">
                        {item.label}
                        {item.isMedia ? (
                          item.type === "video" ? (
                            <img
                              src={videoIcon}
                              alt="videoIcon"
                              className="w-4 h-4 object-contain"
                            />
                          ) : (
                            <img
                              src={imageIcon}
                              alt="imageIcon"
                              className="w-4 h-4 object-contain"
                            />
                          )
                        ) : null}
                      </h4>
                    </li>
                  )
                )}
            </ul>
          </div>
        </>
      )}

      {currentMedia && (
        <UtilSlideShow
          currentMedia={currentMedia}
          selectedFloor={0}
          selectedUtilFilter={selectedUtilFilter}
          setCurrentMedia={setCurrentMedia}
          block={block}
        />
      )}

      {activeFilterNumber === 75 && (
        <>
          {selectedUtilFilter === 0 ? (
            <>
              <UtilTret
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-5 space-y-2 md:space-y-0 md:bottom-2 left-1/2 -translate-x-1/2">
                <div className="flex justify-center items-center w-full">
                  <div className="flex gap-2 items-center md:mb-1">
                    <img src={line} alt="util_image" className="w-8 md:w-10" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đường chạy bộ liên hoàn 1.000m
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 md:gap-10">
                  <div className="flex gap-2 items-center md:mb-1">
                    <img src={inout} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối vào/ ra
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={updown} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối lên/ xuống hầm
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={park}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Bãi đậu xe
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 3 ? (
            <>
              <Util20
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-2 left-1/2 -translate-x-1/2 space-y-2">
                <div
                  className="w-full
      flex gap-5 md:gap-10 justify-center items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={inout}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối ra sân vườn
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={wc} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu WC & Locker
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={shower} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu tắm tráng
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 4 ? (
            <>
              <UtilMai
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-2 left-1/2 -translate-x-1/2 space-y-2">
                <div
                  className="w-full
      flex gap-5 md:gap-10 justify-center items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={inout}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối ra sân vườn
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={wc} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu WC & Locker
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={shower} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu tắm tráng
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 1 ? (
            <div className="md:pt-0">
              <ImagesUtil floor={1} block={block} isMobile={true} />
            </div>
          ) : selectedUtilFilter === 2 ? (
            <div className="md:pt-0">
              <ImagesUtil floor={3} block={block} isMobile={true} />
            </div>
          ) : null}
        </>
      )}
      {activeFilterNumber === 45 && (
        <>
          {selectedUtilFilter === 0 ? (
            <>
              <UtilTret
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-5 space-y-2 md:space-y-0 md:bottom-2 left-1/2 -translate-x-1/2">
                <div className="flex justify-center items-center w-full">
                  <div className="flex gap-2 items-center md:mb-1">
                    <img src={line} alt="util_image" className="w-8 md:w-10" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đường chạy bộ liên hoàn 1.000m
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 md:gap-10">
                  <div className="flex gap-2 items-center md:mb-1">
                    <img src={inout} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối vào/ ra
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={updown} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối lên/ xuống hầm
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={park}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Bãi đậu xe
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 3 ? (
            <>
              <Util20RS
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-2 left-1/2 -translate-x-1/2 space-y-2">
                <div
                  className="w-full
      flex gap-5 md:gap-10 justify-center items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={inout}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối ra sân vườn
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={wc} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu WC & Locker
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={shower} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu tắm tráng
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 4 ? (
            <>
              <UtilMaiRS
                hoveredUtilItem={hoveredUtilItem}
                scale={scale}
                isMobile={isMobile}
                setCurrentMedia={setCurrentMedia}
              />
              {/* Ảnh icon */}
              <div className="w-full h-fit absolute bottom-2 left-1/2 -translate-x-1/2 space-y-2">
                <div
                  className="w-full
      flex gap-5 md:gap-10 justify-center items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={inout}
                      alt="util_image"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Lối ra sân vườn
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={wc} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu WC & Locker
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={shower} alt="util_image" className="w-3 md:w-5" />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Khu tắm tráng
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-5 md:gap-10 justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={imageGuideIcon}
                      alt="imageGuideIcon"
                      className="w-8 md:w-10 px-[10px]"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Hình ảnh
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={videoGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Video
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={pointGuideIcon}
                      alt="util_image"
                      className="w-3 md:w-5"
                    />
                    <span className="text-xs md:text-sm text-(--sub) text-nowrap">
                      Đang cập nhật hình ảnh
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : selectedUtilFilter === 1 ? (
            <div className="md:pt-0">
              <ImagesUtil floor={1} block={block} isMobile={true} />
            </div>
          ) : selectedUtilFilter === 2 ? (
            <div className="md:pt-0">
              <ImagesUtil floor={3} block={block} isMobile={true} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Util;
