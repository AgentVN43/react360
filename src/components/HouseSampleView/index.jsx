import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showGuide } from "../../redux/features/GuideSlice";
import back_icon2 from "../../assets/icons/back_icon2.png";
import { setActiveHouseSampleView } from "../../redux/features/PlanSlice";

const HouseSampleView = ({ apartmentLayoutItem }) => {
  const dispatch = useDispatch();

  const handleBackToPlan = () => {
    dispatch(setActiveHouseSampleView(false));
  };

  useEffect(() => {
    dispatch(showGuide());
  }, [dispatch]);

  return (
    <section
      className={`
      HouseSampleView_wrapper absolute top-0 left-0 w-full h-full z-50 md:z-40`}
    >
      {/* Frame */}
      <iframe
        src={apartmentLayoutItem?.frameUrl}
        title="HouseSampleView"
        className="w-full h-full"
      />

      {/* Back */}
      <button
        className="absolute top-5 left-5 md:left-64 p-2 flex justify-center items-center text-center z-20 rounded-full bg-(--sub) border border-white"
        onClick={() => handleBackToPlan()}
      >
        <img
          src={back_icon2}
          alt="back_icon"
          className="w-5 h-5 object-contain cursor-pointer"
        />
      </button>

      <div className="absolute top-5 md:top-4 left-16 md:left-[300px] p-2 text-white uppercase font-medium text-base md:text-xl flex justify-center items-center text-center z-20">
        Căn Hộ {apartmentLayoutItem?.text}
      </div>

      {/* Title */}
    </section>
  );
};

export default HouseSampleView;
