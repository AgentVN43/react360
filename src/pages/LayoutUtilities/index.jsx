import React, { useEffect, useState } from "react";
import { plan_filter } from "../../data/data";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import { hideGuide } from "../../redux/features/GuideSlice";
// import HouseSampleView from "../../components/HouseSampleView";
// import PlanDetails from "../../components/PlanDetails";
import { updateResponsiveState } from "../../redux/features/ResponsiveSlice";
// import PlanDetailsMobile from "../../components/PlanDetailsMobile";

// import back_icon2 from "../../assets/icons/back_icon2.png";
// import next_icon from "../../assets/icons/next_icon.png";
// import check from "../../assets/icons/check.png";
// import circle_alert from "../../assets/icons/circle-alert_black.png";
// import plan_apartmentLayout from "../../assets/images/plan_apartmentLayout.png";
// import plan_tower from "../../assets/images/plan_tower.png";
// import plan_tower_27 from "../../assets/images/plan_tower_27.png";
// import plan_tower_s1 from "../../assets/images/plan_tower_s1.png";
// import plan_tower_27_s1 from "../../assets/images/plan_tower_27_s1.png";

// import laban from "../../assets/images/location/laban.png";
// import dinhviBlock from "../../assets/images/plan/dinh_vi_block.png";

// import SideTools from "../../components/SideTools";
// import Util from "../../components/Util";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { showGuideSVG2 } from "../../redux/features/GuideSlice";

const basePath = import.meta.env.REACT_APP_BASE_PATH;

