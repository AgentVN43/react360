import infoImg from "../../assets/images/location/info.png";

export default function InfoLocation() {
  return (
    <div className="w-[20%] h-full bg-white relative hidden md:block">
      <div className="absolute top-1/2 -translate-y-1/2 -left-[155px] pr-10">
        <img
          src={infoImg}
          alt="infoImg"
          className="w-full h-full object-contain"
        />
        {/* <h1 className="font-1kreey text-4xl text-[#a8ce38]">Thành phố</h1>
        <h1 className="text-(--sub) text-[42px] tracking-tighter uppercase py-2 font-custom2 mb-2 pl-6">
          SIÊU KẾT NỐI
        </h1>
        <div className="grid grid-cols-[auto_1fr] gap-3 pl-6 pr-4">
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            <span className="font-1kreey text-4xl">0</span>
            phút
          </h2>
          <p className="text-sm">
            Tiếp cận thành phố tiện ích all-in-one nội khu với: trường học,
            phòng khám, siêu thị, phố ẩm thực Hàn/Nhật, trung tâm thương mại...
          </p>
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            <span className="font-1kreey text-4xl">5</span>
            phút
          </h2>
          <p className="text-sm">
            LOTTE Mart, AEON Mall Binh Duong Canary, Golf Sông Bé, Bệnh viện
            Quốc tế Becamex, Trường mầm non Quốc tế MMI Việt Nam, Khu công
            nghiệp VSIP 1.
          </p>
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            <span className="font-1kreey text-4xl">10</span>
            phút
          </h2>
          <p className="text-sm">
            MM Mega Mall, Bệnh viện Đa khoa Quốc tế Hạnh Phúc, Bệnh viện
            Columbia Asia, Chợ Lái Thiêu.
          </p>
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            <span className="font-1kreey text-4xl">15</span>
            phút
          </h2>
          <p className="text-sm">Ngã tư Hàng Xanh *</p>
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            <span className="font-1kreey text-4xl">30</span>
            phút
          </h2>
          <p className="text-sm">
            Nhà thờ Đức Bà, Sân bay quốc tế Tân Sơn Nhất *
          </p>
          <h2 className="font-1kreey text-sm text-[#a8ce38] w-fit">
            
          </h2>
          <p className="text-xs">
          * Thời gian được tính sau khi Quốc lộ 13 hoàn thành mở rộng.
          </p>
        </div> */}
      </div>
    </div>
  );
}
