import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.scss";
//import loading_border from "../../assets/images/loading-border.png";
import logo from "../../media/logo_2.png";

const LoadingPage = () => {
  const navigate = useNavigate();
  let timer = 2000;

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/toan-canh");
    }, timer);
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate, timer]);

  return (
    <section className="LoadingPage_wrapper w-screen h-screen fixed inset-0">
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
        <img src={logo} alt="logo" className="w-20 h-2w-20 object-contain" />
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
