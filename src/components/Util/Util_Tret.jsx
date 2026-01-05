import React, { useEffect, useRef } from "react";
import tang_tret from "../../assets/images/utils/tang_tret.png";
import { plan_filter } from "../../data/data";

const UtilTret = ({ hoveredUtilItem, scale, setCurrentMedia }) => {
  const utilRef = useRef(null);

  useEffect(() => {
    const utilElement = utilRef.current;

    // change scale of utilElement
    utilElement.style.transform = `scale(${scale})`;

    return () => {
      utilElement.style.transform = `scale(1)`;
    };
  }, [scale]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        left: document.body.scrollWidth / 4,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return (
    <div
      className="w-full h-full relative transition-all duration-300"
      ref={utilRef}
    >
      {/* Ảnh bản đồ */}
      <img
        className={`h-full w-full object-contain absolute`}
        src={tang_tret}
        alt="util_image"
      />
      <svg
        className={`h-full w-full object-contain absolute`}
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[1 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 1
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="987" cy="792" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="987"
            cy="792"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[0].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[0]);
            }}
          />
          <path
            d="M988.866 787.545V797H986.867V789.443H986.812L984.647 790.8V789.027L986.987 787.545H988.866Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[2 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 2
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="957" cy="720" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="957"
            cy="720"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[1].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[1]);
            }}
          />
          <path
            d="M953.839 725V723.56L957.204 720.444C957.49 720.167 957.73 719.917 957.924 719.696C958.121 719.474 958.271 719.257 958.372 719.045C958.474 718.829 958.524 718.597 958.524 718.348C958.524 718.071 958.461 717.832 958.335 717.632C958.209 717.429 958.037 717.274 957.818 717.166C957.6 717.055 957.352 717 957.075 717C956.786 717 956.533 717.058 956.318 717.175C956.102 717.292 955.936 717.46 955.819 717.678C955.702 717.897 955.644 718.157 955.644 718.458H953.746C953.746 717.84 953.886 717.303 954.167 716.847C954.447 716.392 954.839 716.039 955.344 715.79C955.848 715.541 956.43 715.416 957.089 715.416C957.766 715.416 958.355 715.536 958.857 715.776C959.362 716.013 959.754 716.343 960.034 716.764C960.314 717.186 960.454 717.669 960.454 718.214C960.454 718.571 960.383 718.923 960.242 719.271C960.103 719.619 959.856 720.005 959.499 720.43C959.142 720.851 958.638 721.358 957.989 721.949L956.609 723.301V723.366H960.579V725H953.839Z"
            fill="white"
          />
          <circle
            cx="1017"
            cy="720"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1017"
            cy="720"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[1].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[1]);
            }}
          />
          <path
            d="M1013.84 725V723.56L1017.2 720.444C1017.49 720.167 1017.73 719.917 1017.92 719.696C1018.12 719.474 1018.27 719.257 1018.37 719.045C1018.47 718.829 1018.52 718.597 1018.52 718.348C1018.52 718.071 1018.46 717.832 1018.34 717.632C1018.21 717.429 1018.04 717.274 1017.82 717.166C1017.6 717.055 1017.35 717 1017.07 717C1016.79 717 1016.53 717.058 1016.32 717.175C1016.1 717.292 1015.94 717.46 1015.82 717.678C1015.7 717.897 1015.64 718.157 1015.64 718.458H1013.75C1013.75 717.84 1013.89 717.303 1014.17 716.847C1014.45 716.392 1014.84 716.039 1015.34 715.79C1015.85 715.541 1016.43 715.416 1017.09 715.416C1017.77 715.416 1018.36 715.536 1018.86 715.776C1019.36 716.013 1019.75 716.343 1020.03 716.764C1020.31 717.186 1020.45 717.669 1020.45 718.214C1020.45 718.571 1020.38 718.923 1020.24 719.271C1020.1 719.619 1019.86 720.005 1019.5 720.43C1019.14 720.851 1018.64 721.358 1017.99 721.949L1016.61 723.301V723.366H1020.58V725H1013.84Z"
            fill="white"
          />
          <circle cx="957" cy="479" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="957"
            cy="479"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[1].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[1]);
            }}
          />
          <path
            d="M953.839 484V482.56L957.204 479.444C957.49 479.167 957.73 478.917 957.924 478.696C958.121 478.474 958.271 478.257 958.372 478.045C958.474 477.829 958.524 477.597 958.524 477.348C958.524 477.071 958.461 476.832 958.335 476.632C958.209 476.429 958.037 476.274 957.818 476.166C957.6 476.055 957.352 476 957.075 476C956.786 476 956.533 476.058 956.318 476.175C956.102 476.292 955.936 476.46 955.819 476.678C955.702 476.897 955.644 477.157 955.644 477.458H953.746C953.746 476.84 953.886 476.303 954.167 475.847C954.447 475.392 954.839 475.039 955.344 474.79C955.848 474.541 956.43 474.416 957.089 474.416C957.766 474.416 958.355 474.536 958.857 474.776C959.362 475.013 959.754 475.343 960.034 475.764C960.314 476.186 960.454 476.669 960.454 477.214C960.454 477.571 960.383 477.923 960.242 478.271C960.103 478.619 959.856 479.005 959.499 479.43C959.142 479.851 958.638 480.358 957.989 480.949L956.609 482.301V482.366H960.579V484H953.839Z"
            fill="white"
          />
          <circle
            cx="1017"
            cy="479"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1017"
            cy="479"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[1].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[1]);
            }}
          />
          <path
            d="M1013.84 484V482.56L1017.2 479.444C1017.49 479.167 1017.73 478.917 1017.92 478.696C1018.12 478.474 1018.27 478.257 1018.37 478.045C1018.47 477.829 1018.52 477.597 1018.52 477.348C1018.52 477.071 1018.46 476.832 1018.34 476.632C1018.21 476.429 1018.04 476.274 1017.82 476.166C1017.6 476.055 1017.35 476 1017.07 476C1016.79 476 1016.53 476.058 1016.32 476.175C1016.1 476.292 1015.94 476.46 1015.82 476.678C1015.7 476.897 1015.64 477.157 1015.64 477.458H1013.75C1013.75 476.84 1013.89 476.303 1014.17 475.847C1014.45 475.392 1014.84 475.039 1015.34 474.79C1015.85 474.541 1016.43 474.416 1017.09 474.416C1017.77 474.416 1018.36 474.536 1018.86 474.776C1019.36 475.013 1019.75 475.343 1020.03 475.764C1020.31 476.186 1020.45 476.669 1020.45 477.214C1020.45 477.571 1020.38 477.923 1020.24 478.271C1020.1 478.619 1019.86 479.005 1019.5 479.43C1019.14 479.851 1018.64 480.358 1017.99 480.949L1016.61 482.301V482.366H1020.58V484H1013.84Z"
            fill="white"
          />
          "
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[3 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 3
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="989" cy="573" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="989"
            cy="573"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[2].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[2]);
            }}
          />
          <path
            d="M989.143 578.129C988.454 578.129 987.84 578.011 987.301 577.774C986.766 577.534 986.342 577.204 986.032 576.786C985.724 576.364 985.565 575.878 985.556 575.327H987.569C987.581 575.558 987.657 575.761 987.795 575.936C987.937 576.109 988.124 576.243 988.358 576.338C988.592 576.433 988.855 576.481 989.148 576.481C989.452 576.481 989.722 576.427 989.956 576.32C990.189 576.212 990.373 576.063 990.505 575.872C990.637 575.681 990.703 575.461 990.703 575.212C990.703 574.959 990.633 574.736 990.491 574.542C990.353 574.345 990.152 574.191 989.891 574.081C989.632 573.97 989.325 573.914 988.968 573.914H988.086V572.446H988.968C989.269 572.446 989.535 572.394 989.766 572.289C990 572.185 990.182 572.04 990.311 571.855C990.44 571.668 990.505 571.449 990.505 571.2C990.505 570.963 990.448 570.755 990.334 570.577C990.223 570.395 990.066 570.254 989.863 570.152C989.663 570.05 989.429 570 989.161 570C988.891 570 988.643 570.049 988.418 570.147C988.194 570.243 988.014 570.38 987.878 570.558C987.743 570.737 987.67 570.946 987.661 571.186H985.745C985.755 570.641 985.91 570.161 986.212 569.746C986.513 569.33 986.919 569.006 987.43 568.772C987.944 568.535 988.524 568.416 989.171 568.416C989.823 568.416 990.394 568.535 990.883 568.772C991.373 569.009 991.753 569.329 992.024 569.732C992.298 570.132 992.433 570.581 992.43 571.08C992.433 571.609 992.268 572.051 991.936 572.405C991.607 572.759 991.177 572.983 990.648 573.079V573.153C991.344 573.242 991.873 573.484 992.236 573.877C992.602 574.268 992.784 574.758 992.781 575.346C992.784 575.884 992.628 576.363 992.315 576.781C992.004 577.2 991.574 577.529 991.027 577.769C990.479 578.009 989.851 578.129 989.143 578.129Z"
            fill="white"
          />
          <circle cx="992" cy="662" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="992"
            cy="662"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[2].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[2]);
            }}
          />
          <path
            d="M992.143 667.129C991.454 667.129 990.84 667.011 990.301 666.774C989.766 666.534 989.342 666.204 989.032 665.786C988.724 665.364 988.565 664.878 988.556 664.327H990.569C990.581 664.558 990.657 664.761 990.795 664.936C990.937 665.109 991.124 665.243 991.358 665.338C991.592 665.433 991.855 665.481 992.148 665.481C992.452 665.481 992.722 665.427 992.956 665.32C993.189 665.212 993.373 665.063 993.505 664.872C993.637 664.681 993.703 664.461 993.703 664.212C993.703 663.959 993.633 663.736 993.491 663.542C993.353 663.345 993.152 663.191 992.891 663.081C992.632 662.97 992.325 662.914 991.968 662.914H991.086V661.446H991.968C992.269 661.446 992.535 661.394 992.766 661.289C993 661.185 993.182 661.04 993.311 660.855C993.44 660.668 993.505 660.449 993.505 660.2C993.505 659.963 993.448 659.755 993.334 659.577C993.223 659.395 993.066 659.254 992.863 659.152C992.663 659.05 992.429 659 992.161 659C991.891 659 991.643 659.049 991.418 659.147C991.194 659.243 991.014 659.38 990.878 659.558C990.743 659.737 990.67 659.946 990.661 660.186H988.745C988.755 659.641 988.91 659.161 989.212 658.746C989.513 658.33 989.919 658.006 990.43 657.772C990.944 657.535 991.524 657.416 992.171 657.416C992.823 657.416 993.394 657.535 993.883 657.772C994.373 658.009 994.753 658.329 995.024 658.732C995.298 659.132 995.433 659.581 995.43 660.08C995.433 660.609 995.268 661.051 994.936 661.405C994.607 661.759 994.177 661.983 993.648 662.079V662.153C994.344 662.242 994.873 662.484 995.236 662.877C995.602 663.268 995.784 663.758 995.781 664.346C995.784 664.884 995.628 665.363 995.315 665.781C995.004 666.2 994.574 666.529 994.027 666.769C993.479 667.009 992.851 667.129 992.143 667.129Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[4 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 4
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="987" cy="444" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="987"
            cy="444"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[3].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[3]);
            }}
          />
          <path
            d="M983.385 447.338V445.764L987.332 439.545H988.689V441.724H987.886L985.397 445.662V445.736H991.006V447.338H983.385ZM987.923 449V446.858L987.96 446.161V439.545H989.834V449H987.923Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[5 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 5
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="989" cy="361" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="989"
            cy="361"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[4].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[4]);
            }}
          />
          <path
            d="M989.197 366.129C988.544 366.129 987.963 366.009 987.452 365.769C986.944 365.529 986.541 365.198 986.242 364.777C985.944 364.355 985.788 363.872 985.776 363.327H987.715C987.736 363.693 987.89 363.99 988.176 364.218C988.463 364.446 988.803 364.56 989.197 364.56C989.511 364.56 989.788 364.49 990.028 364.352C990.271 364.21 990.46 364.015 990.595 363.766C990.734 363.513 990.803 363.224 990.803 362.898C990.803 362.565 990.732 362.273 990.591 362.021C990.452 361.768 990.26 361.571 990.014 361.43C989.768 361.288 989.486 361.216 989.169 361.213C988.892 361.213 988.623 361.27 988.361 361.384C988.103 361.497 987.901 361.653 987.756 361.85L985.979 361.531L986.427 356.545H992.207V358.18H988.075L987.83 360.548H987.886C988.052 360.314 988.303 360.12 988.638 359.966C988.974 359.812 989.349 359.735 989.765 359.735C990.334 359.735 990.842 359.869 991.288 360.137C991.734 360.405 992.087 360.773 992.345 361.24C992.604 361.705 992.731 362.241 992.728 362.847C992.731 363.484 992.584 364.05 992.285 364.546C991.99 365.038 991.576 365.426 991.043 365.709C990.514 365.989 989.898 366.129 989.197 366.129Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[6 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 6
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="962" cy="264" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="962"
            cy="264"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[5].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[5]);
            }}
          />
          <path
            d="M962.271 269.129C961.784 269.126 961.315 269.045 960.863 268.885C960.413 268.725 960.01 268.464 959.653 268.104C959.296 267.744 959.013 267.267 958.804 266.673C958.597 266.079 958.494 265.35 958.494 264.485C958.497 263.691 958.588 262.982 958.767 262.357C958.948 261.729 959.207 261.197 959.542 260.76C959.881 260.323 960.285 259.99 960.756 259.762C961.227 259.532 961.755 259.416 962.34 259.416C962.971 259.416 963.528 259.539 964.011 259.786C964.494 260.029 964.882 260.359 965.174 260.778C965.47 261.197 965.648 261.666 965.71 262.186H963.739C963.662 261.857 963.5 261.598 963.254 261.411C963.008 261.223 962.703 261.129 962.34 261.129C961.724 261.129 961.256 261.397 960.936 261.932C960.619 262.468 960.458 263.196 960.452 264.116H960.516C960.658 263.836 960.849 263.597 961.089 263.4C961.332 263.2 961.607 263.048 961.915 262.943C962.226 262.835 962.554 262.782 962.898 262.782C963.459 262.782 963.957 262.914 964.394 263.179C964.831 263.44 965.176 263.8 965.428 264.259C965.681 264.717 965.807 265.242 965.807 265.833C965.807 266.473 965.657 267.043 965.359 267.541C965.064 268.04 964.65 268.431 964.117 268.714C963.588 268.994 962.972 269.132 962.271 269.129ZM962.261 267.56C962.569 267.56 962.845 267.486 963.088 267.338C963.331 267.19 963.522 266.99 963.66 266.738C963.799 266.486 963.868 266.202 963.868 265.888C963.868 265.575 963.799 265.293 963.66 265.044C963.525 264.794 963.337 264.596 963.097 264.448C962.857 264.3 962.583 264.227 962.275 264.227C962.044 264.227 961.83 264.27 961.633 264.356C961.44 264.442 961.269 264.562 961.121 264.716C960.976 264.87 960.863 265.048 960.779 265.251C960.696 265.451 960.655 265.665 960.655 265.893C960.655 266.198 960.724 266.476 960.863 266.729C961.004 266.981 961.195 267.183 961.435 267.333C961.678 267.484 961.954 267.56 962.261 267.56Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[7 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 7
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="690" cy="547" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="690"
            cy="547"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[6].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[6]);
            }}
          />
          <path
            d="M687.441 552L691.361 544.244V544.18H686.795V542.545H693.429V544.203L689.505 552H687.441Z"
            fill="white"
          />
          <circle cx="676" cy="777" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="676"
            cy="777"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[6].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[6]);
            }}
          />
          <path
            d="M673.441 782L677.361 774.244V774.18H672.795V772.545H679.429V774.203L675.505 782H673.441Z"
            fill="white"
          />
          <circle cx="706" cy="371" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="706"
            cy="371"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[6].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[6]);
            }}
          />
          <path
            d="M703.441 376L707.361 368.244V368.18H702.795V366.545H709.429V368.203L705.505 376H703.441Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[8 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 8
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="818" cy="753" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="818"
            cy="753"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[7].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[7]);
            }}
          />
          <path
            d="M818.163 758.129C817.452 758.129 816.819 758.014 816.265 757.783C815.714 757.549 815.282 757.231 814.968 756.827C814.654 756.424 814.497 755.967 814.497 755.456C814.497 755.062 814.586 754.701 814.765 754.371C814.946 754.039 815.193 753.764 815.504 753.545C815.814 753.324 816.162 753.182 816.547 753.12V753.056C816.042 752.954 815.633 752.71 815.319 752.322C815.005 751.931 814.848 751.477 814.848 750.96C814.848 750.471 814.991 750.035 815.277 749.653C815.564 749.269 815.956 748.967 816.455 748.749C816.956 748.527 817.526 748.416 818.163 748.416C818.8 748.416 819.368 748.527 819.866 748.749C820.368 748.97 820.762 749.273 821.048 749.658C821.334 750.04 821.479 750.474 821.482 750.96C821.479 751.48 821.319 751.934 821.002 752.322C820.685 752.71 820.279 752.954 819.783 753.056V753.12C820.162 753.182 820.505 753.324 820.812 753.545C821.123 753.764 821.37 754.039 821.551 754.371C821.736 754.701 821.83 755.062 821.833 755.456C821.83 755.967 821.671 756.424 821.357 756.827C821.043 757.231 820.609 757.549 820.055 757.783C819.504 758.014 818.874 758.129 818.163 758.129ZM818.163 756.661C818.48 756.661 818.757 756.604 818.994 756.49C819.231 756.373 819.415 756.213 819.548 756.01C819.683 755.804 819.751 755.567 819.751 755.299C819.751 755.025 819.681 754.784 819.543 754.575C819.404 754.362 819.217 754.196 818.98 754.076C818.743 753.953 818.47 753.891 818.163 753.891C817.858 753.891 817.586 753.953 817.346 754.076C817.105 754.196 816.916 754.362 816.778 754.575C816.642 754.784 816.575 755.025 816.575 755.299C816.575 755.567 816.641 755.804 816.773 756.01C816.905 756.213 817.092 756.373 817.332 756.49C817.572 756.604 817.849 756.661 818.163 756.661ZM818.163 752.437C818.427 752.437 818.663 752.383 818.869 752.276C819.075 752.168 819.237 752.019 819.354 751.828C819.471 751.637 819.529 751.417 819.529 751.168C819.529 750.921 819.471 750.706 819.354 750.521C819.237 750.334 819.077 750.187 818.874 750.083C818.67 749.975 818.433 749.921 818.163 749.921C817.895 749.921 817.658 749.975 817.452 750.083C817.245 750.187 817.084 750.334 816.967 750.521C816.853 750.706 816.796 750.921 816.796 751.168C816.796 751.417 816.855 751.637 816.972 751.828C817.089 752.019 817.25 752.168 817.456 752.276C817.663 752.383 817.898 752.437 818.163 752.437Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[9 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 9
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            circle
            cx="1157"
            cy="705"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1157"
            cy="705"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[8].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[8]);
            }}
          />
          <path
            d="M1156.62 700.416C1157.1 700.416 1157.57 700.498 1158.02 700.661C1158.47 700.824 1158.88 701.084 1159.23 701.441C1159.59 701.798 1159.87 702.272 1160.08 702.863C1160.29 703.451 1160.39 704.172 1160.39 705.028C1160.39 705.831 1160.3 706.548 1160.12 707.179C1159.94 707.807 1159.69 708.341 1159.35 708.781C1159.02 709.221 1158.61 709.557 1158.14 709.788C1157.66 710.015 1157.13 710.129 1156.55 710.129C1155.92 710.129 1155.36 710.008 1154.88 709.765C1154.39 709.518 1154.01 709.184 1153.71 708.763C1153.42 708.338 1153.24 707.861 1153.18 707.332H1155.15C1155.23 707.676 1155.39 707.944 1155.64 708.135C1155.88 708.323 1156.19 708.417 1156.55 708.417C1157.16 708.417 1157.63 708.149 1157.95 707.613C1158.27 707.075 1158.43 706.338 1158.44 705.402H1158.37C1158.23 705.679 1158.04 705.917 1157.8 706.118C1157.56 706.315 1157.28 706.467 1156.97 706.575C1156.67 706.682 1156.34 706.736 1155.99 706.736C1155.43 706.736 1154.94 706.605 1154.5 706.344C1154.06 706.082 1153.72 705.722 1153.47 705.263C1153.21 704.805 1153.09 704.282 1153.09 703.694C1153.08 703.06 1153.23 702.495 1153.53 702C1153.82 701.504 1154.23 701.116 1154.76 700.836C1155.29 700.553 1155.91 700.413 1156.62 700.416ZM1156.63 701.986C1156.32 701.986 1156.04 702.06 1155.8 702.207C1155.56 702.355 1155.37 702.554 1155.23 702.803C1155.09 703.052 1155.02 703.331 1155.03 703.638C1155.03 703.949 1155.09 704.229 1155.23 704.479C1155.37 704.725 1155.56 704.922 1155.79 705.07C1156.03 705.214 1156.31 705.287 1156.61 705.287C1156.84 705.287 1157.06 705.243 1157.26 705.157C1157.45 705.071 1157.62 704.953 1157.77 704.802C1157.92 704.648 1158.03 704.471 1158.11 704.271C1158.2 704.071 1158.24 703.859 1158.24 703.634C1158.24 703.335 1158.16 703.061 1158.03 702.812C1157.89 702.563 1157.7 702.363 1157.45 702.212C1157.21 702.061 1156.94 701.986 1156.63 701.986Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[10 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 10
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="809" cy="667" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="809"
            cy="667"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[9].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[9]);
            }}
          />
          <path
            d="M806.391 662.545V672H804.392V664.443H804.337L802.172 665.8V664.027L804.512 662.545H806.391ZM812.345 672.208C811.551 672.205 810.868 672.009 810.295 671.621C809.726 671.234 809.287 670.672 808.98 669.936C808.675 669.201 808.524 668.316 808.527 667.282C808.527 666.251 808.68 665.372 808.984 664.646C809.292 663.92 809.731 663.367 810.3 662.989C810.872 662.607 811.554 662.416 812.345 662.416C813.136 662.416 813.816 662.607 814.386 662.989C814.958 663.37 815.398 663.924 815.706 664.651C816.014 665.374 816.166 666.251 816.163 667.282C816.163 668.319 816.009 669.205 815.701 669.941C815.397 670.677 814.96 671.238 814.39 671.626C813.821 672.014 813.139 672.208 812.345 672.208ZM812.345 670.55C812.887 670.55 813.319 670.278 813.642 669.733C813.965 669.189 814.126 668.371 814.122 667.282C814.122 666.565 814.049 665.968 813.901 665.491C813.756 665.014 813.55 664.655 813.282 664.415C813.018 664.175 812.705 664.055 812.345 664.055C811.807 664.055 811.376 664.324 811.052 664.863C810.729 665.402 810.566 666.208 810.563 667.282C810.563 668.008 810.635 668.615 810.78 669.101C810.928 669.584 811.136 669.947 811.403 670.19C811.671 670.43 811.985 670.55 812.345 670.55Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[11 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 11
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1180"
            cy="628"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1180"
            cy="628"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[10].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[10]);
            }}
          />
          <path
            d="M1178.69 623.545V633H1176.69V625.443H1176.63L1174.47 626.8V625.027L1176.81 623.545H1178.69ZM1185.05 623.545V633H1183.05V625.443H1182.99L1180.83 626.8V625.027L1183.17 623.545H1185.05Z"
            fill="white"
          />
          <circle cx="827" cy="633" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="827"
            cy="633"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[10].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[10]);
            }}
          />
          <path
            d="M825.686 628.545V638H823.687V630.443H823.632L821.466 631.8V630.027L823.807 628.545H825.686ZM832.046 628.545V638H830.047V630.443H829.992L827.827 631.8V630.027L830.167 628.545H832.046Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[12 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 12
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="809" cy="603" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="809"
            cy="603"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[11].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[11]);
            }}
          />
          <path
            d="M806.772 598.545V608H804.773V600.443H804.718L802.552 601.8V600.027L804.893 598.545H806.772ZM809.019 608V606.56L812.384 603.444C812.671 603.167 812.911 602.917 813.105 602.696C813.301 602.474 813.451 602.257 813.552 602.045C813.654 601.829 813.705 601.597 813.705 601.348C813.705 601.071 813.642 600.832 813.515 600.632C813.389 600.429 813.217 600.274 812.998 600.166C812.78 600.055 812.532 600 812.255 600C811.966 600 811.713 600.058 811.498 600.175C811.283 600.292 811.116 600.46 810.999 600.678C810.882 600.897 810.824 601.157 810.824 601.458H808.927C808.927 600.84 809.067 600.303 809.347 599.847C809.627 599.392 810.019 599.039 810.524 598.79C811.029 598.541 811.61 598.416 812.269 598.416C812.946 598.416 813.535 598.536 814.037 598.776C814.542 599.013 814.934 599.343 815.214 599.764C815.494 600.186 815.634 600.669 815.634 601.214C815.634 601.571 815.564 601.923 815.422 602.271C815.283 602.619 815.036 603.005 814.679 603.43C814.322 603.851 813.819 604.358 813.169 604.949L811.789 606.301V606.366H815.759V608H809.019Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[13 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 13
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="839" cy="544" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="839"
            cy="544"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[12].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[12]);
            }}
          />
          <path
            d="M836.581 539.545V549H834.583V541.443H834.527L832.362 542.8V541.027L834.703 539.545H836.581ZM842.323 549.129C841.634 549.129 841.02 549.011 840.481 548.774C839.946 548.534 839.523 548.204 839.212 547.786C838.904 547.364 838.745 546.878 838.736 546.327H840.749C840.761 546.558 840.837 546.761 840.975 546.936C841.117 547.109 841.304 547.243 841.538 547.338C841.772 547.433 842.035 547.481 842.328 547.481C842.632 547.481 842.902 547.427 843.136 547.32C843.37 547.212 843.553 547.063 843.685 546.872C843.817 546.681 843.884 546.461 843.884 546.212C843.884 545.959 843.813 545.736 843.671 545.542C843.533 545.345 843.333 545.191 843.071 545.081C842.813 544.97 842.505 544.914 842.148 544.914H841.266V543.446H842.148C842.449 543.446 842.716 543.394 842.946 543.289C843.18 543.185 843.362 543.04 843.491 542.855C843.62 542.668 843.685 542.449 843.685 542.2C843.685 541.963 843.628 541.755 843.514 541.577C843.403 541.395 843.246 541.254 843.043 541.152C842.843 541.05 842.609 541 842.342 541C842.071 541 841.823 541.049 841.598 541.147C841.374 541.243 841.194 541.38 841.058 541.558C840.923 541.737 840.851 541.946 840.841 542.186H838.925C838.935 541.641 839.09 541.161 839.392 540.746C839.693 540.33 840.1 540.006 840.61 539.772C841.124 539.535 841.705 539.416 842.351 539.416C843.003 539.416 843.574 539.535 844.064 539.772C844.553 540.009 844.933 540.329 845.204 540.732C845.478 541.132 845.613 541.581 845.61 542.08C845.613 542.609 845.449 543.051 845.116 543.405C844.787 543.759 844.358 543.983 843.828 544.079V544.153C844.524 544.242 845.053 544.484 845.416 544.877C845.782 545.268 845.964 545.758 845.961 546.346C845.964 546.884 845.809 547.363 845.495 547.781C845.184 548.2 844.755 548.529 844.207 548.769C843.659 549.009 843.031 549.129 842.323 549.129Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[14 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 14
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="818" cy="469" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="818"
            cy="469"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[13].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[13]);
            }}
          />
          <path
            d="M815.461 464.545V474H813.462V466.443H813.407L811.241 467.8V466.027L813.582 464.545H815.461ZM817.565 472.338V470.764L821.512 464.545H822.869V466.724H822.066L819.578 470.662V470.736H825.187V472.338H817.565ZM822.103 474V471.858L822.14 471.161V464.545H824.014V474H822.103Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[15 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 15
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1160"
            cy="762"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1160"
            cy="762"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[14].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[14]);
            }}
          />
          <path
            d="M1157.68 757.545V767H1155.68V759.443H1155.62L1153.46 760.8V759.027L1155.8 757.545H1157.68ZM1163.38 767.129C1162.72 767.129 1162.14 767.009 1161.63 766.769C1161.12 766.529 1160.72 766.198 1160.42 765.777C1160.12 765.355 1159.97 764.872 1159.96 764.327H1161.89C1161.92 764.693 1162.07 764.99 1162.36 765.218C1162.64 765.446 1162.98 765.56 1163.38 765.56C1163.69 765.56 1163.97 765.49 1164.21 765.352C1164.45 765.21 1164.64 765.015 1164.78 764.766C1164.91 764.513 1164.98 764.224 1164.98 763.898C1164.98 763.565 1164.91 763.273 1164.77 763.021C1164.63 762.768 1164.44 762.571 1164.19 762.43C1163.95 762.288 1163.67 762.216 1163.35 762.213C1163.07 762.213 1162.8 762.27 1162.54 762.384C1162.28 762.497 1162.08 762.653 1161.94 762.85L1160.16 762.531L1160.61 757.545H1166.39V759.18H1162.26L1162.01 761.548H1162.07C1162.23 761.314 1162.48 761.12 1162.82 760.966C1163.15 760.812 1163.53 760.735 1163.94 760.735C1164.51 760.735 1165.02 760.869 1165.47 761.137C1165.91 761.405 1166.27 761.773 1166.53 762.24C1166.78 762.705 1166.91 763.241 1166.91 763.847C1166.91 764.484 1166.76 765.05 1166.47 765.546C1166.17 766.038 1165.76 766.426 1165.22 766.709C1164.69 766.989 1164.08 767.129 1163.38 767.129Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[16 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 16
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1156"
            cy="657"
            r="10.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1156"
            cy="657"
            r="10.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[15].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[15]);
            }}
          />
          <path
            d="M1153.93 652.667V660.667H1152.24V654.272H1152.19L1150.36 655.421V653.921L1152.34 652.667H1153.93ZM1158.9 660.776C1158.49 660.774 1158.09 660.705 1157.71 660.569C1157.33 660.434 1156.99 660.214 1156.68 659.909C1156.38 659.604 1156.14 659.201 1155.97 658.698C1155.79 658.195 1155.7 657.578 1155.7 656.846C1155.71 656.175 1155.78 655.574 1155.93 655.046C1156.09 654.514 1156.31 654.064 1156.59 653.694C1156.88 653.324 1157.22 653.043 1157.62 652.85C1158.02 652.655 1158.46 652.557 1158.96 652.557C1159.49 652.557 1159.96 652.662 1160.37 652.87C1160.78 653.076 1161.11 653.356 1161.36 653.71C1161.61 654.064 1161.76 654.461 1161.81 654.901H1160.14C1160.08 654.622 1159.94 654.404 1159.73 654.245C1159.52 654.086 1159.27 654.007 1158.96 654.007C1158.44 654.007 1158.04 654.233 1157.77 654.686C1157.5 655.139 1157.37 655.755 1157.36 656.534H1157.42C1157.53 656.297 1157.7 656.095 1157.9 655.928C1158.11 655.759 1158.34 655.63 1158.6 655.542C1158.86 655.451 1159.14 655.405 1159.43 655.405C1159.9 655.405 1160.33 655.517 1160.7 655.741C1161.07 655.962 1161.36 656.267 1161.57 656.655C1161.78 657.043 1161.89 657.487 1161.89 657.987C1161.89 658.529 1161.77 659.01 1161.51 659.432C1161.26 659.854 1160.91 660.185 1160.46 660.425C1160.01 660.662 1159.49 660.779 1158.9 660.776ZM1158.89 659.448C1159.15 659.448 1159.39 659.385 1159.59 659.26C1159.8 659.135 1159.96 658.966 1160.08 658.753C1160.19 658.539 1160.25 658.3 1160.25 658.034C1160.25 657.768 1160.19 657.53 1160.08 657.319C1159.96 657.108 1159.8 656.94 1159.6 656.815C1159.4 656.69 1159.16 656.628 1158.9 656.628C1158.71 656.628 1158.53 656.664 1158.36 656.737C1158.2 656.81 1158.05 656.912 1157.93 657.042C1157.8 657.172 1157.71 657.323 1157.64 657.495C1157.57 657.664 1157.53 657.845 1157.53 658.038C1157.53 658.296 1157.59 658.531 1157.71 658.745C1157.83 658.958 1157.99 659.129 1158.19 659.257C1158.4 659.384 1158.63 659.448 1158.89 659.448Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[17 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 17
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1153"
            cy="576"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1153"
            cy="576"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[16].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[16]);
            }}
          />
          <path
            d="M1151 571.545V581H1149V573.443H1148.95L1146.78 574.8V573.027L1149.12 571.545H1151ZM1153.62 581L1157.54 573.244V573.18H1152.98V571.545H1159.61V573.203L1155.68 581H1153.62Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[18 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 18
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1156"
            cy="474"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1156"
            cy="474"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[17].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[17]);
            }}
          />
          <path
            d="M1153.57 469.545V479H1151.57V471.443H1151.51L1149.35 472.8V471.027L1151.69 469.545H1153.57ZM1159.34 479.129C1158.63 479.129 1158 479.014 1157.45 478.783C1156.89 478.549 1156.46 478.231 1156.15 477.827C1155.83 477.424 1155.68 476.967 1155.68 476.456C1155.68 476.062 1155.77 475.701 1155.95 475.371C1156.13 475.039 1156.37 474.764 1156.68 474.545C1156.99 474.324 1157.34 474.182 1157.73 474.12V474.056C1157.22 473.954 1156.81 473.71 1156.5 473.322C1156.19 472.931 1156.03 472.477 1156.03 471.96C1156.03 471.471 1156.17 471.035 1156.46 470.653C1156.74 470.269 1157.14 469.967 1157.63 469.749C1158.14 469.527 1158.71 469.416 1159.34 469.416C1159.98 469.416 1160.55 469.527 1161.05 469.749C1161.55 469.97 1161.94 470.273 1162.23 470.658C1162.51 471.04 1162.66 471.474 1162.66 471.96C1162.66 472.48 1162.5 472.934 1162.18 473.322C1161.86 473.71 1161.46 473.954 1160.96 474.056V474.12C1161.34 474.182 1161.68 474.324 1161.99 474.545C1162.3 474.764 1162.55 475.039 1162.73 475.371C1162.92 475.701 1163.01 476.062 1163.01 476.456C1163.01 476.967 1162.85 477.424 1162.54 477.827C1162.22 478.231 1161.79 478.549 1161.24 478.783C1160.68 479.014 1160.05 479.129 1159.34 479.129ZM1159.34 477.661C1159.66 477.661 1159.94 477.604 1160.17 477.49C1160.41 477.373 1160.6 477.213 1160.73 477.01C1160.86 476.804 1160.93 476.567 1160.93 476.299C1160.93 476.025 1160.86 475.784 1160.72 475.575C1160.58 475.362 1160.4 475.196 1160.16 475.076C1159.92 474.953 1159.65 474.891 1159.34 474.891C1159.04 474.891 1158.77 474.953 1158.53 475.076C1158.29 475.196 1158.1 475.362 1157.96 475.575C1157.82 475.784 1157.75 476.025 1157.75 476.299C1157.75 476.567 1157.82 476.804 1157.95 477.01C1158.09 477.213 1158.27 477.373 1158.51 477.49C1158.75 477.604 1159.03 477.661 1159.34 477.661ZM1159.34 473.437C1159.61 473.437 1159.84 473.383 1160.05 473.276C1160.26 473.168 1160.42 473.019 1160.53 472.828C1160.65 472.637 1160.71 472.417 1160.71 472.168C1160.71 471.921 1160.65 471.706 1160.53 471.521C1160.42 471.334 1160.26 471.187 1160.05 471.083C1159.85 470.975 1159.61 470.921 1159.34 470.921C1159.08 470.921 1158.84 470.975 1158.63 471.083C1158.43 471.187 1158.26 471.334 1158.15 471.521C1158.03 471.706 1157.98 471.921 1157.98 472.168C1157.98 472.417 1158.03 472.637 1158.15 472.828C1158.27 473.019 1158.43 473.168 1158.64 473.276C1158.84 473.383 1159.08 473.437 1159.34 473.437Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[19 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 19
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1295"
            cy="753"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1295"
            cy="753"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[18].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[18]);
            }}
          />
          <path
            d="M1292.58 748.545V758H1290.58V750.443H1290.52L1288.36 751.8V750.027L1290.7 748.545H1292.58ZM1298.24 748.416C1298.73 748.416 1299.2 748.498 1299.65 748.661C1300.1 748.824 1300.5 749.084 1300.86 749.441C1301.21 749.798 1301.49 750.272 1301.7 750.863C1301.91 751.451 1302.02 752.172 1302.02 753.028C1302.02 753.831 1301.93 754.548 1301.75 755.179C1301.57 755.807 1301.31 756.341 1300.98 756.781C1300.64 757.221 1300.24 757.557 1299.76 757.788C1299.29 758.015 1298.76 758.129 1298.17 758.129C1297.54 758.129 1296.99 758.008 1296.5 757.765C1296.02 757.518 1295.63 757.184 1295.33 756.763C1295.04 756.338 1294.87 755.861 1294.8 755.332H1296.77C1296.85 755.676 1297.01 755.944 1297.26 756.135C1297.51 756.323 1297.81 756.417 1298.17 756.417C1298.79 756.417 1299.26 756.149 1299.58 755.613C1299.9 755.075 1300.06 754.338 1300.06 753.402H1300C1299.86 753.679 1299.66 753.917 1299.42 754.118C1299.18 754.315 1298.91 754.467 1298.6 754.575C1298.29 754.682 1297.96 754.736 1297.62 754.736C1297.06 754.736 1296.56 754.605 1296.12 754.344C1295.69 754.082 1295.34 753.722 1295.09 753.263C1294.84 752.805 1294.71 752.282 1294.71 751.694C1294.71 751.06 1294.85 750.495 1295.15 750C1295.45 749.504 1295.86 749.116 1296.39 748.836C1296.92 748.553 1297.54 748.413 1298.24 748.416ZM1298.26 749.986C1297.95 749.986 1297.67 750.06 1297.43 750.207C1297.19 750.355 1296.99 750.554 1296.85 750.803C1296.71 751.052 1296.65 751.331 1296.65 751.638C1296.65 751.949 1296.72 752.229 1296.85 752.479C1296.99 752.725 1297.18 752.922 1297.42 753.07C1297.66 753.214 1297.93 753.287 1298.24 753.287C1298.47 753.287 1298.68 753.243 1298.88 753.157C1299.08 753.071 1299.25 752.953 1299.39 752.802C1299.54 752.648 1299.66 752.471 1299.74 752.271C1299.82 752.071 1299.86 751.859 1299.86 751.634C1299.86 751.335 1299.79 751.061 1299.65 750.812C1299.51 750.563 1299.32 750.363 1299.08 750.212C1298.84 750.061 1298.56 749.986 1298.26 749.986Z"
            fill="white"
          />
          <circle
            cx="1289"
            cy="522"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1289"
            cy="522"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[18].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[18]);
            }}
          />
          <path
            d="M1286.58 517.545V527H1284.58V519.443H1284.52L1282.36 520.8V519.027L1284.7 517.545H1286.58ZM1292.24 517.416C1292.73 517.416 1293.2 517.498 1293.65 517.661C1294.1 517.824 1294.5 518.084 1294.86 518.441C1295.21 518.798 1295.49 519.272 1295.7 519.863C1295.91 520.451 1296.02 521.172 1296.02 522.028C1296.02 522.831 1295.93 523.548 1295.75 524.179C1295.57 524.807 1295.31 525.341 1294.98 525.781C1294.64 526.221 1294.24 526.557 1293.76 526.788C1293.29 527.015 1292.76 527.129 1292.17 527.129C1291.54 527.129 1290.99 527.008 1290.5 526.765C1290.02 526.518 1289.63 526.184 1289.33 525.763C1289.04 525.338 1288.87 524.861 1288.8 524.332H1290.77C1290.85 524.676 1291.01 524.944 1291.26 525.135C1291.51 525.323 1291.81 525.417 1292.17 525.417C1292.79 525.417 1293.26 525.149 1293.58 524.613C1293.9 524.075 1294.06 523.338 1294.06 522.402H1294C1293.86 522.679 1293.66 522.917 1293.42 523.118C1293.18 523.315 1292.91 523.467 1292.6 523.575C1292.29 523.682 1291.96 523.736 1291.62 523.736C1291.06 523.736 1290.56 523.605 1290.12 523.344C1289.69 523.082 1289.34 522.722 1289.09 522.263C1288.84 521.805 1288.71 521.282 1288.71 520.694C1288.71 520.06 1288.85 519.495 1289.15 519C1289.45 518.504 1289.86 518.116 1290.39 517.836C1290.92 517.553 1291.54 517.413 1292.24 517.416ZM1292.26 518.986C1291.95 518.986 1291.67 519.06 1291.43 519.207C1291.19 519.355 1290.99 519.554 1290.85 519.803C1290.71 520.052 1290.65 520.331 1290.65 520.638C1290.65 520.949 1290.72 521.229 1290.85 521.479C1290.99 521.725 1291.18 521.922 1291.42 522.07C1291.66 522.214 1291.93 522.287 1292.24 522.287C1292.47 522.287 1292.68 522.243 1292.88 522.157C1293.08 522.071 1293.25 521.953 1293.39 521.802C1293.54 521.648 1293.66 521.471 1293.74 521.271C1293.82 521.071 1293.86 520.859 1293.86 520.634C1293.86 520.335 1293.79 520.061 1293.65 519.812C1293.51 519.563 1293.32 519.363 1293.08 519.212C1292.84 519.061 1292.56 518.986 1292.26 518.986Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[20 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 20
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1325"
            cy="648"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1325"
            cy="648"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[19].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[19]);
            }}
          />
          <path
            d="M1317.36 653V651.56L1320.73 648.444C1321.02 648.167 1321.26 647.917 1321.45 647.696C1321.65 647.474 1321.8 647.257 1321.9 647.045C1322 646.829 1322.05 646.597 1322.05 646.348C1322.05 646.071 1321.99 645.832 1321.86 645.632C1321.73 645.429 1321.56 645.274 1321.34 645.166C1321.12 645.055 1320.88 645 1320.6 645C1320.31 645 1320.06 645.058 1319.84 645.175C1319.63 645.292 1319.46 645.46 1319.34 645.678C1319.23 645.897 1319.17 646.157 1319.17 646.458H1317.27C1317.27 645.84 1317.41 645.303 1317.69 644.847C1317.97 644.392 1318.36 644.039 1318.87 643.79C1319.37 643.541 1319.96 643.416 1320.61 643.416C1321.29 643.416 1321.88 643.536 1322.38 643.776C1322.89 644.013 1323.28 644.343 1323.56 644.764C1323.84 645.186 1323.98 645.669 1323.98 646.214C1323.98 646.571 1323.91 646.923 1323.77 647.271C1323.63 647.619 1323.38 648.005 1323.02 648.43C1322.67 648.851 1322.16 649.358 1321.51 649.949L1320.13 651.301V651.366H1324.1V653H1317.36ZM1329.26 653.208C1328.47 653.205 1327.78 653.009 1327.21 652.621C1326.64 652.234 1326.2 651.672 1325.89 650.936C1325.59 650.201 1325.44 649.316 1325.44 648.282C1325.44 647.251 1325.59 646.372 1325.9 645.646C1326.21 644.92 1326.64 644.367 1327.21 643.989C1327.79 643.607 1328.47 643.416 1329.26 643.416C1330.05 643.416 1330.73 643.607 1331.3 643.989C1331.87 644.37 1332.31 644.924 1332.62 645.651C1332.93 646.374 1333.08 647.251 1333.08 648.282C1333.08 649.319 1332.92 650.205 1332.62 650.941C1332.31 651.677 1331.87 652.238 1331.3 652.626C1330.73 653.014 1330.05 653.208 1329.26 653.208ZM1329.26 651.55C1329.8 651.55 1330.23 651.278 1330.56 650.733C1330.88 650.189 1331.04 649.371 1331.04 648.282C1331.04 647.565 1330.96 646.968 1330.81 646.491C1330.67 646.014 1330.46 645.655 1330.2 645.415C1329.93 645.175 1329.62 645.055 1329.26 645.055C1328.72 645.055 1328.29 645.324 1327.97 645.863C1327.64 646.402 1327.48 647.208 1327.48 648.282C1327.48 649.008 1327.55 649.615 1327.69 650.101C1327.84 650.584 1328.05 650.947 1328.32 651.19C1328.59 651.43 1328.9 651.55 1329.26 651.55Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[21 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 21
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle
            cx="1053"
            cy="295"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1053"
            cy="295"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[20].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[20]);
            }}
          />
          <path
            d="M1046.66 300V298.56L1050.02 295.444C1050.31 295.167 1050.55 294.917 1050.74 294.696C1050.94 294.474 1051.09 294.257 1051.19 294.045C1051.29 293.829 1051.34 293.597 1051.34 293.348C1051.34 293.071 1051.28 292.832 1051.16 292.632C1051.03 292.429 1050.86 292.274 1050.64 292.166C1050.42 292.055 1050.17 292 1049.89 292C1049.61 292 1049.35 292.058 1049.14 292.175C1048.92 292.292 1048.76 292.46 1048.64 292.678C1048.52 292.897 1048.46 293.157 1048.46 293.458H1046.57C1046.57 292.84 1046.71 292.303 1046.99 291.847C1047.27 291.392 1047.66 291.039 1048.16 290.79C1048.67 290.541 1049.25 290.416 1049.91 290.416C1050.59 290.416 1051.18 290.536 1051.68 290.776C1052.18 291.013 1052.57 291.343 1052.85 291.764C1053.13 292.186 1053.27 292.669 1053.27 293.214C1053.27 293.571 1053.2 293.923 1053.06 294.271C1052.92 294.619 1052.68 295.005 1052.32 295.43C1051.96 295.851 1051.46 296.358 1050.81 296.949L1049.43 298.301V298.366H1053.4V300H1046.66ZM1058.96 290.545V300H1056.96V292.443H1056.91L1054.74 293.8V292.027L1057.08 290.545H1058.96Z"
            fill="white"
          />

          <circle cx="833" cy="356" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="833"
            cy="356"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[20].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[20]);
            }}
          />
          <path
            d="M826.659 361V359.56L830.024 356.444C830.31 356.167 830.55 355.917 830.744 355.696C830.941 355.474 831.09 355.257 831.192 355.045C831.294 354.829 831.344 354.597 831.344 354.348C831.344 354.071 831.281 353.832 831.155 353.632C831.029 353.429 830.857 353.274 830.638 353.166C830.419 353.055 830.172 353 829.895 353C829.605 353 829.353 353.058 829.138 353.175C828.922 353.292 828.756 353.46 828.639 353.678C828.522 353.897 828.464 354.157 828.464 354.458H826.566C826.566 353.84 826.706 353.303 826.986 352.847C827.266 352.392 827.659 352.039 828.164 351.79C828.668 351.541 829.25 351.416 829.909 351.416C830.586 351.416 831.175 351.536 831.677 351.776C832.181 352.013 832.574 352.343 832.854 352.764C833.134 353.186 833.274 353.669 833.274 354.214C833.274 354.571 833.203 354.923 833.062 355.271C832.923 355.619 832.675 356.005 832.318 356.43C831.961 356.851 831.458 357.358 830.809 357.949L829.428 359.301V359.366H833.399V361H826.659ZM838.96 351.545V361H836.961V353.443H836.906L834.741 354.8V353.027L837.081 351.545H838.96Z"
            fill="white"
          />
        </g>
        <g
          className={` ${!plan_filter[0].itemsUtilFilter[0].items[22 - 1].isMedia
            ? "fill-[#a5bc99] hover:fill-[#a5bc99]"
            : hoveredUtilItem === 22
              ? "fill-sub"
              : "fill-[#ffc300] hover:fill-sub cursor-pointer"
            }`}
        >
          <circle cx="670" cy="851" r="14.75" stroke="white" stroke-width="0.5">
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="670"
            cy="851"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[21].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[21]);
            }}
          />
          <path
            d="M662.745 856V854.56L666.11 851.444C666.396 851.167 666.636 850.917 666.83 850.696C667.027 850.474 667.176 850.257 667.278 850.045C667.379 849.829 667.43 849.597 667.43 849.348C667.43 849.071 667.367 848.832 667.241 848.632C667.115 848.429 666.942 848.274 666.724 848.166C666.505 848.055 666.258 848 665.981 848C665.691 848 665.439 848.058 665.224 848.175C665.008 848.292 664.842 848.46 664.725 848.678C664.608 848.897 664.55 849.157 664.55 849.458H662.652C662.652 848.84 662.792 848.303 663.072 847.847C663.352 847.392 663.745 847.039 664.249 846.79C664.754 846.541 665.336 846.416 665.995 846.416C666.672 846.416 667.261 846.536 667.763 846.776C668.267 847.013 668.66 847.343 668.94 847.764C669.22 848.186 669.36 848.669 669.36 849.214C669.36 849.571 669.289 849.923 669.148 850.271C669.009 850.619 668.761 851.005 668.404 851.43C668.047 851.851 667.544 852.358 666.895 852.949L665.514 854.301V854.366H669.485V856H662.745ZM670.933 856V854.56L674.298 851.444C674.585 851.167 674.825 850.917 675.019 850.696C675.216 850.474 675.365 850.257 675.466 850.045C675.568 849.829 675.619 849.597 675.619 849.348C675.619 849.071 675.556 848.832 675.429 848.632C675.303 848.429 675.131 848.274 674.912 848.166C674.694 848.055 674.446 848 674.169 848C673.88 848 673.627 848.058 673.412 848.175C673.197 848.292 673.03 848.46 672.913 848.678C672.797 848.897 672.738 849.157 672.738 849.458H670.841C670.841 848.84 670.981 848.303 671.261 847.847C671.541 847.392 671.933 847.039 672.438 846.79C672.943 846.541 673.524 846.416 674.183 846.416C674.86 846.416 675.449 846.536 675.951 846.776C676.456 847.013 676.848 847.343 677.128 847.764C677.408 848.186 677.548 848.669 677.548 849.214C677.548 849.571 677.478 849.923 677.336 850.271C677.198 850.619 676.95 851.005 676.593 851.43C676.236 851.851 675.733 852.358 675.083 852.949L673.703 854.301V854.366H677.673V856H670.933Z"
            fill="white"
          />
          <circle
            cx="1284"
            cy="851"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1284"
            cy="851"
            r="14.75"
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[21].isMedia &&
                setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[21]);
            }}
          />
          <path
            d="M1276.74 856V854.56L1280.11 851.444C1280.4 851.167 1280.64 850.917 1280.83 850.696C1281.03 850.474 1281.18 850.257 1281.28 850.045C1281.38 849.829 1281.43 849.597 1281.43 849.348C1281.43 849.071 1281.37 848.832 1281.24 848.632C1281.11 848.429 1280.94 848.274 1280.72 848.166C1280.51 848.055 1280.26 848 1279.98 848C1279.69 848 1279.44 848.058 1279.22 848.175C1279.01 848.292 1278.84 848.46 1278.72 848.678C1278.61 848.897 1278.55 849.157 1278.55 849.458H1276.65C1276.65 848.84 1276.79 848.303 1277.07 847.847C1277.35 847.392 1277.74 847.039 1278.25 846.79C1278.75 846.541 1279.34 846.416 1279.99 846.416C1280.67 846.416 1281.26 846.536 1281.76 846.776C1282.27 847.013 1282.66 847.343 1282.94 847.764C1283.22 848.186 1283.36 848.669 1283.36 849.214C1283.36 849.571 1283.29 849.923 1283.15 850.271C1283.01 850.619 1282.76 851.005 1282.4 851.43C1282.05 851.851 1281.54 852.358 1280.89 852.949L1279.51 854.301V854.366H1283.48V856H1276.74ZM1284.93 856V854.56L1288.3 851.444C1288.58 851.167 1288.82 850.917 1289.02 850.696C1289.22 850.474 1289.36 850.257 1289.47 850.045C1289.57 849.829 1289.62 849.597 1289.62 849.348C1289.62 849.071 1289.56 848.832 1289.43 848.632C1289.3 848.429 1289.13 848.274 1288.91 848.166C1288.69 848.055 1288.45 848 1288.17 848C1287.88 848 1287.63 848.058 1287.41 848.175C1287.2 848.292 1287.03 848.46 1286.91 848.678C1286.8 848.897 1286.74 849.157 1286.74 849.458H1284.84C1284.84 848.84 1284.98 848.303 1285.26 847.847C1285.54 847.392 1285.93 847.039 1286.44 846.79C1286.94 846.541 1287.52 846.416 1288.18 846.416C1288.86 846.416 1289.45 846.536 1289.95 846.776C1290.46 847.013 1290.85 847.343 1291.13 847.764C1291.41 848.186 1291.55 848.669 1291.55 849.214C1291.55 849.571 1291.48 849.923 1291.34 850.271C1291.2 850.619 1290.95 851.005 1290.59 851.43C1290.24 851.851 1289.73 852.358 1289.08 852.949L1287.7 854.301V854.366H1291.67V856H1284.93Z"
            fill="white"
          />
          {/* <circle
            cx="770"
            cy="525"
            r="14.75"
            
            stroke="white"
            stroke-width="0.5"
          >
            <animate
              attributeName="r"
              from="14"
              to="28"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0.1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="770"
            cy="525"
            r="14.75"
            
            stroke="white"
            stroke-width="0.5"
            onPointerDown={() => {
              plan_filter[0].itemsUtilFilter[0].items[21].isMedia && setCurrentMedia(plan_filter[0].itemsUtilFilter[0].items[21]);
            }}
          />
          <path
            d="M762.554 530V528.56L765.92 525.444C766.206 525.167 766.446 524.917 766.64 524.696C766.837 524.474 766.986 524.257 767.087 524.045C767.189 523.829 767.24 523.597 767.24 523.348C767.24 523.071 767.177 522.832 767.051 522.632C766.924 522.429 766.752 522.274 766.533 522.166C766.315 522.055 766.067 522 765.79 522C765.501 522 765.249 522.058 765.033 522.175C764.818 522.292 764.652 522.46 764.535 522.678C764.418 522.897 764.359 523.157 764.359 523.458H762.462C762.462 522.84 762.602 522.303 762.882 521.847C763.162 521.392 763.554 521.039 764.059 520.79C764.564 520.541 765.145 520.416 765.804 520.416C766.481 520.416 767.071 520.536 767.572 520.776C768.077 521.013 768.469 521.343 768.749 521.764C769.029 522.186 769.17 522.669 769.17 523.214C769.17 523.571 769.099 523.923 768.957 524.271C768.819 524.619 768.571 525.005 768.214 525.43C767.857 525.851 767.354 526.358 766.704 526.949L765.324 528.301V528.366H769.294V530H762.554ZM774.237 530.129C773.548 530.129 772.934 530.011 772.395 529.774C771.86 529.534 771.437 529.204 771.126 528.786C770.818 528.364 770.659 527.878 770.65 527.327H772.663C772.675 527.558 772.751 527.761 772.889 527.936C773.031 528.109 773.219 528.243 773.452 528.338C773.686 528.433 773.949 528.481 774.242 528.481C774.547 528.481 774.816 528.427 775.05 528.32C775.284 528.212 775.467 528.063 775.599 527.872C775.731 527.681 775.798 527.461 775.798 527.212C775.798 526.959 775.727 526.736 775.585 526.542C775.447 526.345 775.247 526.191 774.985 526.081C774.727 525.97 774.419 525.914 774.062 525.914H773.18V524.446H774.062C774.363 524.446 774.63 524.394 774.86 524.289C775.094 524.185 775.276 524.04 775.405 523.855C775.534 523.668 775.599 523.449 775.599 523.2C775.599 522.963 775.542 522.755 775.428 522.577C775.318 522.395 775.161 522.254 774.957 522.152C774.757 522.05 774.523 522 774.256 522C773.985 522 773.737 522.049 773.512 522.147C773.288 522.243 773.108 522.38 772.972 522.558C772.837 522.737 772.765 522.946 772.755 523.186H770.84C770.849 522.641 771.004 522.161 771.306 521.746C771.607 521.33 772.014 521.006 772.525 520.772C773.039 520.535 773.619 520.416 774.265 520.416C774.917 520.416 775.488 520.535 775.978 520.772C776.467 521.009 776.847 521.329 777.118 521.732C777.392 522.132 777.527 522.581 777.524 523.08C777.527 523.609 777.363 524.051 777.03 524.405C776.701 524.759 776.272 524.983 775.742 525.079V525.153C776.438 525.242 776.967 525.484 777.33 525.877C777.697 526.268 777.878 526.758 777.875 527.346C777.878 527.884 777.723 528.363 777.409 528.781C777.098 529.2 776.669 529.529 776.121 529.769C775.573 530.009 774.945 530.129 774.237 530.129Z"
            fill="white"
          /> */}
        </g>
      </svg>
    </div>
  );
};

export default UtilTret;
