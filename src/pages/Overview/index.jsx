import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showGuide } from "../../redux/features/GuideSlice";
// import { useNavigate, useParams } from "react-router-dom";
// import SideTools from "../../components/SideTools";
// import back_icon2 from "../../assets/icons/back_icon2.png";
import useKrpano from "react-krpano-hooks";

export default function Overview() {
  const { containerRef } = useKrpano();
  return <div ref={containerRef} />;
}
