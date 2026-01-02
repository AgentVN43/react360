import { useState } from "react";
import PopUpImage from "../../components/PopUpImage";
import layout_1pn_1wc from "../../assets/images/layout/1pn_1wc.png";
import layout_1pn_1wc_2 from "../../assets/images/layout/1pn_1wc_2.png";
import layout_2pn_1wc from "../../assets/images/layout/2pn_1wc.png";
import layout_2pn_2wc from "../../assets/images/layout/2pn_2wc.png";
import layout_2pn_2wc_2 from "../../assets/images/layout/2pn_2wc_2.png";
import layout_3pn_2wc from "../../assets/images/layout/3pn_2wc.png";
import layout_canhorisa from "../../assets/images/layout/canhorisa.jpg";
import SideTools from "../../components/SideTools";

const GalleryImgList = [
  {
    title: "Căn hộ Risa",
    img: layout_canhorisa,
  },
  {
    title: "1PN",
    img: layout_1pn_1wc_2,
  },
  {
    title: "2PN 1WC",
    img: layout_2pn_1wc,
  },
  {
    title: "2PN 2WC (CĂN LOFT)",
    img: layout_2pn_2wc,
  },
  {
    title: "2PN 2WC",
    img: layout_2pn_2wc_2,
  },
  {
    title: "3PN",
    img: layout_3pn_2wc,
  },
];

const LayoutHouse = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [currentImage, setCurrentSlide] = useState(0);

  const handleSetActiveGalleryIndex = (id) => {
    setIsShowPopUp(true);
    setCurrentSlide(id);
  };

  return (
    <section className="min-h-screen relative md:pl-56 md:pr-14">
      <div className="w-full h-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 px-4 pt-36 md:p-4">
        {GalleryImgList.map((item, index) => (
          <div key={index} className="relative w-full h-[300px] group">
            <img
              className="absolute object-cover w-full h-full rounded-lg"
              src={item.img}
              alt="gallery-img"
              loading="lazy"
            />
            <p className="max-w-[90%] w-max group-hover:opacity-0 group-hover:-translate-x-5 translate-x-0 opacity-1 transition-all duration-300 absolute top-[80%] left-5 uppercase rounded-r-full font-semibold bg-sub/80 py-2 px-4 before:border-2  before:border-white before:absolute before:left-0 before:h-full before:top-0">
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
                  className="p-1 px-4 rounded-full border-2 border-sub text-white bg-gradient-to-r from-sub to-sub hover:from-sub hover:to-sub shadow-xl hover:shadow-sub/50 font-semibold"
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
          <PopUpImage
            currentImage={currentImage}
            imagesPopUp={GalleryImgList}
            setIsShowPopUp={setIsShowPopUp}
          />
        </div>
      )}
      <SideTools
        OrtherTools={() => {
          return <></>;
        }}
      />
    </section>
  );
};

export default LayoutHouse;
