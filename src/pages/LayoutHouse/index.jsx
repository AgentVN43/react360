import { useState } from "react";
import layout_1pn_1wc_2 from "../../assets/images/layout/1pn_1wc_2.png";
import layout_2pn_1wc from "../../assets/images/layout/2pn_1wc.png";
import layout_2pn_2wc from "../../assets/images/layout/2pn_2wc.png";
import layout_2pn_2wc_2 from "../../assets/images/layout/2pn_2wc_2.png";
import layout_3pn_2wc from "../../assets/images/layout/3pn_2wc.png";
import layout_canhorisa from "../../assets/images/layout/canhorisa.jpg";
import PopUpImage from "../../components/PopUpImage";
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
          <div key={index} className="relative w-full h-75 group">
            <img
              className="absolute object-cover w-full h-full rounded-lg"
              src={item.img}
              alt="gallery-img"
              loading="lazy"
            />
            <p className="max-w-[90%] w-max group-hover:opacity-0 group-hover:-translate-x-5 opacity-100 transition-all duration-300 absolute top-[80%] left-5 uppercase rounded-r-full font-semibold py-2 px-4 before:absolute before:left-0 before:top-0 before:h-full before:border-2 before:border-white bg-[color-mix(in_srgb,var(--sub)_80%,transparent)]">
              <span className="text-xs md:text-sm font-bold text-transparent bg-gradient-to-r from-white via-white to-white bg-clip-text">
                {item.title}
              </span>
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex flex-col items-center justify-center gap-5 px-8 text-center">
                <h4 className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-2xl font-bold uppercase text-transparent">
                  {item.title}
                </h4>
                <button
                  className="rounded-full border-2 border-[var(--sub)] bg-gradient-to-r from-[var(--sub)] to-[var(--sub)] px-4 p-1 font-semibold text-white shadow-xl hover:from-[var(--sub)] hover:to-[var(--sub)] hover:shadow-[0_0_20px_var(--sub)]"
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
          className="w-full h-screen flex justify-center items-center bg-slate-800/80 fixed top-0 left-0 z-56"
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
