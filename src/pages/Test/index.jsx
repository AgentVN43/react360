import React, { useState } from "react";
import { apartmentLayout } from "../../data/data";

export default function Test() {
  const [isHovered, setIsHovered] = useState(false);
  const [divStyle, setDivStyle] = useState({ top: 250, left: 40 });
  const [hoverPathData, sethoverPathData] = useState(null);

  const apartmentHoveredData = apartmentLayout.find(
    (item) => hoverPathData?.apartmentLayout === item.id
  );

  const selectedImage = `/src/assets/images/floor-plan/zn/4_10.png`;

  const selectedSVG = [
    {
      id: 1,
      code: "01",
      poligon: "M848.447 413.5H781.317V511.5H848.447V413.5Z",
      apartmentLayout: 1,
      nfa: 55.21,
      nsa: 48.23,
    },
  ];

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
    <section className="PlanContainer_wrapper hidden md:block h-full w-full absolute overflow-visible">
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        {/* Hiển thị ảnh tầng của toà đang được kích hoạt*/}
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected Floor Plan"
            className="w-full h-full absolute object-contain"
          />
        ) : (
          <p>No floor plan selected</p>
        )}

        {/* SVG tầng của toà đang được kích hoạt */}
        <svg
          // className="w-full h-full absolute object-contain"
          className="absolute inset-0 w-full h-full"
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
                className="itemPlan cursor-pointer transition-all"
                style={{
                  fill: hoverPathData?.id === item.id ? "#4d7939" : "#D49A54",
                  fillOpacity: hoverPathData?.id === item.id ? 0.9 : 0,
                  stroke: hoverPathData?.id === item.id ? "white" : "#4d7939",
                  strokeWidth: hoverPathData?.id === item.id ? 3 : 1,
                }}
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
                className="itemPlan transition-all"
                style={{
                  fill: hoverPathData?.id === item.id ? "#4d7939" : "#D49A54",
                  fillOpacity: hoverPathData?.id === item.id ? 0.9 : 0.2,
                  stroke: hoverPathData?.id === item.id ? "white" : "#4d7939",
                  strokeWidth: hoverPathData?.id === item.id ? 3 : 2,
                }}
                onMouseEnter={(e) => handleMouseEnter(item, e)}
                onMouseLeave={() => handleMouseLeave()}
              />
            )
          )}
        </svg>

        {/* Hover vào SVG hiện thông tin chi tiết */}
        {isHovered && hoverPathData && (
          <div
            className="fixed z-40 w-44 lg:w-52 bg-[#EFFFD1] border-2 border-green-700 rounded-md shadow-lg
               top-[8.5rem] right-1/2 translate-x-1/2
               overflow-hidden"
          >
            {/* Header */}
            <div className="py-1.5 lg:py-2 text-center">
              <h4 className="font-bold uppercase text-[10px] lg:text-xs">
                Căn Hộ {hoverPathData.code}
              </h4>
            </div>

            {/* Body */}
            <ul className="bg-[#ebffc5] rounded-b-md p-2 space-y-1">
              {apartmentHoveredData && (
                <li>
                  <span className="text-[10px] lg:text-xs text-gray-800">
                    <span className="font-bold">
                      {apartmentHoveredData.br} PN - {apartmentHoveredData.wc}{" "}
                      WC
                    </span>
                  </span>
                </li>
              )}

              <li>
                <span className="text-[10px] lg:text-xs text-gray-800">
                  Diện tích tim tường:{" "}
                  <span className="font-bold">{hoverPathData.nfa} m²</span>
                </span>
              </li>

              <li>
                <span className="text-[10px] lg:text-xs text-gray-800">
                  Diện tích thông thủy:{" "}
                  <span className="font-bold">{hoverPathData.nsa} m²</span>
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
