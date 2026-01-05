import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveHouseSampleView } from "../../redux/features/PlanSlice";

// import back_icon2 from "../../assets/icons/back_icon2.png";
// import laban from "../../assets/images/location/laban.png";
// import dinhviBlock_ZN from "../../assets/images/plan/dinh_vi_block.png";
// import dinhviBlock_RS from "../../assets/images/plan/dinh_vi_block_risa.png";
import { apartmentLayout, plan_filter } from "../../data/data";
// import PlanDetails from "../PlanDetails";
// import PlanDetailsMobile from "../PlanDetailsMobile";

const PlanContainer = ({
  selectedImage,
  selectedSVG,
  setisVisibleProductDetail,
  setPathSelectedData,
  activeFilterItem,
  isMobile,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [divStyle, setDivStyle] = useState({ top: 250, left: 40 });
  const [hoverPathData, sethoverPathData] = useState(null);

  const apartmentHoveredData = apartmentLayout.find(
    (item) => hoverPathData?.apartmentLayout === item.id
  );

  // const addTopClientY = hoverPathData
  // console.log("activeFilterItem", activeFilterItem);
  const handleClick = (item) => {
    setisVisibleProductDetail(true);
    setPathSelectedData(item);
  };

  const handleMouseEnter = (item, e) => {
    setIsHovered(true);
    sethoverPathData(item);
    setDivStyle({
      // top: `${e.clientY - 150}px`,
      top: `25%`,
      left: `${e.clientX + 80}px`, // Adjust the position to your liking
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    sethoverPathData(null);
    setDivStyle(null);
  };

  return (
    <section className="bg-[#faffee] h-full w-full absolute overflow-hidden">
      {/* Hiển thị ảnh tầng của toà đang được kích hoạt*/}
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected Floor Plan"
          className="w-full h-full absolute object-contain scale-[1.4] md:scale-100"
        />
      ) : (
        <p>No floor plan selected</p>
      )}

      {/* SVG tầng của toà đang được kích hoạt */}
      <svg
        className="w-full h-full absolute object-contain scale-[1.4] md:scale-100"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {selectedSVG.map((item, index) =>
          item.poligon ? (
            <path
              key={index}
              d={item.poligon}
              fill="#D49A54"
              fillOpacity="0"
              stroke="#4d7939"
              strokeWidth="1"
              className="hover:stroke-white hover:fill-[#4d7939] hover:opacity-90 hover:stroke-3 cursor-pointer itemPlan"
              // onMouseDown={() => handleClick(item)}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={() => handleMouseLeave()}
            />
          ) : (
            <rect
              key={index}
              x={item?.x}
              y={item?.y}
              width={item.width}
              height={item.height}
              fill="#D49A54"
              fillOpacity="1"
              stroke="#4d7939"
              strokeWidth="2"
              rx="2"
              transform={item?.transform}
              className="opacity-20 hover:stroke-white hover:fill-[#4d7939] hover:opacity-90 hover:stroke-3 itemPlan"
              // onMouseDown={() => handleClick(item)}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={() => handleMouseLeave()}
            />
          )
        )}
      </svg>

      {/* Hover vào SVG hiện thông tin chi tiết */}
      {isHovered && !isMobile && (
        <div
          key={hoverPathData.id}
          className="absolute h-max flex bg-[#EFFFD1] rounded-md w-44 lg:w-52 z-10 right-1/2 translate-x-1/2 top-[8.5rem]"
        >
          <div className="w-full h-full flex flex-col">
            <div>
              {/* <img
                src={apartmentHoveredData.LayoutImg}
                alt="LayoutImg"
                className="mx-auto h-28 w-40 md:h-32 object-cover"
              /> */}
              <h4 className="font-bold uppercase text-xs lg:text-xs text-center p-1 lg:p-2">
                Căn Hộ {hoverPathData?.code}
              </h4>
            </div>

            <ul className="w-full h-full bg-[#ebffc5] rounded-b-md p-1 justify-self-center place-items-start">
              <li className=" w-full p-1 ">
                <span className="text-xs-10 lg:text-xs text-gray-800">
                  <span className="font-bold">
                    {apartmentHoveredData?.br} PN - {apartmentHoveredData?.wc}{" "}
                    WC
                  </span>
                </span>
              </li>

              <li className=" w-full p-1">
                <span className="text-xs-10 lg:text-xs text-gray-800">
                  Diện tích tim tường:{" "}
                  <span className="font-bold">{hoverPathData.nfa} m²</span>
                </span>
              </li>

              <li className=" w-full p-1">
                <span className="text-xs-10 lg:text-xs text-gray-800">
                  Diện tích thông thủy:{" "}
                  <span className="font-bold">{hoverPathData.nsa} m²</span>
                </span>
              </li>

              {/* <li className=" w-full p-1">
                <span className="text-xs-10 lg:text-xs text-gray-800">
                  Hướng ban công: <span className="font-bold">Đông</span>
                </span>
              </li> */}
            </ul>

            {/* <div className="w-full bg-sub flex justify-center items-center">
              <p className="px-1 text-white text-xs">Click để xem chi tiết</p>
              <img
                src={next_icon}
                alt="next_icon"
                className="px-1 w-8 h-8 object-contain"
              />
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

const FloorDetail = ({
  setisVisibleFloorDetail,
  activeFilterItem,
  activeFilterNumber,
}) => {
  const dispatch = useDispatch();

  const responsiveState = useSelector((state) => state.responsive);
  const { isMobile } = responsiveState;

  const dinhviBlock = activeFilterNumber === 75;

  // const dinhviBlock =
  //   activeFilterNumber === 75
  //     ? dinhviBlock_ZN
  //     : activeFilterNumber === 45
  //     ? dinhviBlock_RS
  //     : null;

  const handleBackToPlan = () => {
    setisVisibleFloorDetail(false);
  };

  const handleActiveHouseSampleView = () => {
    dispatch(setActiveHouseSampleView(true));
  };
  const [isVisibleProductDetail, setisVisibleProductDetail] = useState(false);
  const [pathSelectedData, setPathSelectedData] = useState(null);
  // useEffect(() => {
  //   dispatch(hideGuide());
  // }, []);

  // Get the current selected image based on activeFilterNumber and activeFilterItem
  const selectedSection = plan_filter.find(
    (section) => section.id === activeFilterNumber
  );
  const selectedItem = selectedSection?.itemsApartmentFilter.find(
    (item) => item.id === activeFilterItem.floorGroup
  );

  const selectedSVG = selectedItem?.svg;

  const selectedImage = selectedItem?.img;

  const apartmentLayoutItem = apartmentLayout?.find(
    (item) => item.id === pathSelectedData?.apartmentLayout
  );
  return (
    <section className="w-full h-full absolute top-0 left-0 z-[55] md:z-40 bg-[#faffee]">
      {/* menu */}
      <div
        className="fixed top-20 md:top-5 left-1/2 -translate-x-1/2 max-h-[420px] 
      overflow-auto bg-[#faffee] z-40 h-fit"
      >
        <h1
          className={`${
            activeFilterNumber === 75 && "font-1kreey text-primary text-4xl"
          } ${
            activeFilterNumber === 45 &&
            "font-risa text-risa text-4xl md:text-5xl"
          }  `}
        >
          Mặt bằng
        </h1>
        <h1
          className={`${activeFilterNumber === 75 && "text-sub"} ${
            activeFilterNumber === 45 && "text-[#3e3e3e]"
          } text-3xl uppercase text-center py-2 font-custom2`}
        >
          Tầng {selectedItem.label}
        </h1>
      </div>

      {/* Back */}
      <button
        className="fixed top-[20px] left-4 md:left-64 p-2 px-3 flex justify-center items-center text-center z-20 rounded-full bg-sub border border-white 
        cursor-pointer hover:opacity-80"
        onClick={() => handleBackToPlan()}
      >
        {/* <img
          src={back_icon2}
          alt="back_icon"
          className="w-8 h-3 object-contain cursor-pointer"
        /> */}
        <p className="text-white text-sm">Trở lại</p>
      </button>

      <>
        {/* <img
          src={laban}
          alt="laban"
          className="fixed right-14 md:right-14 top-5 md:bottom-10 md:top-auto z-10 w-16 md:w-32"
        />
        <div
          className="fixed right-1/2 translate-x-1/2 md:translate-x-0 bottom-16 md:right-10 md:bottom-56 z-10 w-20 md:w-52
            p-2 border-4 border-sub rounded-md
          "
        >
          <img
            src={dinhviBlock}
            alt="dinhviBlock"
            className="w-full h-full object-contain"
          />
        </div> */}

        <div className="fixed bottom-16 md:bottom-9 left-1/2 -translate-x-1/2 flex h-12 w-2/3 md:w-1/2 z-10">
          <img
            src={dinhviBlock}
            alt="dinhviBlock"
            className="w-full h-full object-contain"
          />
          {/* <img
            src={laban}
            alt="laban"
            className="w-full h-full object-contain"
          /> */}
        </div>

        {!isVisibleProductDetail && (
          <div className="fixed flex gap-2 md:gap-4 right-1/2 translate-x-1/2 bottom-4 md:bottom-2 z-50">
            <div className="flex items-center gap-2 text-xs text-nowrap">
              <div
                className={`${activeFilterNumber === 75 && "bg-[#e8e8b8]"} 
              ${activeFilterNumber === 45 && "bg-[#ffefc3]"}
            w-5 md:w-8 h-5`}
              ></div>
              <span className="hidden md:block font-bold">Căn hộ 1 PN</span>
              <span className="block md:hidden font-bold">1 PN</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-nowrap">
              <div
                className={`${activeFilterNumber === 75 && "bg-[#9cb583]"}
            ${activeFilterNumber === 45 && "bg-[#ffe4d3]"}
             w-5 md:w-8 h-5`}
              ></div>
              <span className="hidden md:block font-bold">
                Căn hộ 2 PN, 1 WC
              </span>
              <span className="block md:hidden font-bold">2 PN, 1 WC</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-nowrap">
              <div
                className={`${activeFilterNumber === 75 && "bg-[#c7d9a5]"}
            ${activeFilterNumber === 45 && "bg-[#ffc5c5]"}
             w-5 md:w-8 h-5`}
              ></div>
              <span className="hidden md:block font-bold">
                Căn hộ 2 PN, 2 WC
              </span>
              <span className="block md:hidden font-bold">2 PN, 2 WC</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-nowrap">
              <div
                className={`${activeFilterNumber === 75 && "bg-[#dde9ad]"}
            ${activeFilterNumber === 45 && "bg-[#eb9fa0]"}
             w-5 md:w-8 h-5`}
              ></div>
              <span className="hidden md:block font-bold">Căn hộ 3 PN</span>
              <span className="block md:hidden font-bold">3 PN</span>
            </div>
            {activeFilterNumber === 45 && (
              <div className="flex items-center gap-2 text-xs text-nowrap">
                <div
                  className={`
            ${activeFilterNumber === 45 && "bg-[#ffc983]"}
             w-5 md:w-8 h-5`}
                ></div>
                <span className="hidden md:block font-bold">
                  Căn hộ Garden Villa
                </span>
                <span className="block md:hidden font-bold">GV</span>
              </div>
            )}
          </div>
        )}
      </>
      {/* Ảnh layout */}
      <div className="w-full h-full p-0 sm:p-0 md:p-0">
        <PlanContainer
          selectedImage={selectedImage}
          selectedSVG={selectedSVG}
          setisVisibleProductDetail={setisVisibleProductDetail}
          setPathSelectedData={setPathSelectedData}
          activeFilterItem={activeFilterItem}
          isMobile={isMobile}
        />
        {/* Tab thông tin chi tiết mặt bằng */}
        {isVisibleProductDetail && (
          <PlanDetails
            setisVisibleProductDetail={setisVisibleProductDetail}
            apartmentLayoutItem={apartmentLayoutItem}
            pathSelectedData={pathSelectedData}
            setPathSelectedData={setPathSelectedData}
          />
        )}

        {isVisibleProductDetail && (
          <PlanDetailsMobile
            setisVisibleProductDetail={setisVisibleProductDetail}
            apartmentLayoutItem={apartmentLayoutItem}
            pathSelectedData={pathSelectedData}
            setPathSelectedData={setPathSelectedData}
          />
        )}
      </div>
    </section>
  );
};

export default FloorDetail;
