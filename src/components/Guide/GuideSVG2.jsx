import React from "react";
// import mouse_icon from "../../assets/icons/mouse_icon.png";
// import hand_icon from "../../assets/icons/hand_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { hideGuideSVG2 } from "../../redux/features/GuideSlice";

const GuideSVG2 = () => {
  const dispatch = useDispatch();
  const guide = useSelector((state) => state.guide.guideSVG2);

  return (
    <section
      className={`${guide ? "block" : "hidden"
        } w-full h-full z-[90] absolute bg-black/80`}
    >
      <div className="w-[90%] md:w-[520px] h-[300px] md:h-[400px] xl:w-[580px] xl:h-[450px] p-5 md:p-8 xl:p-10 flex flex-col justify-center items-center gap-5 md:gap-10 bg-(--sub) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl md:text-2xl xl:text-3xl text-(--primary) text-center uppercase">
          hướng dẫn thao tác
        </h1>
        <div className="flex w-full justify-center items-center gap-5">
          <img
            className="w-16 h-16 xl:w-20 xl:h-20 object-contain"
            src="#"
            alt="hand_icon"
          />
          <p className="text-white text-sm md:text-base">hoặc</p>
          <img
            className="w-16 h-16 xl:w-20 xl:h-20 object-contain"
            src="#"
            alt="mouse_icon"
          />
        </div>
        <p className="text-white text-sm md:text-xl px-10 md:px-16 text-center">
          Chạm, và click vào từng tiện ích ở danh sách để xem chi tiết!
        </p>
        <button
          className="bg-(--primary) rounded-md w-max px-16 md:px-20 py-3 md:py-5 shadow-xl hover:shadow-slate-50/20"
          onClick={() => dispatch(hideGuideSVG2())}
        >
          <p className="font-medium text-(--sub) text-sm md:text-base">Đã hiểu</p>
        </button>
      </div>
    </section>
  );
};

export default GuideSVG2;
