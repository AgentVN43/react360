import { useState } from "react";
import PopUpImage from "../components/PopUpImage";
import PopUpImageUtil from "./PopUpImageUtil";

const ImagesUtil = ({ block, floor, isMobile }) => {
  // const countImage = floor === 1 ? 11 : 4;
  // const pathImage = floor === 1 ? "tang_1" : "tang_3";

  // const GalleryImgList = Array.from({ length: countImage }, (_, i) => ({
  //   img: `/images/${pathImage}/${i + 1}.jpg`,
  // }));

  const GalleryImgList_ZN_1 = [
    {
      title: "Đại sảnh Zenia",
      img: "/images/zenia/tang_1/1.jpg",
    },
    {
      title: "Không gian sảnh Zenia",
      img: "/images/zenia/tang_1/2.jpg",
    },
    {
      title: "Không gian sảnh Zenia",
      img: "/images/zenia/tang_1/3.jpg",
    },
    {
      title: "Không gian sảnh Zenia",
      img: "/images/zenia/tang_1/4.jpg",
    },
    {
      title: "Khu thư tín Zenia",
      img: "/images/zenia/tang_1/5.jpg",
    },
    {
      title: "Khu thư tín Zenia",
      img: "/images/zenia/tang_1/6.jpg",
    },
    {
      title: "Sảnh thang máy Zenia",
      img: "/images/zenia/tang_1/7.jpg",
    },
    {
      title: "Sảnh thang máy Zenia",
      img: "/images/zenia/tang_1/8.jpg",
    },
    {
      title: "Ghế massage Zenia",
      img: "/images/zenia/tang_1/9.jpg",
    },
    {
      title: "Phòng trị liệu âm thanh Zenia",
      img: "/images/zenia/tang_1/10.jpg",
    },
  ];

  const GalleryImgList_ZN_3 = [
    {
      title: "Sảnh kết nối - Zenia",
      img: "/images/zenia/tang_3/1.jpg",
    },
    {
      title: "Không gian SHCĐ - Zenia",
      img: "/images/zenia/tang_3/2.jpg",
    },
    {
      title: "Phòng dưỡng lành theo nhóm - Zenia",
      img: "/images/zenia/tang_3/3.jpg",
    },
    {
      title: "Không gian đa năng - Zenia",
      img: "/images/zenia/tang_3/4.jpg",
    },
  ];

  const GalleryImgList_RS_1 = [
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/1.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/2.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/3.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/4.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/5.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/6.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/7.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/8.jpg",
    },
    {
      title: "Tiện ích Risa tầng 1",
      img: "/images/risa/tang_1/9.jpg",
    },
  ];

  const GalleryImgList_RS_3 = [
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/1.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/2.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/3.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/4.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/5.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/6.jpg",
    },
    {
      title: "Tiện ích Risa tầng 3",
      img: "/images/risa/tang_3/7.jpg",
    },
  ];

  const gallery = [
    {
      block: "zenia",
      g1: GalleryImgList_ZN_1,
      g3: GalleryImgList_ZN_3,
    },
    {
      block: "risa",
      g1: GalleryImgList_RS_1,
      g3: GalleryImgList_RS_3,
    },
  ];

  const GalleryImgList = gallery.find(
    (item) => item.block === block.toLowerCase()
  )[`g${floor}`];

  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [currentImage, setCurrentSlide] = useState(0);

  const handleSetActiveGalleryIndex = (id) => {
    setIsShowPopUp(true);
    setCurrentSlide(id);
  };

  return (
    <section
      className={`min-h-screen relative md:pl-56 md:pr-14 ${isMobile ? "" : "z-40"}`}
    >
      <div className="w-full h-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 px-4 pt-36 md:p-4">
        {GalleryImgList.map((item, index) => (
          <div key={index} className="relative w-full h-[300px] group">
            <img
              className="absolute object-cover w-full h-full rounded-lg"
              src={item.img}
              alt="gallery-img"
              loading="lazy"
            />
            <p className="max-w-[90%] w-max group-hover:opacity-0 group-hover:-translate-x-5 translate-x-0 opacity-1 transition-all duration-300 absolute top-[80%] left-5 uppercase rounded-r-full font-semibold bg-(--sub)/80 py-2 px-4 before:border-2  before:border-white before:absolute before:left-0 before:h-full before:top-0">
              <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent text-xs md:text-sm font-bold">
                {item.title}
              </span>
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="flex flex-col justify-center items-center text-center px-8 gap-5">
                <h4 className="uppercase font-bold text-2xl bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  {item.title}
                </h4>
                <button
                  className="p-1 px-4 rounded-full border-2 border-(--sub) text-white bg-gradient-to-r from-(--sub) to-(--sub) hover:from-(--sub) hover:to-(--sub) shadow-xl hover:shadow-(--sub)/50 font-semibold"
                  onClick={() => handleSetActiveGalleryIndex(index)}
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isShowPopUp && (
        <div
          className="w-full h-screen flex justify-center items-center bg-slate-800/80 fixed top-0 left-0 z-[56]"
          onClick={() => setIsShowPopUp(false)}
        >
          <PopUpImageUtil
            currentImage={currentImage}
            imagesPopUp={GalleryImgList}
            setIsShowPopUp={setIsShowPopUp}
          />
        </div>
      )}
    </section>
  );
};

export default ImagesUtil;
