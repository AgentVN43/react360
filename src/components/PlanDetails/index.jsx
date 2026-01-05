import React from "react";
import { setActiveHouseSampleView } from "../../redux/features/PlanSlice";
import { useDispatch } from "react-redux";

// import check from "../../assets/icons/check.png";
import next_icon from "../../assets/icons/next_icon.png";
import back_icon2 from "../../assets/icons/back_icon2.png";
// import circle_alert from "../../assets/icons/circle-alert_black.png";
import laban from "../../assets/images/location/laban.png";
import dinhviBlock from "../../assets/images/plan/dinh_vi_block.png";

const PlanDetails = ({
  setisVisibleProductDetail,
  apartmentLayoutItem,
  pathSelectedData,
  setPathSelectedData,
  block,
}) => {
  const dispatch = useDispatch();

  const handleBackToPlan = () => {
    setisVisibleProductDetail(false);
    setPathSelectedData(null);
  };

  const handleActiveHouseSampleView = () => {
    dispatch(setActiveHouseSampleView(true));
  };
  return (
    <section className="hidden md:block w-full h-full fixed top-0 left-0 z-40 bg-[#faffee]">
      <div className="fixed bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 flex h-20 w-2/3 z-10">
        <img
          src={dinhviBlock}
          alt="dinhviBlock"
          className="w-full h-full object-contain"
        />
        <img src={laban} alt="laban" className="w-full h-full object-contain" />
      </div>
      {/* menu */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 max-h-[420px] 
      h-auto overflow-auto bg-white/60 backdrop-blur-md border border-white/10 shadow-lg rounded-t-md space-y-2 z-40"
      >
        <h1 className="text-sub uppercase text-base text-center font-bold pt-3">
          Căn Hộ {pathSelectedData.code}
        </h1>
        <ul className="w-full h-full p-2 pt-0">
          <li className="p-1">
            <span className="text-xs text-black">
              {apartmentLayoutItem.br} PN - {apartmentLayoutItem.wc} WC
            </span>
          </li>
          <li className="p-1">
            <span className="text-black text-xs w-full">
              <span className="text-xs">Diện tích tim tường:</span>{" "}
              {pathSelectedData.nfa} m²
            </span>
          </li>

          <li className="p-1">
            <span className="text-black text-xs">
              <span className="text-xs">Diện tích thông thủy:</span>{" "}
              {pathSelectedData.nsa} m²
            </span>
          </li>
          {/* <li className="p-1">
            <span className="text-black text-xs">
              <span className="text-xs">Hướng ban công:</span>{" "}
              Đông
            </span>
          </li> */}

          {/* <li className="p-1">
          <img
            src={check}
            alt="check"
            className="w-5 h-5 object-contain"
          />
          <span className="text-xs text-black">
            Hướng ban công: Đông
          </span>
        </li> */}
        </ul>

        <button
          className={` ${apartmentLayoutItem?.frameUrl ? "flex" : "hidden"
            } w-full bg-sub justify-center items-center hover:opacity-80`}
          onClick={() => handleActiveHouseSampleView()}
        >
          <p className="px-1 text-white text-xs">Xem VR 360</p>
          <img
            src={next_icon}
            alt="next_icon"
            className="px-1 w-8 h-8 object-contain"
          />
        </button>
      </div>

      {/* layout vị trí căn */}
      {/* <div className="absolute top-[650px] left-4 w-60 max-h-[420px] h-auto overflow-auto  p-3 space-y-2 z-40 flex flex-col justify-center items-center">
      <p>Tầng 26</p>
      <img src={demo1} alt="demo1" className="object-contain w-60 h-20" />
    </div> */}

      {/* Back */}
      <button
        className="absolute top-[20px] left-64 p-2 px-3 flex justify-center items-center text-center z-20 rounded-full bg-sub border border-white 
        cursor-pointer hover:opacity-80"
        onClick={() => handleBackToPlan()}
      >
        <img
          src={back_icon2}
          alt="back_icon"
          className="w-8 h-3 object-contain cursor-pointer"
        />
        <p className="text-white text-sm">Trở lại</p>
      </button>

      {/* Ảnh layout */}
      <div className="w-2/3 h-full p-0 sm:p-0 md:p-0 absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <img
          src={apartmentLayoutItem.LayoutImg}
          alt="LayoutImg"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default PlanDetails;