const LayoutUtilitiesFilter = ({
  activeFilterNumber,
  setActiveFilterNumber,
  setActiveFilterItemNumber,
  isVisibleMobileFilter,
  setisVisibleMobileFilter,
  selectedUtilFilter,
  setSelectedUtilFilter,
  setHoveredUtilItem,
  isMobile,
  navigate,
  block,
}) => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);

  const handleActiveFilterItemNumber = (item) => {
    setActiveFilterItemNumber(item.id);
  };

  return (
    <section
      className={`${isVisibleMobileFilter ? "translate-x-0" : " -translate-x-full"
        } transition-all duration-300 Navbar_wrapper fixed top-0 left-0 md:left-4 md:top-[425px] w-screen md:w-52 h-screen md:max-h-[550px] md:h-auto overflow-auto 
         bg-white/60 backdrop-blur-md border border-white/10 shadow-lg 
          rounded-none md:rounded-md p-4 md:p-2 space-y-4 md:space-y-2 z-[80] md:z-40`}
    >
      <div className={`${isVisibleFilter ? "block" : "hidden"}`}>
        <div className="mt-20 mb-2 px-2 md:mt-0 w-full h-auto md:h-full gap-1 text-center">
          <h2 className="mb-1 text-sm font-bold text-(--sub) hidden md:inline-block">
            CÁC TÒA
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {/* hover:opacity-100 */}
            <div
              className={`${activeFilterNumber === 75 ? "opacity-100" : "opacity-40"
                } bg-[#FFC73C] py-2 rounded-lg text-white text-xs cursor-pointer hover:opacity-80 transition-all`}
              onClick={() => {
                setActiveFilterNumber(75);
                setSelectedUtilFilter(0);
                setHoveredUtilItem(null);
                navigate(`${basePath}/mat-bang-tien-ich/zenia/tang-tret`);
              }}
            >
              Zenia
            </div>
            {/* hover:bg-[#ff7b6e] */}
            <div
              className={`${activeFilterNumber === 45 ? "opacity-100" : "opacity-40"
                } py-2 bg-[#ff7b6e] rounded-lg text-white text-xs cursor-pointer hover:opacity-80 transition-all`}
              onClick={() => {
                setActiveFilterNumber(45);
                setSelectedUtilFilter(0);
                setHoveredUtilItem(null);
                navigate(`${basePath}/mat-bang-tien-ich/risa/tang-tret`);
              }}
            >
              Risa
            </div>
            {/* hover:bg-[#1d9597] */}
            <div className="py-2 bg-(--sub) rounded-lg text-white text-xs cursor-pointer opacity-30">
              Vista
            </div>
            {/* hover:bg-[#7e0202] */}
            <div className="py-2 bg-(--sub) rounded-lg text-white text-xs cursor-pointer opacity-30">
              Lira
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          {/* Back */}
          <button
            className="absolute top-5 left-5 p-2 flex md:hidden justify-center items-center text-center z-20 rounded-full bg-(--sub) border border-white"
            onClick={() => setisVisibleMobileFilter(!isVisibleMobileFilter)}
          >
            <img
              src={back_icon2}
              alt="back_icon"
              className="w-5 h-5 object-contain cursor-pointer"
            />
          </button>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 p-2 text-(--sub) font-bold text-base flex justify-center items-center text-center z-20">
            Bộ lọc
          </div>
        </div>
        <ul
          className={` 
             md:overflow-y-auto md:space-y-2 grid grid-cols-3 gap-2 px-2 md:block`}
        >
          {plan_filter.map(
            (section) =>
              section.id === activeFilterNumber &&
              section.itemsUtilFilter.map((item, indx) => (
                <li
                  key={indx}
                  className={`flex justify-center items-center text-center hover:cursor-pointer ${indx === selectedUtilFilter
                    ? "bg-(--primary) text-(--sub) hover:bg-(--primary) hover:text-(--sub)"
                    : "bg-(--sub) text-white hover:bg-(--primary) hover:text-(--sub)"
                    } w-full h-8 md:h-7 text-xs rounded-lg`}
                  onClick={() => {
                    // if (item.img === null) return;
                    setSelectedUtilFilter(indx);
                    isMobile && setisVisibleMobileFilter(false);
                    navigate(
                      `${basePath}/mat-bang-tien-ich/${block}/${item.slug}`
                    );
                  }}
                >
                  <h4 className="font-medium">{item.label}</h4>
                </li>
              ))
          )}
        </ul>
        <ul className="mt-2 px-3 overflow-y-auto md:max-h-36 space-y-2 hidden">
          {plan_filter[0].itemsUtilFilter[selectedUtilFilter].items.map(
            (item, index) => (
              <li
                key={index}
                className={`flex justify-start items-center gap-2 text-center hover:cursor-pointer
                     w-full h-8 md:h-7 text-xs rounded-lg text-white bg-(--sub) hover:bg-(--primary) hover:text-(--sub) pl-3`}
                onMouseEnter={() => setHoveredUtilItem(item.id)}
                onMouseLeave={() => setHoveredUtilItem(null)}
              >
                <span
                  className="w-4 h-4 rounded-full bg-white 
                  flex justify-center items-center text-(--sub) font-bold"
                >
                  {item.id}
                </span>
                <h4 className="font-medium">{item.label}</h4>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Nút thu gọn */}
      <div
        className="hidden md:block bg-(--primary) px-10 rounded-md mt-2 text-(--sub) w-max mx-auto hover:cursor-pointer"
        onClick={() => setIsVisibleFilter(!isVisibleFilter)}
      >
        {isVisibleFilter ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
    </section>
  );
};

const LayoutUtilities = () => {
  // Get data from params
  const { block, floor } = useParams();

  const matchedFloor = plan_filter
    .find((item) => item.label.toLowerCase() === block)
    .itemsUtilFilter.find((item) => item.slug === floor);

  const matchedBlock = plan_filter.find(
    (item) => item.label.toLowerCase() === block
  ).id;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { activedGuideSVG2 } = useSelector((state) => state.guide);
  // const planState = useSelector((state) => state.plan);
  // const { activeHouseSampleView } = planState;
  const responsiveState = useSelector((state) => state.responsive);
  const { isMobile } = responsiveState;

  const [activeFilterNumber, setActiveFilterNumber] = useState(
    matchedBlock ?? 75
  );
  // const [activeFilterItemNumber, setActiveFilterItemNumber] = useState(1);
  // const [isVisibleProductDetail, setisVisibleProductDetail] = useState(false);
  const [isVisibleMobileFilter, setisVisibleMobileFilter] = useState(false);
  const [selectedUtilFilter, setSelectedUtilFilter] = useState(
    plan_filter
      .find((item) => item.id === matchedBlock)
      .itemsUtilFilter.indexOf(matchedFloor) ?? 0
  ); // tiện ích
  const [hoveredUtilItem, setHoveredUtilItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateResponsiveState());
    };

    handleResize(); // Initial call to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (isMobile) {
      setisVisibleMobileFilter(false);
    } else {
      setisVisibleMobileFilter(true);
    }
  }, [isMobile]);

  const toggleFilterVisible = () => {
    setisVisibleMobileFilter(!isVisibleMobileFilter);
  };

  useEffect(() => {
    !activedGuideSVG2 && dispatch(showGuideSVG2());
  }, [dispatch]);

  if (!matchedFloor) {
    return (
      <div className="w-full h-screen flex justify-center items-center fixed z-[999]">
        <ErrorPage />
      </div>
    );
  }

  return (
    <section className="absolute h-full md:h-screen w-screen">
      <LayoutUtilitiesFilter
        activeFilterNumber={activeFilterNumber}
        setActiveFilterNumber={setActiveFilterNumber}
        setActiveFilterItemNumber={setActiveFilterItemNumber}
        isVisibleMobileFilter={isVisibleMobileFilter}
        setisVisibleMobileFilter={setisVisibleMobileFilter}
        selectedUtilFilter={selectedUtilFilter}
        setSelectedUtilFilter={setSelectedUtilFilter}
        setHoveredUtilItem={setHoveredUtilItem}
        isMobile={isMobile}
        navigate={navigate}
        block={block}
      />
      <Util
        activeFilterNumber={activeFilterNumber}
        selectedUtilFilter={selectedUtilFilter}
        isMobile={isMobile}
        block={block}
      />
      {/* Các Nút  */}
      <SideTools
        OrtherTools={() => {
          return (
            <>
              {/* Mở/Tắt Filter */}
              <button
                className={`w-10 h-10 ${!isVisibleMobileFilter ? "bg-(--sub)" : "bg-(--sub)/60"
                  }  flex md:hidden justify-center items-center rounded-md`}
                onClick={() => toggleFilterVisible()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.0929 2.57912C1.25675 2.22596 1.61069 2 2.00001 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.3466 14.8206 21.6684 14.5257 21.8507C14.2309 22.0329 13.8628 22.0494 13.5528 21.8944L9.5528 19.8944C9.21402 19.725 9.00001 19.3788 9.00001 19V12.8261L1.23644 3.64573C0.985046 3.34845 0.929037 2.93229 1.0929 2.57912ZM4.15532 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V18.382L13 19.382V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.15532Z"
                    fill="white"
                  />
                </svg>
              </button>
            </>
          );
        }}
      />
    </section>
  );
};

export default LayoutUtilities;
