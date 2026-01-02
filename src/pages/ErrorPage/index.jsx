import { useNavigate } from "react-router-dom";
import loading_border from "../../assets/images/loading-border.png";
import lapura_logo from "../../assets/logo/big_logo.png";
import "./ErrorPage.scss";

const basePath =import.meta.env.REACT_APP_BASE_PATH;

const ErrorPage = () => {
  const navigate = useNavigate();
  let timer = 5000;

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     navigate("/lien-ket-vung");
  //   }, timer);
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [navigate, timer]);

  return (
    <section className="ErrorPage_wrapper w-screen h-full md:h-screen absolute">
      <div className="w-full h-full absolute bg-black/80 backdrop-blur-sm"></div>
      {/* Background border */}
      <img
        className="absolute p-10 w-full h-full hidden md:block"
        src={loading_border}
        alt="loading_border"
      />
      {/* body */}
      <div className="absolute z-10 grid grid-rows-[30%_70%] md:grid-rows-none md:grid-cols-2 place-items-center w-full h-full p-10 md:p-20">
        <img
          className="flex justify-center items-center object-contain"
          src={lapura_logo}
          alt="lapura_logo"
        />
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h1 className="text-2xl md:text-4xl uppercase text-white">
            Không tìm thấy trang
          </h1>
          <p className="text-white text-base md:text-xl">
            Trang bạn đang tìm kiếm không tồn tại.
          </p>
          <button
            className="flex px-10 bg-sub justify-center items-center gap-5"
            onClick={() => navigate(`${basePath}/toan-canh`)}
          >
            <p className="text-white font-medium">Về lại trang chủ</p>
            <p>Next icon</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
