import { useState } from "react";

const FloorPlanContainerMobile = ({
  selectedImage,
  selectedItem,
  selectedSVG,
  setisVisibleProductDetail,
  setPathSelectedData,
  isMobile,
  activeFilterNumber,
  block,
  matchedFloor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [divStyle, setDivStyle] = useState({ top: 250, left: 40 });
  const [hoverPathData, sethoverPathData] = useState(null);

  // let plan_towerSelected =
  //   activeFilterNumber === 1 && selectedItem.id === 27
  //     ? plan_tower_27_s1
  //     : activeFilterNumber === 2 && selectedItem.id === 27
  //     ? plan_tower_27
  //     : activeFilterNumber === 1
  //     ? plan_tower_s1
  //     : plan_tower;

  // let apartmentType =
  //   hoverPathData?.apartmentLayout === 1
  //     ? "Studio"
  //     : hoverPathData?.apartmentLayout === 2
  //     ? "1PN"
  //     : hoverPathData?.apartmentLayout === 3
  //     ? "1PN+"
  //     : hoverPathData?.apartmentLayout === 4
  //     ? "2PN"
  //     : hoverPathData?.apartmentLayout === 5
  //     ? "2PN+"
  //     : hoverPathData?.apartmentLayout === 6
  //     ? "3PN"
  //     : hoverPathData?.apartmentLayout === 7
  //     ? "Duplex"
  //     : hoverPathData?.apartmentLayout === 8
  //     ? "Penthouse"
  //     : hoverPathData?.apartmentLayout === 9
  //     ? "1PN+1"
  //     : undefined;

  const handleClick = (item) => {
    setisVisibleProductDetail(true);
    setPathSelectedData(item);
  };

//   const apartmentHoveredData = apartmentLayout.find(
//     (item) => hoverPathData?.apartmentLayout === item.id
//   );

  const handleMouseEnter = (item, e) => {
    setIsHovered(true);
    sethoverPathData(item);
    setDivStyle({
      top: `${e.clientY - 150}px`,
      left: `${e.clientX + 80}px`, // Adjust the position to your liking
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    sethoverPathData(null);
    setDivStyle(null);
  };

  return (
    <section className="PlanContainer_wrapper block md:hidden h-full w-full absolute overflow-hidden">
      <div
        className="absolute top-10 right-[60px] max-h-[420px]
      overflow-auto bg-[#faffee] text-center"
      >
        <h1
          className={`${
            block === "zenia" && "font-kreey text-primary text-xl"
          } ${block === "risa" && "text-[#5B5A5A] text-md uppercase"}  `}
        >
          Mặt bằng
        </h1>
        <h1
          className={`${block === "zenia" && "text-sub font-custom2"} ${
            block === "risa" && "text-[#FCB700] font-gliker"
          } text-xl uppercase text-center py-2`}
        >
          Tầng {selectedItem.label}
          {block === "risa" && matchedFloor.label.includes("19") && (
            <p className="text-xs font-gliker text-end">Lofthouse</p>
          )}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full p-2 gap-2">
        <div className="h-1/2 w-[130%] relative pt-14">
          {/* Hiển thị ảnh tầng của toà đang được kích hoạt*/}
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Floor Plan"
              className="w-full h-full absolute object-contain scale-[1.4]"
            />
          ) : (
            <p>No floor plan selected</p>
          )}

          {/* SVG tầng của toà đang được kích hoạt */}
          <svg
            className="w-full h-full absolute object-contain scale-[1.4]"
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
                  fillOpacity="1"
                  stroke="#4d7939"
                  strokeWidth="2"
                  className="opacity-0 hover:stroke-white hover:fill-[#4d7939] fill- hover:opacity-90 hover:stroke-3 itemPlan cursor-pointer"
                  // onMouseDown={() => handleClick(item)}
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              ) : (
                <rect
                  key={index}
                  x={item.x}
                  y={item.y}
                  width={item.width}
                  height={item.height}
                  fill="#D49A54"
                  fillOpacity="1"
                  stroke="#4d7939"
                  strokeWidth="2"
                  rx="2"
                  className="opacity-0 hover:stroke-white hover:fill-[#4d7939] fill- hover:opacity-90 hover:stroke-3 itemPlan"
                  // onMouseDown={() => handleClick(item)}
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              )
            )}
          </svg>

          {/* Hover vào SVG hiện thông tin chi tiết */}
          {isHovered && (
            <div
              key={hoverPathData.id}
              className="absolute h-max flex bg-[#efffd1] rounded-md w-44 lg:w-52 z-40 right-1/2 translate-x-1/2 -top-[2.5rem] border border-green-700"
            >
              <div className="w-full h-full flex flex-col">
                <div>
                  <h4 className="font-bold uppercase text-[10px] text-center p-2">
                    Căn Hộ {hoverPathData?.code}
                  </h4>
                </div>

                <ul className="w-full h-full bg-[#ebffc5] rounded-b-md p-1 justify-self-center place-items-start">
                  <li className="p-1">
                    <span className="text-[10px] font-semibold text-gray-800">
                      {hoverPathData?.br} PN - {hoverPathData?.wc} WC
                    </span>
                  </li>

                  <li className="p-1">
                    <span className="text-[10px] font-semibold text-gray-800">
                      Diện tích tim tường:{" "}
                      <span className="font-bold">{hoverPathData.nfa} m²</span>
                    </span>
                  </li>

                  <li className="p-1">
                    <span className="text-[10px] font-semibold text-gray-800">
                      Diện tích thông thủy:{" "}
                      <span className="font-bold">{hoverPathData.nsa} m²</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default FloorPlanContainerMobile;
