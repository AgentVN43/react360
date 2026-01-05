// import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showGuide } from "../../redux/features/GuideSlice";
// import { useNavigate, useParams } from "react-router-dom";
// import SideTools from "../../components/SideTools";
// import back_icon2 from "../../assets/icons/back_icon2.png";
// import useKrpano from "react-krpano-hooks";

// const tabs = [
//   {
//     id: 2,
//     label: "View 1",
//     scene: "./file360/toan-canh/index.html?startscene=scene_3",
//   },
//   {
//     id: 1,
//     label: "View 2",
//     scene: "./file360/toan-canh/index.html?startscene=scene_2",
//   },
//   {
//     id: 3,
//     label: "View 3",
//     scene: "./file360/toan-canh/index.html?startscene=scene_4",
//   },
//   {
//     id: 4,
//     label: "View 4",
//     scene: "./file360/toan-canh/index.html?startscene=scene_5",
//   },
// ];

// const OverviewFilter = ({
//   activeFilterNumber,
//   setActiveFilterNumber,
//   callKrpano,
// }) => {
//   const [isVisibleFilter, setIsVisibleFilter] = useState(true);

//   const handleActiveFilterItemNumber = (section) => {
//     setActiveFilterNumber(section.id);
//     callKrpano(`loadscene(scene_${section.id + 1})`);
//   };

//   return (
//     <section
//       className={`hidden md:block Navbar_wrapper fixed top-[425px] left-4 w-52 max-h-[380px] h-auto overflow-auto
//     bg-white/60 backdrop-blur-md border border-white/10 shadow-lg rounded-md p-2 z-50`}
//     >
//       {isVisibleFilter && (
//         <div className="text-center">
//           <h2 className="mb-2 text-sm font-bold text-(--sub) hidden md:inline-block">
//             VIEW TÒA NHÀ
//           </h2>
//           <ul className={`grid grid-cols-4 gap-2 md:gap-1 md:grid-cols-1`}>
//             {tabs.map((section, index) => (
//               <li
//                 key={index}
//                 className={`w-full h-8 px-2 hover:bg-(--primary) hover:text-(--sub) text-center text-xs flex justify-center items-center rounded-md hover:cursor-pointer ${activeFilterNumber === section.id
//                   ? "bg-(--primary) text-(--sub) font-semibold"
//                   : "bg-(--sub) text-white"
//                   }`}
//                 onClick={() => handleActiveFilterItemNumber(section)}
//               >
//                 {section.label}
//                 {/* <div>
//               <img className="w-5 h-5" src={section.icon} alt="icon" />
//             </div> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div
//         className="hidden md:block bg-(--primary) px-10 rounded-md mt-2 text-(--sub) w-max mx-auto hover:cursor-pointer"
//         onClick={() => setIsVisibleFilter(!isVisibleFilter)}
//       >
//         {isVisibleFilter ? <CaretUpOutlined /> : <CaretDownOutlined />}
//       </div>
//     </section>
//   );
// };

// const OverviewFilterMobile = ({
//   activeFilterNumber,
//   setActiveFilterNumber,
//   callKrpano,
// }) => {
//   const handleActiveFilterItemNumber = (section) => {
//     setActiveFilterNumber(section.id);
//     callKrpano(`loadscene(scene_${section.id + 1})`);
//   };

//   return (
//     <section className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 h-auto px-4 z-10">
//       <ul
//         className={`space-x-1 flex flex-auto w-max justify-center items-center
//         bg-white/60 backdrop-blur-md border border-white/10 shadow-lg p-2 rounded-sm`}
//       >
//         {tabs.map((section, index) => (
//           <li
//             key={index}
//             className={`w-full h-8 px-4 text-nowrap hover:bg-(--primary) hover:text-(--sub) text-center text-xs flex justify-center items-center rounded-md hover:cursor-pointer ${activeFilterNumber === section.id
//               ? "bg-(--primary) text-(--sub) font-semibold"
//               : "bg-(--sub) text-white"
//               }`}
//             onClick={() => handleActiveFilterItemNumber(section)}
//           >
//             {section.label}
//             {/* <div>
//               <img className="w-5 h-5" src={section.icon} alt="icon" />
//             </div> */}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// const House = () => {
//   const { containerRef, callKrpano } = useKrpano({
//     globalFunctions: {
//       logNewScene: (scene) => {
//         scene === "scene_4" && setActiveFilterNumber(3);
//         scene === "scene_2" && setActiveFilterNumber(1);
//         scene === "scene_3" && setActiveFilterNumber(2);
//         scene === "scene_5" && setActiveFilterNumber(4);
//       },
//     },
//   });

//   // const dispatch = useDispatch();
//   // const { activedGuide } = useSelector((state) => state.guide);
//   // const navigate = useNavigate();
//   const [activeFilterNumber, setActiveFilterNumber] = useState(2);

//   // const { roomType } = useParams();

//   // useEffect(() => {
//   //   !activedGuide && dispatch(showGuide());
//   // }, [dispatch]);

//   return (
//     <section className="House_wrapper absolute h-full md:h-screen w-full">
//       <OverviewFilter
//         activeFilterNumber={activeFilterNumber}
//         setActiveFilterNumber={setActiveFilterNumber}
//         callKrpano={callKrpano}
//       />
//       <OverviewFilterMobile
//         activeFilterNumber={activeFilterNumber}
//         setActiveFilterNumber={setActiveFilterNumber}
//         callKrpano={callKrpano}
//       />
//       {/* <SideTools
//         OrtherTools={() => {
//           return <></>;
//         }}
//       /> */}
//       {/* <iframe
//         src={tabs[activeFilterNumber - 1].scene}
//         className="w-full h-full absolute"
//         title="house"
//       /> */}
//       <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
//     </section>
//   );
// };

// export default House;

import React from "react";
import useKrpano from "react-krpano-hooks";

export default function Overview() {
  const { containerRef } = useKrpano();
  return <div ref={containerRef} />;
}
