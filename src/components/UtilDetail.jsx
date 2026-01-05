import React, { useState } from "react";
import back_icon2 from "../assets/icons/back_icon2.png";
import UtilDetailElements from "./UtilDetailElements";
import Util from "./Util";
import { utilities_plan_stopframe } from "../data/data";

const UtilDetail = ({ pathUtilSelected, setIsVisibleUtilDetail, blockId }) => {

  const block = utilities_plan_stopframe.find(item => item.id === blockId)?.title;

  console.log("UtilDetail blockId:", blockId);
  console.log("UtilDetail block:", block);

  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 z-[55] md:z-40 bg-[#faffee] overflow-auto">
        {/* Back */}
        <button
          className="fixed z-20 top-[20px] left-4 md:left-64 p-2 px-3 flex justify-center items-center text-center rounded-full bg-(--sub) border border-white 
        cursor-pointer hover:opacity-80 md:hidden"
          onMouseDown={() => setIsVisibleUtilDetail(false)}
        >
          <img
            src={back_icon2}
            alt="back_icon"
            className="w-8 h-3 object-contain cursor-pointer"
          />
          <p className="text-white text-sm">Trở lại</p>
        </button>
        <div className="block md:hidden">
          <Util selectedUtilFilter={pathUtilSelected} isRotation={true} activeFilterNumber={blockId} block={block} />
        </div>
      </div>
      <button
        className="fixed z-50 top-[20px] left-4 md:left-60 p-2 px-3 hidden md:flex justify-center items-center text-center rounded-full bg-(--sub) border border-white 
        cursor-pointer hover:opacity-80"
        onMouseDown={() => setIsVisibleUtilDetail(false)}
      >
        <img
          src={back_icon2}
          alt="back_icon"
          className="w-8 h-3 object-contain cursor-pointer"
        />
        <p className="text-white text-sm">Trở lại</p>
      </button>
      <div className="hidden md:block">
        <UtilDetailElements selectedUtilFilter={pathUtilSelected} activeFilterNumber={blockId} block={block} />
      </div>
    </>
  );
};

export default UtilDetail;