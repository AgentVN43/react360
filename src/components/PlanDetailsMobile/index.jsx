import React from "react";
import { setActiveHouseSampleView } from "../../redux/features/PlanSlice";
import { useDispatch } from "react-redux";

// import check from "../../assets/icons/check.png";
import next_icon from "../../assets/icons/next_icon.png";
import back_icon2 from "../../assets/icons/back_icon2.png";
// import circle_alert from "../../assets/icons/circle-alert_black.png";
import laban from "../../assets/images/location/laban.png";
import dinhviBlock from "../../assets/images/plan/dinh_vi_block.png";

const PlanDetailsMobile = ({
  setisVisibleProductDetail,
  apartmentLayoutItem,
  pathSelectedData,
  setPathSelectedData,
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
    <section className="block md:hidden w-full h-full md:h-screen fixed top-0 left-0 z-[55] bg-[#faffee]">
      {/* Back */}
      <div>
        <button
          className="absolute top-5 left-5 p-2 flex md:hidden justify-center items-center text-center z-20 rounded-full bg-sub border border-white"
          onClick={() => handleBackToPlan()}
        >
          <img
            src={back_icon2}
            alt="back_icon"
            className="w-5 h-5 object-contain cursor-pointer"
          />
        </button>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 p-2 text-bg_custome font-medium text-base flex justify-center items-center text-center z-20">
          Căn hộ {apartmentLayoutItem.text}
        </div>
      </div>

      <div className="fixed top-[55%] left-1/2 -translate-x-1/2 flex h-12 w-2/3 z-10">
        <img
          src={dinhviBlock}
          alt="dinhviBlock"
          className="w-full h-full object-contain"
        />
        <img src={laban} alt="laban" className="w-full h-full object-contain" />
      </div>

      <div className="absolute w-full h-full flex flex-col justify-center items-center p-2 gap-8">
        {/* Ảnh layout */}
        <div className="w-full h-1/2 p-0 sm:p-0 md:p-0">
          <img
            src={apartmentLayoutItem.LayoutImg}
            alt="LayoutImg"
            className="w-full h-full object-contain"
          />
        </div>

        {/* thông tin căn hộ */}
        <div className="w-full h-auto shadow-md bg-white rounded-t-md z-40 flex flex-col justify-center items-center">
          <h1 className="text-bg_custome uppercase text-base text-center font-bold py-2">
            Căn Hộ {apartmentLayoutItem.text}
          </h1>
          <ul className="w-full h-full flex flex-col justify-center">
            <hr className="border-gray-100 " />
            <li className="p-2 px-5">

              <span className="text-xs text-black">
                {apartmentLayoutItem.br}PN - {apartmentLayoutItem.wc}WC
              </span>
            </li>
            <hr className="border-gray-100 " />
            <li className="p-2 px-5">

              <span className="text-black text-xs">
                <span className="text-xs">Diện tích tim tường:</span> {pathSelectedData.nfa} m²
              </span>
            </li>
            <hr className="border-gray-100 " />

            <li className="p-2 px-5">

              <span className="text-black text-xs">
                <span className="text-xs">Diện tích thông thủy:</span> {pathSelectedData.nsa} m²
              </span>
            </li>
            {/* <hr className="border-gray-100 " />
            <li className="p-2 px-5">
              
              <span className="text-black text-xs">
                <span className="text-xs">Hướng ban công:</span> Đông
              </span>
            </li> */}
          </ul>

          <button
            className={` ${apartmentLayoutItem?.frameUrl ? "flex" : "hidden"
              } w-full bg-sub justify-center items-center hover:bg-primary hover:text-sub`}
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

        {/* Disclaimer */}
        {/* <div className="w-full md:w-[280px] h-auto flex flex-col gap-1 z-40">
          <div className="flex gap-2 items-center">
            <img className="w-4 h-4" src={circle_alert} alt="circle_alert" />
            <p className="text-black text-xs font-semibold">Lưu ý</p>
          </div>
          <p className="text-black text-xs-10">
            Chúng tôi đã nỗ lực và cẩn trọng để hoàn thiện tài liệu này. Tuy
            nhiên tài liệu chỉ dùng với mục đích tham khảo. Hình ảnh, sơ đồ kỹ
            thuật, bố trí nội ngoại thất hay thông tin mô tả chỉ nhằm mục đích
            minh họa, không phải là thông tin hiện thực hay cam kết pháp lý.
            Thông tin chính thức căn cứ trên Hợp đồng mua bán. Tên căn hộ và ký
            hiệu căn hộ cho mục đích giới thiệu, tên căn hộ và ký hiệu căn hộ
            chính thức sẽ được ghi nhận tại Hợp đồng mua bán.
          </p>
          <p className="text-xs-10">
            <span className="font-bold">Ghi chú:</span> Diện tích sử dụng căn hộ
            sau cùng sẽ được xác minh bởi đơn vị đo đạc.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default PlanDetailsMobile;
