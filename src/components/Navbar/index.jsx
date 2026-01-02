import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import nav_logo from "../../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../../redux/features/NavBarSlice";
import { Link, useLocation } from "react-router-dom";
import { updateResponsiveState } from "../../redux/features/ResponsiveSlice";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  LayoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const navList = [
  {
    id: 1,
    label: <FormattedMessage id="nav.2" defaultMessage="Tổng Quan La Pura" />,
    href: "/toan-canh",
  },
  {
    id: 2,
    label: <FormattedMessage id="nav.1" defaultMessage="Liên Kết Vùng" />,
    href: "/lien-ket-vung",
  },
  {
    id: 3,
    label: <FormattedMessage id="nav.3" defaultMessage="Mặt Bằng Tổng Thể" />,
    href: "/mat-bang-tong-the",
  },
  {
    id: 4,
    label: <FormattedMessage id="nav.4" defaultMessage="Mặt Bằng Tầng" />,
    href: "/mat-bang-tang/zenia/4-10",
  },
  {
    id: 5,
    label: <FormattedMessage id="nav.5" defaultMessage="Mặt Bằng Tiện Ích" />,
    href: "/mat-bang-tien-ich/zenia/tang-tret",
  },
  {
    id: 6,
    label: <FormattedMessage id="nav.5" defaultMessage="Layout Điển Hình" />,
    href: "/layout-dien-hinh",
  },
  {
    id: 7,
    label: <FormattedMessage id="nav.6" defaultMessage="Nội Thất Căn Hộ" />,
    href: "/house/1pn",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.nav);
  const { activeMenu } = navState;
  const responsiveState = useSelector((state) => state.responsive);
  const { isMobile } = responsiveState;
  const location = useLocation();
  const [isMobileNav, setisMobileNav] = useState(true);

  // Tự động activeMenu dựa vào location path
  useEffect(() => {
    if (location.pathname.includes("/toan-canh")) {
      dispatch(setActiveMenu(1));
    } else if (location.pathname.includes("/lien-ket-vung")) {
      dispatch(setActiveMenu(2));
    } else if (location.pathname.includes("/mat-bang-tong-the")) {
      dispatch(setActiveMenu(3));
    } else if (location.pathname.includes("/mat-bang-tang")) {
      dispatch(setActiveMenu(4));
    } else if (location.pathname.includes("/mat-bang-tien-ich")) {
      dispatch(setActiveMenu(5));
    } else if (location.pathname.includes("/layout-dien-hinh")) {
      dispatch(setActiveMenu(6));
    } else if (location.pathname.includes("/house")) {
      dispatch(setActiveMenu(7));
    }
  }, [location, dispatch]);

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
  // END RESPONSIVE

  useEffect(() => {
    if (isMobile) {
      setisMobileNav(false);
    } else {
      setisMobileNav(true);
    }
  }, [isMobile]);

  const handleActiveNav = (item) => {
    dispatch(setActiveMenu(item.id));
  };

  const [current, setCurrent] = useState("1");

  // Cấu hình các mục Menu
  const items = [
    { key: "1", icon: <HomeOutlined />, label: "Tổng quan" },
    { key: "2", icon: <EnvironmentOutlined />, label: "Vị trí" },
    { key: "3", icon: <AppstoreOutlined />, label: "Mặt bằng" },
    { key: "4", icon: <LayoutOutlined />, label: "Nội thất" },
  ];

  return (
    // <section
    //   className="fixed top-4 left-2 md:left-4 w-48 md:w-52 h-auto
    // bg-white/60 backdrop-blur-md border border-white/10 shadow-lg
    // rounded-md p-2 space-y-2 z-50"
    // >
    //   {/* Logo */}
    //   <div className="flex p-1 md:p-0 items-center">
    //     <div className="md:h-20 md:p-3 w-full flex justify-center items-center">
    //       <img
    //         src={nav_logo}
    //         alt="nav_logo"
    //         className="w-[50%] md:w-2/3 object-contain"
    //       />
    //     </div>
    //     <button
    //       className={`md:hidden w-10 h-8 bg-sub
    //       flex justify-center items-center rounded-md`}
    //       onClick={() => setisMobileNav(!isMobileNav)}
    //     >
    //       {isMobileNav ? (
    //         <CaretUpOutlined className="text-primary" />
    //       ) : (
    //         <CaretDownOutlined className="text-primary" />
    //       )}
    //     </button>
    //   </div>

    //   <div className={`transition-all duration-500 `}>
    //     {!isMobileNav && (
    //       <div className="w-full h-8 px-3 flex justify-start items-center rounded-md bg-primary text-sub">
    //         <p className="text-xs font-semibold">
    //           {navList.find((item) => item.id === activeMenu).label}
    //         </p>
    //       </div>
    //     )}
    //     <ul className={`space-y-1 ${isMobileNav ? "block" : "hidden"}`}>
    //       {navList.map((item, index) => (
    //         <li key={index}>
    //           <Link
    //             className={`w-full h-8 px-3 flex justify-start items-center rounded-md
    //               hover:bg-primary hover:text-sub ${
    //                 activeMenu === item.id
    //                   ? "bg-primary text-sub"
    //                   : "bg-sub text-white"
    //               }`}
    //             onClick={() => {
    //               handleActiveNav(item);
    //               isMobile && setisMobileNav(false);
    //             }}
    //             to={item.href}
    //           >
    //             <p className="text-xs font-semibold">{item.label}</p>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //     {/* <div
    //       className="flex md:hidden justify-center items-center bg-primary px-10 rounded-md mt-2
    //       text-sub w-full py-1"
    //       onClick={() => setisMobileNav(!isMobileNav)}
    //     >
    //       {isMobileNav ? <CaretUpOutlined /> : <CaretDownOutlined />}
    //     </div> */}
    //   </div>
    // </section>
    // <section
    //   className="fixed top-6 left-6 z-50
    //     w-64 md:w-72

    //     bg-[#f0f7ee]/90 backdrop-blur-xl
    //     border border-white/50 shadow-2xl

    //     p-5 rounded-[2.5rem]

    //     flex flex-col gap-6
    //     transition-all duration-300"
    // >
    //   {/* 1. LOGO SECTION - Padding lớn tạo điểm nhấn thương hiệu */}
    //   <div className="flex flex-col items-center pt-4 pb-2 relative">
    //     <div className="w-full flex justify-center items-center px-4 mb-4">
    //       <img
    //         src={nav_logo}
    //         alt="nav_logo"
    //         className="w-3/4 object-contain transition-transform hover:scale-105"
    //       />
    //     </div>

    //     {/* Nút Mobile - Cải tiến vị trí để không phá layout */}
    //     <button
    //       className="md:hidden absolute -right-2 top-0 bg-white/50 p-2 rounded-full shadow-sm"
    //       onClick={() => setisMobileNav(!isMobileNav)}
    //     >
    //       {isMobileNav ? <CaretUpOutlined /> : <CaretDownOutlined />}
    //     </button>

    //     {/* Đường gạch ngang tinh tế */}
    //     <div className="h-[1px] w-2/3 bg-green-800/10" />
    //   </div>

    //   {/* 2. NAVIGATION LIST */}
    //   <div className="flex-1 overflow-y-auto no-scrollbar">
    //     {/* Mobile: Hiển thị item hiện tại khi thu gọn */}
    //     {!isMobileNav && (
    //       <div className="w-full h-12 px-5 flex items-center rounded-2xl bg-primary text-sub shadow-sm border border-primary/20">
    //         <span className="text-xs font-bold uppercase tracking-wider truncate">
    //           {navList.find((item) => item.id === activeMenu)?.label}
    //         </span>
    //       </div>
    //     )}

    //     {/* Danh sách chính - space-y-3 tạo MARGIN giữa các Item */}
    //     <ul
    //       className={`space-y-3 transition-all ${
    //         isMobileNav ? "block" : "hidden md:block"
    //       }`}
    //     >
    //       {navList.map((item, index) => {
    //         const isActive = activeMenu === item.id;
    //         return (
    //           <li key={index}>
    //             <Link
    //               to={item.href}
    //               onClick={() => {
    //                 handleActiveNav(item);
    //                 if (isMobile) setisMobileNav(false);
    //               }}
    //               className={`
    //                 /* Kích thước & Padding cho Item */
    //                 w-full min-h-[48px] px-5 py-3
    //                 flex items-center justify-start rounded-2xl

    //                 /* Typography */
    //                 text-[13px] font-bold uppercase tracking-wide

    //                 /* Hiệu ứng & Màu sắc */
    //                 transition-all duration-300 transform

    //                 ${
    //                   isActive
    //                     ? "bg-[#d4fc79] text-[#2d4a1e] shadow-lg shadow-green-200/50 scale-[1.03] translate-x-1"
    //                     : "bg-[#5a7a44] text-white hover:bg-[#6d8c52] hover:translate-x-2"
    //                 }
    //               `}
    //             >
    //               <span className="block truncate">{item.label}</span>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>

    //   {/* 3. OPTIONAL: FOOTER/VIEW BOX (Nếu cần thêm như trong ảnh) */}
    //   {isMobileNav && (
    //     <div className="pt-2">
    //       <div className="text-[10px] text-center text-green-800/40 font-bold uppercase tracking-[0.2em]">
    //         La Pura Residence
    //       </div>
    //     </div>
    //   )}
    // </section>

    <div className="fixed top-8 left-8 h-[calc(100vh-48px)] z-50 bg-white">test</div>
  );
};

export default Navbar;
