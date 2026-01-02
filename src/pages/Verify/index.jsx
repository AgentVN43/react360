import React from "react";
// import "./Verify.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const basePath =import.meta.env.REACT_APP_BASE_PATH;

const Verify = ({ setCheckVerify }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleCheckVerify = () => {
    if (inputValue === "L@pur@#0425") {
      setCheckVerify(true);
      navigate(`${basePath}/`);
    } else {
      alert("Bạn Đã Nhập Sai, Vui Lòng Nhập Lại");
    }
  };
  return (
    <section className="Verify_wrapper flex flex-col justify-center items-center h-screen w-full absolute bg-[url('assets/images/bg_loading.png')] bg-center bg-cover bg-no-repeat">
      <div className="Verify_form flex items-center flex-col justify-around w-[90%] md:w-[450px] bg-white rounded-xl p-5 gap-5">
        <div className="title text-xl font-bold text-black py-2">MÃ XÁC NHẬN</div>
        <p className="message text-center">Vui Lòng Nhập Mã Xác Nhận Để Tiếp Tục</p>
        <div className="inputs ">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            id="input1"
            type="text"
            maxLength="16"
            placeholder="Nhập mã xác nhận"
            className="border-b-2  focus:outline-none focus:border-primary text-center "
          />
        </div>
        <button
          type="submit"
          className="action text-white bg-primary p-2 rounded-xl"
          onClick={() => handleCheckVerify()}
        >
          Xác Nhận
        </button>
      </div>
    </section>
  );
};

export default Verify;
