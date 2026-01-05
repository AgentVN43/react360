import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { apartmentLayout, utilities_plan_stopframe } from "../../data/data";
import "./Utilities.scss";
// import HouseSampleView from "../../components/HouseSampleView";
import { useDispatch, useSelector } from "react-redux";
import { updateResponsiveState } from "../../redux/features/ResponsiveSlice";
// import PlanDetailsMobile from "../../components/PlanDetailsMobile";
// import PlanDetails from "../../components/PlanDetails";
// import back_icon2 from "../../assets/icons/back_icon2.png";
// import next_icon from "../../assets/icons/next_icon.png";
// import check from "../../assets/icons/check.png";
import SideTools from "../../components/SideTools";
// import compass from "../../assets/images/compass.png";

// import FloorDetail from "../../components/FloorDetail";
// import SvgUtilRotaion from "../../components/SvgUtilRotaion";
// import UtilDetail from "../../components/UtilDetail";
import GuideSVG from "../../components/Guide/GuideSVG";
import { showGuideSVG } from "../../redux/features/GuideSlice";
import FloorDetail from "../../components/FloorDetail";

const TOTAL_FRAMES = 120;

const STOP_FRAMES = [15, 45, 75, 105];
// Hiện số Loại căn
const STOP_FRAMES_11_TYPE_PLAN_BUTTON = [1, 2, 3, 9, 4, 5, 6, 7];
// const STOP_FRAMES_47_TYPE_PLAN_BUTTON = [2, 3, 4, 5, 7];
// const STOP_FRAMES_74_TYPE_PLAN_BUTTON = [2, 3, 4, 5, 7];
// const url = "https://360.goku.agency/goku-data/rotation_utils/";
const url = "../../assets/images/rotation_utils/";

const Rotation = ({
  setIframeData,
  setisVisibleFloorDetail,
  setPathSelectedData,
  isMoving,
  setIsMoving,
  isAutoRotate,
  setIsAutoRotate,
  isAutoRotatePreviousNextFrame,
  setIsAutoRotatePreviousNextFrame,
  isMobile,
  isVisibleMobileFilter,
  setisVisibleMobileFilter,
  isVisibleFloorDetail,
  setPathUtilSelected,
  setIsVisibleUtilDetail,
  isGuideVisible,
  setIsGuideVisible,
  setCurrentFrameIndex,
  setBlock,
  block,
}) => {
  // const dispatch = useDispatch();
  const imageRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(75);
  const [intervalId, setIntervalId] = useState(null);
  // const [isMoving, setIsMoving] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [initialFrameIndex, setInitialFrameIndex] = useState(1);
  const [isSnapping, setIsSnapping] = useState(false); // Để tránh xoay khi đang giảm/tăng frame
  const [previousNextFrame, setPreviousNextFrame] = useState(0); // 1 là pre 2 là next

  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [hoveredIconId, setHoveredIconId] = useState(null);

  useEffect(() => {
    setCurrentFrameIndex(frameIndex);
  }, [frameIndex]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePaths = Array.from(
        { length: TOTAL_FRAMES },
        (_, i) => `/src/assets/images/rotation_utils/${i + 1}.jpg`
      );

      const imagePromises = imagePaths.map((path) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = path;
          img.onload = () => {
            setLoadedImages((prev) => prev + 1); // Tăng số lượng ảnh đã tải
            resolve(); // Đánh dấu ảnh này đã tải xong
          };
          img.onerror = () => resolve(); // Xử lý lỗi (cũng đánh dấu là đã xử lý)
        });
      });

      await Promise.all(imagePromises); // Đợi tất cả ảnh tải xong
      setIsLoading(false); // Sau khi tất cả ảnh đã tải xong
    };

    loadImages();
  }, []);

  const loadingPercentage = Math.round((loadedImages / TOTAL_FRAMES) * 100);

  // Xủ lý tự động xoay tới previous/next frame
  useEffect(() => {
    if (isAutoRotatePreviousNextFrame && !isSnapping) {
      const id = setInterval(() => {
        previousNextFrame === 2
          ? setFrameIndex((prevFrameIndex) => {
              const nextFrame = (prevFrameIndex % TOTAL_FRAMES) + 1;
              if (STOP_FRAMES.includes(nextFrame)) {
                setIsAutoRotatePreviousNextFrame(false); // Stop auto-rotate if nextFrame matches any stop frame
                return nextFrame; // Keep the frame unchanged
              }
              return nextFrame;
            })
          : setFrameIndex((prevFrameIndex) => {
              const nextFrame =
                prevFrameIndex - 1 <= 0 ? TOTAL_FRAMES : prevFrameIndex - 1;
              if (STOP_FRAMES.includes(nextFrame)) {
                setIsAutoRotatePreviousNextFrame(false); // Stop auto-rotate if nextFrame matches any stop frame
                return nextFrame; // Keep the frame unchanged
              }

              return nextFrame;
            });
      }, 100); // Adjust the auto-rotate speed

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isAutoRotatePreviousNextFrame, isSnapping]);

  // Tìm stop frame gần nhất khi thả chuột
  // const findClosestStopFrame = (currentFrame) => {
  //   return STOP_FRAMES.reduce((prev, curr) => {
  //     return Math.abs(curr - currentFrame) < Math.abs(prev - currentFrame)
  //       ? curr
  //       : prev;
  //   });
  // };

  // Chuyển mượt về frame gần nhất (giảm dần/tăng dần)
  const smoothSnapToFrame = (targetFrame) => {
    setIsSnapping(true);
    if (
      frameIndex >= STOP_FRAMES[STOP_FRAMES.length - 2] &&
      targetFrame === STOP_FRAMES[0]
    ) {
      const snapInterval = setInterval(() => {
        setFrameIndex((prevIndex) => {
          if (prevIndex === targetFrame) {
            clearInterval(snapInterval); // Dừng lại khi đến frame đích
            setIsSnapping(false);
            return prevIndex;
          }
          if (prevIndex === TOTAL_FRAMES) {
            return 1; // Quay về frame đầu tiên
          }
          return prevIndex + 1;
        });
      }, 50); // Tốc độ di chuyển giữa các frame
      return;
    }
    if (
      frameIndex <= STOP_FRAMES[1] &&
      targetFrame === STOP_FRAMES[STOP_FRAMES.length - 1]
    ) {
      const snapInterval = setInterval(() => {
        setFrameIndex((prevIndex) => {
          if (prevIndex === targetFrame) {
            clearInterval(snapInterval); // Dừng lại khi đến frame đích
            setIsSnapping(false);
            return prevIndex;
          }
          if (prevIndex === 1) {
            return TOTAL_FRAMES; // Quay về frame đầu tiên
          }
          return prevIndex - 1;
        });
      }, 50); // Tốc độ di chuyển giữa các frame
      return;
    }
    const step = frameIndex > targetFrame ? -1 : 1; // Xác định tăng hay giảm

    const snapInterval = setInterval(() => {
      setFrameIndex((prevIndex) => {
        if (prevIndex === targetFrame) {
          clearInterval(snapInterval); // Dừng lại khi đến frame đích
          setIsSnapping(false);
          return prevIndex;
        }
        return prevIndex + step;
      });
    }, 50); // Tốc độ di chuyển giữa các frame
  };

  // Start/Down
  const handleInteractionStart = (e) => {
    if (isAutoRotate || isAutoRotatePreviousNextFrame || isSnapping) return; // Ngừng thao tác nếu đang dừng lại từ từ
    setIsMoving(true);
    setCurrentX(e);
    setInitialFrameIndex(frameIndex);
  };

  const handleInteractionMove = (e) => {
    if (isAutoRotate || isAutoRotatePreviousNextFrame || !isMoving) return;

    const dx = e - currentX;
    const indexChange = Math.floor((dx / window.innerWidth) * TOTAL_FRAMES);

    let newIndex = initialFrameIndex + indexChange;
    if (newIndex > TOTAL_FRAMES) {
      // newIndex = newIndex % TOTAL_FRAMES;
      newIndex = ((newIndex - 1) % TOTAL_FRAMES) + 1;
    } else if (newIndex < 1) {
      // newIndex = TOTAL_FRAMES + (newIndex % TOTAL_FRAMES);
      newIndex = TOTAL_FRAMES + ((newIndex - 1) % TOTAL_FRAMES) + 1;
    }

    setFrameIndex(newIndex);
  };

  const handleInteractionEnd = () => {
    if (isAutoRotate || isAutoRotatePreviousNextFrame) return;
    setIsMoving(false);
    // const closestFrame = findClosestStopFrame(frameIndex);
    // // setFrameIndex(closestFrame);
    // smoothSnapToFrame(closestFrame);
  };

  const pointerDownRef = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);

  const handlePointerDown = (e) => {
    pointerDownRef.current = { x: e.clientX, y: e.clientY };
    hasDraggedRef.current = false;
    setIsMoving(true);
    setCurrentX(e.clientX);
    setInitialFrameIndex(frameIndex);
  };

  const handlePointerMove = (e) => {
    const dx = e.clientX - pointerDownRef.current.x;
    const dy = e.clientY - pointerDownRef.current.y;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      hasDraggedRef.current = true;
      handleInteractionMove(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsMoving(false);
    if (!hasDraggedRef.current) {
      // Không phải kéo — cho click
      console.log("pointer up without drag");
    } else {
      handleInteractionEnd();
    }
  };

  // Hiển thị mặt bằng SVG tương ứng với stop frame
  const StopFramePlanComponent = () => {
    const currentStopFrame = utilities_plan_stopframe.find(
      (item) => item.id === frameIndex
    );
    const [isHovered, setIsHovered] = useState(false);
    const [divStyle, setDivStyle] = useState({ top: 250, left: 40 });
    const [hoveredUtilFloor, setHoveredUtilFloor] = useState(null);
    const [hoverPathData, sethoverPathData] = useState(null);

    const filteredItems = currentStopFrame?.path;

    const handleClick = (item) => {
      setPathSelectedData(item);
      setisVisibleFloorDetail(true);
      currentStopFrame && setBlock(currentStopFrame?.id);
    };

    const handleClickUtil = (item) => {
      setPathUtilSelected(item);
      setIsVisibleUtilDetail(true);
      currentStopFrame && setBlock(currentStopFrame?.id);
    };

    const handleMouseEnter = (item, e) => {
      setIsHovered(true);
      sethoverPathData(item);
      // setDivStyle({
      //   top: `${e.clientY - 150}px`,
      //   left: `${e.clientX + 80}px`, // Adjust the position to your liking
      // });
      !isMobile
        ? setDivStyle({
            // top: `${e.clientY - 150}px`,
            top: `25%`,
            left: `${e.clientX + 80}px`, // Adjust the position to your liking
          })
        : setDivStyle({
            top: `5%`,
            left: `30%`, // Adjust the position to your liking
          });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      sethoverPathData(null);
      setDivStyle(null);
    };

    const handleMouseEnterUtil = (item, e) => {
      setIsHovered(true);
      setHoveredUtilFloor(item);
      // setDivStyle({
      //   top: `${e.clientY - 150}px`,
      //   left: `${e.clientX + 80}px`, // Adjust the position to your liking
      // });
      !isMobile
        ? setDivStyle({
            // top: `${e.clientY - 150}px`,
            top: `25%`,
            left: `${e.clientX + 80}px`, // Adjust the position to your liking
          })
        : setDivStyle({
            top: `5%`,
            left: `30%`, // Adjust the position to your liking
          });
    };

    const handleMouseLeaveUtil = () => {
      setIsHovered(false);
      setHoveredUtilFloor(null);
      setDivStyle(null);
    };

    return (
      // 👉 pointer-events-none sẽ bỏ qua mọi sự kiện chuột và cảm ứng trên phần tử con
      <div
        className={`absolute lg:scale-100 xl:scale-[1.0] top-0 left-0 w-full h-full z-10 overflow-hidden`}
      >
        <div>
          {/* SVG TEXT TOÀ 1 và 2 */}

          {/* SVG hiện tầng */}
          <svg
            className="w-full h-full absolute inset-0 object-contain"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {filteredItems?.map((item, index) =>
              item.poligon2 ? (
                <g
                  key={index}
                  fill="#d7ff8d"
                  fillOpacity="1"
                  stroke="#172D4D"
                  strokeWidth="2"
                  className="opacity-0 hover:stroke-white hover:fill-[#FFDF2B] fill- hover:opacity-100 hover:stroke-3 cursor-pointer"
                  onPointerDown={(e) => {
                    pointerDownRef.current = { x: e.clientX, y: e.clientY };
                    hasDraggedRef.current = false;
                  }}
                  onPointerMove={(e) => {
                    const dx = e.clientX - pointerDownRef.current.x;
                    const dy = e.clientY - pointerDownRef.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      hasDraggedRef.current = true;
                    }
                  }}
                  onPointerUp={(e) => {
                    if (!hasDraggedRef.current) {
                      handleClick(item); // click thật sự
                    }
                  }}
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <path d={item.poligon1} />
                  <path d={item.poligon2} />
                </g>
              ) : (
                <path
                  key={index}
                  d={item.poligon1}
                  fill="#d7ff8d"
                  fillOpacity="1"
                  stroke="#172D4D"
                  strokeWidth="2"
                  className="opacity-0 hover:stroke-white hover:fill-[#FFDF2B] fill- hover:opacity-100 hover:stroke-3 cursor-pointer"
                  onPointerDown={(e) => {
                    pointerDownRef.current = { x: e.clientX, y: e.clientY };
                    hasDraggedRef.current = false;
                  }}
                  onPointerMove={(e) => {
                    const dx = e.clientX - pointerDownRef.current.x;
                    const dy = e.clientY - pointerDownRef.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      hasDraggedRef.current = true;
                    }
                  }}
                  onPointerUp={(e) => {
                    if (!hasDraggedRef.current) {
                      handleClick(item); // click thật sự
                    }
                  }}
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              )
            )}

            <g>
              {frameIndex === 75 && (
                <g>
                  <g>
                    <mask
                      id="path-1-outside-1_886_11648"
                      maskUnits="userSpaceOnUse"
                      x="993"
                      y="39"
                      width="166"
                      height="29"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="993"
                        y="39"
                        width="166"
                        height="29"
                      />
                      <path d="M993 40H1158.77V67H993V40Z" />
                    </mask>
                    <path
                      d="M993 40H1158.77V67H993V40Z"
                      fill="url(#paint0_linear_886_11648)"
                    />
                    <path
                      d="M993 41H1158.77V39H993V41ZM1158.77 66H993V68H1158.77V66Z"
                      fill="url(#paint1_linear_886_11648)"
                      mask="url(#path-1-outside-1_886_11648)"
                    />
                    <path
                      d="M1053.92 57C1053.98 56.9067 1054.11 56.72 1054.29 56.44C1054.49 56.1507 1054.72 55.8007 1054.99 55.39C1055.27 54.97 1055.57 54.508 1055.89 54.004C1056.22 53.4907 1056.55 52.9727 1056.9 52.45C1057.24 51.918 1057.58 51.4047 1057.91 50.91C1058.23 50.406 1058.53 49.9487 1058.8 49.538C1059.07 49.118 1059.3 48.768 1059.49 48.488C1059.68 48.1987 1059.81 48.012 1059.88 47.928L1060.08 48.376H1055.79C1055.6 48.376 1055.42 48.3387 1055.23 48.264C1055.04 48.1893 1054.89 48.082 1054.76 47.942C1054.62 47.802 1054.56 47.6387 1054.56 47.452V46.29H1056.07V46.486C1056.07 46.6633 1056.1 46.7613 1056.17 46.78C1056.23 46.7987 1056.35 46.808 1056.51 46.808H1062.44L1056.59 55.614L1056.51 55.432H1062.53V57H1053.92ZM1064.66 46.808H1071.43V48.376H1066.3V51.092H1070.87V52.674H1066.3V55.432H1071.62V57H1064.66V46.808ZM1082.84 57.364L1075.01 49.776L1075.49 49.972L1075.53 57H1073.88V46.458H1073.95L1081.66 54.046L1081.29 53.934L1081.26 46.808H1082.88V57.364H1082.84ZM1085.69 46.808H1087.33V57H1085.69V46.808ZM1089.07 57L1093.58 46.388H1093.68L1098.19 57H1096.31L1093.13 48.95L1094.31 48.152L1090.68 57H1089.07ZM1091.9 53.22H1095.39L1095.95 54.606H1091.41L1091.9 53.22Z"
                      fill="white"
                    />
                    <path
                      d="M1052.6 86.797L1076.82 82.5508L1100.85 86.6545L1077.7 107.973L1052.6 86.797Z"
                      fill="url(#paint2_linear_886_11648)"
                    />
                    <g style={{ mixBlendMode: "color-dodge" }}>
                      <path
                        d="M1052.6 86.7965L1076.82 82.5686L1100.85 86.6539L1077.7 107.972L1052.6 86.7965Z"
                        fill="url(#paint3_linear_886_11648)"
                      />
                    </g>
                    <path
                      d="M1115.58 73H1036.18L1077.72 108L1115.58 73Z"
                      fill="url(#paint4_linear_886_11648)"
                    />
                    <path
                      d="M1115.58 73H1036.18L1077.72 108L1115.58 73Z"
                      fill="url(#paint5_linear_886_11648)"
                    />
                  </g>
                  {/* mai */}
                  <path
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(4); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(4, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    d="M864.5 260L792.5 284V245.5L864.5 219L926.5 252L1000 227V188.5V143L1112 99.5L1284.5 245V288.5L1112 146L1000 188.5V227V262.5L926.5 287L864.5 260Z"
                  />
                  {/* 20 */}
                  <path
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(3); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(3, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    d="M865 610.5L793 612.5V584.5L865 580L928.5 584.5L1001 581V566L1111.5 558.5L1284 585.5V613L1111.5 597L1001 602V610L928.5 612.5L865 610.5Z"
                  />
                  {/* tang 3 */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(2); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(2, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M1283 866L1112.5 952.5L1002 929V917L961 908V934.5L927 948.5L1031 976.5V1011L998 1028.5L708 934.5V905.5L761.5 890L776.5 895L792 898V868.5L865 884L927 866L1000.5 882V958.5L1112.5 984.5L1283 893V866Z" />
                  </g>

                  {/* tang 1 */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(1); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(1, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M1274 939.5L1117 1040L1031 1017V1044.5V1067.5L1011.5 1080.5H975.5L707 979.5V962L998 1064.5L1031 1044.5V1017V999.5L1115 1019.5L1274 922.75V939.5Z" />
                    <path d="M1031 1017L1117 1040L1274 939.5V922.75L1115 1019.5L1031 999.5V1017ZM1031 1017V1044.5M1031 1044.5V1067.5L1011.5 1080.5H975.5L707 979.5V962L998 1064.5L1031 1044.5Z" />
                  </g>

                  {/* tang tret */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(0); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(0, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M965 1080.5H609L557.5 1059L507 1028L478.5 1000L470 988L466.5 975.5L468 960L472 946.5L483.5 922.5L522.5 884V922.5L514.5 927.5L507 941L505.5 956L507 968.5L514.5 978L531.5 982.5L707 926V982.5L965 1080.5H1056.5L1058.5 1075.5L1032 1063.5V1035.5L1076 1048L1105.5 1042L1313 934L1274 924.5V906.5L1347.5 921L1404 885V867.5V851.5L1574.5 875.5L1581.5 877L1587 880L1588.5 882.5L1588 886.5L1584.5 890L1370 1080.5H1056.5H965Z" />
                  </g>
                </g>
              )}
              {frameIndex === 15 && (
                <g>
                  <g>
                    <mask
                      id="path-1-outside-1_981_1083"
                      maskUnits="userSpaceOnUse"
                      x="977"
                      y="80"
                      width="166"
                      height="29"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="977"
                        y="80"
                        width="166"
                        height="29"
                      />
                      <path d="M977 81H1142.65V108H977V81Z" />
                    </mask>
                    <path
                      d="M977 81H1142.65V108H977V81Z"
                      fill="url(#paint0_linear_981_1083)"
                    />
                    <path
                      d="M977 82H1142.65V80H977V82ZM1142.65 107H977V109H1142.65V107Z"
                      fill="url(#paint1_linear_981_1083)"
                      mask="url(#path-1-outside-1_981_1083)"
                    />
                    <path
                      d="M1042.36 87.808L1045.57 95.788L1044.63 95.606L1047.61 87.808H1049.54L1044.98 98.476L1040.41 87.808H1042.36ZM1051.45 87.808H1053.09V98H1051.45V87.808ZM1061.25 89.88C1060.88 89.6933 1060.49 89.5347 1060.08 89.404C1059.67 89.264 1059.28 89.194 1058.91 89.194C1058.4 89.194 1058 89.306 1057.7 89.53C1057.41 89.754 1057.27 90.062 1057.27 90.454C1057.27 90.734 1057.37 90.9813 1057.58 91.196C1057.78 91.4013 1058.04 91.5833 1058.36 91.742C1058.68 91.8913 1059.02 92.036 1059.37 92.176C1059.68 92.288 1059.98 92.4233 1060.28 92.582C1060.59 92.7313 1060.86 92.918 1061.11 93.142C1061.35 93.366 1061.54 93.646 1061.68 93.982C1061.83 94.3087 1061.9 94.7147 1061.9 95.2C1061.9 95.732 1061.77 96.222 1061.5 96.67C1061.23 97.1087 1060.84 97.4587 1060.34 97.72C1059.83 97.9813 1059.22 98.112 1058.49 98.112C1058.07 98.112 1057.65 98.0653 1057.24 97.972C1056.84 97.8787 1056.46 97.7527 1056.09 97.594C1055.73 97.426 1055.39 97.2393 1055.09 97.034L1055.81 95.76C1056.04 95.928 1056.29 96.082 1056.58 96.222C1056.87 96.362 1057.17 96.474 1057.48 96.558C1057.79 96.6327 1058.08 96.67 1058.35 96.67C1058.64 96.67 1058.92 96.6233 1059.2 96.53C1059.49 96.4367 1059.73 96.2827 1059.92 96.068C1060.11 95.8533 1060.21 95.5687 1060.21 95.214C1060.21 94.9247 1060.13 94.6773 1059.96 94.472C1059.79 94.2667 1059.57 94.0893 1059.3 93.94C1059.04 93.7813 1058.75 93.6413 1058.43 93.52C1058.11 93.3987 1057.79 93.2633 1057.45 93.114C1057.13 92.9647 1056.82 92.7827 1056.54 92.568C1056.26 92.344 1056.03 92.0733 1055.86 91.756C1055.68 91.4387 1055.59 91.0467 1055.59 90.58C1055.59 90.02 1055.72 89.5347 1055.98 89.124C1056.24 88.7133 1056.6 88.3867 1057.06 88.144C1057.53 87.9013 1058.06 87.7707 1058.67 87.752C1059.39 87.752 1060 87.8407 1060.5 88.018C1061.02 88.186 1061.47 88.3913 1061.86 88.634L1061.25 89.88ZM1063.28 87.808H1070.1V89.376H1067.46V98H1065.84V89.376H1063.28V87.808ZM1070.3 98L1074.81 87.388H1074.9L1079.41 98H1077.54L1074.36 89.95L1075.53 89.152L1071.91 98H1070.3ZM1073.13 94.22H1076.61L1077.17 95.606H1072.64L1073.13 94.22Z"
                      fill="white"
                    />
                    <path
                      d="M1036.54 127.797L1060.76 123.551L1084.79 127.654L1061.64 148.973L1036.54 127.797Z"
                      fill="url(#paint2_linear_981_1083)"
                    />
                    <g style={{ mixBlendMode: "color-dodge" }}>
                      <path
                        d="M1036.54 127.796L1060.76 123.568L1084.79 127.654L1061.64 148.972L1036.54 127.796Z"
                        fill="url(#paint3_linear_981_1083)"
                      />
                    </g>
                    <path
                      d="M1099.52 114H1020.12L1061.66 149L1099.52 114Z"
                      fill="url(#paint4_linear_981_1083)"
                    />
                    <path
                      d="M1099.52 114H1020.12L1061.66 149L1099.52 114Z"
                      fill="url(#paint5_linear_981_1083)"
                    />
                  </g>
                </g>
              )}
              {frameIndex === 45 && (
                <g>
                  <g>
                    <mask
                      id="path-1-outside-1_981_1124"
                      maskUnits="userSpaceOnUse"
                      x="805"
                      y="69"
                      width="166"
                      height="29"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="805"
                        y="69"
                        width="166"
                        height="29"
                      />
                      <path d="M805 70H970.647V97H805V70Z" />
                    </mask>
                    <path
                      d="M805 70H970.647V97H805V70Z"
                      fill="url(#paint0_linear_981_1124)"
                    />
                    <path
                      d="M805 71H970.647V69H805V71ZM970.647 96H805V98H970.647V96Z"
                      fill="url(#paint1_linear_981_1124)"
                      mask="url(#path-1-outside-1_981_1124)"
                    />
                    <path
                      d="M876.214 76.808C876.774 76.808 877.287 76.8827 877.754 77.032C878.22 77.172 878.617 77.382 878.944 77.662C879.27 77.942 879.522 78.2873 879.7 78.698C879.886 79.0993 879.98 79.5613 879.98 80.084C879.98 80.4853 879.919 80.8867 879.798 81.288C879.676 81.6893 879.476 82.0533 879.196 82.38C878.925 82.7067 878.566 82.968 878.118 83.164C877.67 83.36 877.114 83.458 876.452 83.458H874.982V87H873.344V76.808H876.214ZM876.438 81.89C876.802 81.89 877.105 81.834 877.348 81.722C877.59 81.6007 877.777 81.4513 877.908 81.274C878.048 81.0967 878.146 80.91 878.202 80.714C878.267 80.5087 878.3 80.3173 878.3 80.14C878.3 79.972 878.272 79.79 878.216 79.594C878.16 79.3887 878.066 79.1973 877.936 79.02C877.805 78.8333 877.618 78.6793 877.376 78.558C877.142 78.4367 876.848 78.376 876.494 78.376H874.982V81.89H876.438ZM878.202 82.856L880.806 87H878.916L876.256 82.898L878.202 82.856ZM882.723 76.808H884.361V87H882.723V76.808ZM892.514 78.88C892.15 78.6933 891.763 78.5347 891.352 78.404C890.941 78.264 890.549 78.194 890.176 78.194C889.672 78.194 889.271 78.306 888.972 78.53C888.683 78.754 888.538 79.062 888.538 79.454C888.538 79.734 888.641 79.9813 888.846 80.196C889.051 80.4013 889.313 80.5833 889.63 80.742C889.947 80.8913 890.283 81.036 890.638 81.176C890.946 81.288 891.249 81.4233 891.548 81.582C891.856 81.7313 892.131 81.918 892.374 82.142C892.617 82.366 892.808 82.646 892.948 82.982C893.097 83.3087 893.172 83.7147 893.172 84.2C893.172 84.732 893.037 85.222 892.766 85.67C892.495 86.1087 892.108 86.4587 891.604 86.72C891.1 86.9813 890.484 87.112 889.756 87.112C889.336 87.112 888.921 87.0653 888.51 86.972C888.109 86.8787 887.726 86.7527 887.362 86.594C886.998 86.426 886.662 86.2393 886.354 86.034L887.082 84.76C887.306 84.928 887.563 85.082 887.852 85.222C888.141 85.362 888.44 85.474 888.748 85.558C889.056 85.6327 889.345 85.67 889.616 85.67C889.905 85.67 890.19 85.6233 890.47 85.53C890.759 85.4367 890.997 85.2827 891.184 85.068C891.38 84.8533 891.478 84.5687 891.478 84.214C891.478 83.9247 891.394 83.6773 891.226 83.472C891.058 83.2667 890.839 83.0893 890.568 82.94C890.307 82.7813 890.017 82.6413 889.7 82.52C889.383 82.3987 889.056 82.2633 888.72 82.114C888.393 81.9647 888.09 81.7827 887.81 81.568C887.53 81.344 887.301 81.0733 887.124 80.756C886.947 80.4387 886.858 80.0467 886.858 79.58C886.858 79.02 886.989 78.5347 887.25 78.124C887.511 77.7133 887.871 77.3867 888.328 77.144C888.795 76.9013 889.331 76.7707 889.938 76.752C890.657 76.752 891.268 76.8407 891.772 77.018C892.285 77.186 892.738 77.3913 893.13 77.634L892.514 78.88ZM894.25 87L898.758 76.388H898.856L903.364 87H901.488L898.31 78.95L899.486 78.152L895.86 87H894.25ZM897.078 83.22H900.564L901.124 84.606H896.588L897.078 83.22Z"
                      fill="white"
                    />
                    <path
                      d="M864.536 116.797L888.761 112.551L912.794 116.654L889.636 137.973L864.536 116.797Z"
                      fill="url(#paint2_linear_981_1124)"
                    />
                    <g style={{ mixBlendMode: "color-dodge" }}>
                      <path
                        d="M864.536 116.796L888.761 112.568L912.794 116.654L889.636 137.972L864.536 116.796Z"
                        fill="url(#paint3_linear_981_1124)"
                      />
                    </g>
                    <path
                      d="M927.523 103H848.124L889.656 138L927.523 103Z"
                      fill="url(#paint4_linear_981_1124)"
                    />
                    <path
                      d="M927.523 103H848.124L889.656 138L927.523 103Z"
                      fill="url(#paint5_linear_981_1124)"
                    />
                  </g>
                  {/* mai */}
                  <path
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(4); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(4, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    d="M701 246.5V280.5L843.5 218.5L908.5 215.5L962 244V257L1068 310L1170 283L1213 310V272L1168.5 244L1064.5 270L908.5 179.5L843.5 183.5L701 246.5Z"
                  />
                  {/* 20 */}
                  <path
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(3); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(3, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    d="M699 609.5V579.5L864.5 569H909.5L1064.5 585.5L1169 582.5L1211 586V610L1169 608L1064.5 610L909.5 603.5H864.5L699 609.5Z"
                  />
                  {/* tang 3 */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(2); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(2, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M700.5 892.5V872.5L845.5 912.5H910L959.5 897.5V893.5L1071 857L1170.5 876L1211 859V872L1190 881L1225.5 879.5L1288.5 854.5L1403.5 869.5V889.5L1349.5 901L1286.5 908.5L1211 912.5L1049.5 922V897.5L1112 874L1071 867L959.5 905.5V918.5L910 934.5H845.5L700.5 892.5Z" />
                  </g>

                  {/* tang 1 */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(1); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(1, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M701.5 931.5V913L844.5 960H916L960.5 940.5V929.5L1048 898V916V942.5L1270.5 929.5L1320.5 924L1380 916L1404 911V932.5L1390.5 936L1325 948.5L1270.5 955.5L1048 968.5V942.5V916L960.5 949V962.5L916 980.5H844.5L701.5 931.5Z" />
                    <path d="M1048 916L960.5 949V962.5L916 980.5H844.5L701.5 931.5V913L844.5 960H916L960.5 940.5V929.5L1048 898V916ZM1048 916V942.5M1048 942.5V968.5L1270.5 955.5L1325 948.5L1390.5 936L1404 932.5V911L1380 916L1320.5 924L1270.5 929.5L1048 942.5Z" />
                  </g>

                  {/* tang tret */}
                  <g
                    className="fill-(--sub) opacity-0 hover:opacity-100 cursor-pointer stroke-white stroke-2"
                    onPointerDown={(e) => {
                      pointerDownRef.current = { x: e.clientX, y: e.clientY };
                      hasDraggedRef.current = false;
                    }}
                    onPointerMove={(e) => {
                      const dx = e.clientX - pointerDownRef.current.x;
                      const dy = e.clientY - pointerDownRef.current.y;
                      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasDraggedRef.current = true;
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!hasDraggedRef.current) {
                        handleClickUtil(0); // click thật sự
                      }
                    }}
                    onMouseEnter={(e) => {
                      handleMouseEnterUtil(0, e);
                    }}
                    onMouseLeave={() => handleMouseLeaveUtil()}
                  >
                    <path d="M495 857L523.5 851.5V876.5L647.5 921L660 918L843.5 981.5H916L961 963V949.5L1047 918V969L1277 955.5L1313 951L1343 945.5L1405.5 932V866.5H1397.5L1431 848V830L1510.5 837.5L1549 844.5L1560.5 848L1565 854L1522.5 912L1503.5 928.5L1461 948L1349 973.5L1215.5 986L1100 990.5L881.5 1005.5L851 999.5L682 942.5L645.5 933.5L560.5 916.5L501 886L491 872.5L495 857Z" />
                  </g>
                </g>
              )}
              {frameIndex === 105 && (
                <g>
                  <g>
                    <mask
                      id="path-1-outside-1_981_1130"
                      maskUnits="userSpaceOnUse"
                      x="755"
                      y="42"
                      width="166"
                      height="29"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="755"
                        y="42"
                        width="166"
                        height="29"
                      />
                      <path d="M755 43H920.647V70H755V43Z" />
                    </mask>
                    <path
                      d="M755 43H920.647V70H755V43Z"
                      fill="url(#paint0_linear_981_1130)"
                    />
                    <path
                      d="M755 44H920.647V42H755V44ZM920.647 69H755V71H920.647V69Z"
                      fill="url(#paint1_linear_981_1130)"
                      mask="url(#path-1-outside-1_981_1130)"
                    />
                    <path
                      d="M823.009 49.808H824.647V58.432H829.673V60H823.009V49.808ZM831.827 49.808H833.465V60H831.827V49.808ZM839.141 49.808C839.701 49.808 840.214 49.8827 840.681 50.032C841.147 50.172 841.544 50.382 841.871 50.662C842.197 50.942 842.449 51.2873 842.627 51.698C842.813 52.0993 842.907 52.5613 842.907 53.084C842.907 53.4853 842.846 53.8867 842.725 54.288C842.603 54.6893 842.403 55.0533 842.123 55.38C841.852 55.7067 841.493 55.968 841.045 56.164C840.597 56.36 840.041 56.458 839.379 56.458H837.909V60H836.271V49.808H839.141ZM839.365 54.89C839.729 54.89 840.032 54.834 840.275 54.722C840.517 54.6007 840.704 54.4513 840.835 54.274C840.975 54.0967 841.073 53.91 841.129 53.714C841.194 53.5087 841.227 53.3173 841.227 53.14C841.227 52.972 841.199 52.79 841.143 52.594C841.087 52.3887 840.993 52.1973 840.863 52.02C840.732 51.8333 840.545 51.6793 840.303 51.558C840.069 51.4367 839.775 51.376 839.421 51.376H837.909V54.89H839.365ZM841.129 55.856L843.733 60H841.843L839.183 55.898L841.129 55.856ZM844.586 60L849.094 49.388H849.192L853.7 60H851.824L848.646 51.95L849.822 51.152L846.196 60H844.586ZM847.414 56.22H850.9L851.46 57.606H846.924L847.414 56.22Z"
                      fill="white"
                    />
                    <path
                      d="M814.536 89.7968L838.761 85.5507L862.794 89.6543L839.636 110.973L814.536 89.7968Z"
                      fill="url(#paint2_linear_981_1130)"
                    />
                    <g style={{ mixBlendMode: "color-dodge" }}>
                      <path
                        d="M814.536 89.796L838.761 85.5682L862.794 89.6535L839.636 110.972L814.536 89.796Z"
                        fill="url(#paint3_linear_981_1130)"
                      />
                    </g>
                    <path
                      d="M877.523 76H798.125L839.656 111L877.523 76Z"
                      fill="url(#paint4_linear_981_1130)"
                    />
                    <path
                      d="M877.523 76H798.125L839.656 111L877.523 76Z"
                      fill="url(#paint5_linear_981_1130)"
                    />
                  </g>
                </g>
              )}
            </g>
            <defs>
              {/* zenia */}
              <linearGradient
                id="paint0_linear_886_11648"
                x1="993"
                y1="53.5"
                x2="1158.77"
                y2="53.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.284497" stop-color="#FEC63C" />
                <stop offset="0.731283" stop-color="#FEC63C" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_886_11648"
                x1="1176.4"
                y1="51.369"
                x2="993"
                y2="51.327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.526317" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_886_11648"
                x1="1076.63"
                y1="82.6969"
                x2="1076.63"
                y2="97.7487"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FEC63C" />
                <stop offset="1" stop-color="#FEC63C" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_886_11648"
                x1="1076.76"
                y1="82.7374"
                x2="1076.91"
                y2="100.399"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FEC63C" />
                <stop offset="1" stop-color="#FEC63C" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_886_11648"
                x1="1076.86"
                y1="63.8273"
                x2="1076.49"
                y2="108.005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.140217" stop-color="#FEC63C" stop-opacity="0" />
                <stop offset="1" stop-color="#FEC63C" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_886_11648"
                x1="1075.88"
                y1="72.8173"
                x2="1075.88"
                y2="108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FEC63C" stop-opacity="0" />
                <stop offset="1" stop-color="#FEC63C" />
              </linearGradient>

              {/* vista */}
              <linearGradient
                id="paint0_linear_981_1083"
                x1="977"
                y1="94.5"
                x2="1142.65"
                y2="94.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.284497" stop-color="#1D9597" />
                <stop offset="0.731283" stop-color="#1D9597" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_981_1083"
                x1="1160.27"
                y1="92.369"
                x2="977"
                y2="92.327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.526317" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_981_1083"
                x1="1060.57"
                y1="123.697"
                x2="1060.57"
                y2="138.748"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1D9597" />
                <stop offset="1" stop-color="#1D9597" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_981_1083"
                x1="1060.7"
                y1="123.737"
                x2="1060.85"
                y2="141.398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1D9597" />
                <stop offset="1" stop-color="#1D9597" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_981_1083"
                x1="1060.8"
                y1="104.827"
                x2="1060.43"
                y2="149.005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.140217" stop-color="#1D9597" stop-opacity="0" />
                <stop offset="1" stop-color="#1D9597" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_981_1083"
                x1="1059.82"
                y1="113.817"
                x2="1059.82"
                y2="149"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1D9597" stop-opacity="0" />
                <stop offset="1" stop-color="#1D9597" />
              </linearGradient>

              {/* risa */}
              <linearGradient
                id="paint0_linear_981_1124"
                x1="805"
                y1="64.5"
                x2="970.647"
                y2="64.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.284497" stop-color="#F3786E" />
                <stop offset="0.731283" stop-color="#F3786E" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_981_1124"
                x1="988.27"
                y1="62.369"
                x2="805"
                y2="62.327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.526317" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_981_1124"
                x1="888.572"
                y1="93.6967"
                x2="888.572"
                y2="108.748"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3786E" />
                <stop offset="1" stop-color="#F3786E" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_981_1124"
                x1="888.697"
                y1="93.737"
                x2="888.847"
                y2="111.398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3786E" />
                <stop offset="1" stop-color="#F3786E" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_981_1124"
                x1="888.801"
                y1="74.8273"
                x2="888.426"
                y2="119.005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.140217" stop-color="#F3786E" stop-opacity="0" />
                <stop offset="1" stop-color="#F3786E" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_981_1124"
                x1="887.824"
                y1="83.8173"
                x2="887.824"
                y2="119"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3786E" stop-opacity="0" />
                <stop offset="1" stop-color="#F3786E" />
              </linearGradient>

              {/* lira */}
              <linearGradient
                id="paint0_linear_981_1130"
                x1="755"
                y1="56.5"
                x2="920.647"
                y2="56.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.284497" stop-color="#831618" />
                <stop offset="0.731283" stop-color="#831618" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_981_1130"
                x1="938.27"
                y1="54.369"
                x2="755"
                y2="54.327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.526317" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_981_1130"
                x1="838.572"
                y1="85.6967"
                x2="838.572"
                y2="100.748"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#831618" />
                <stop offset="1" stop-color="#831618" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_981_1130"
                x1="838.697"
                y1="85.737"
                x2="838.847"
                y2="103.398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#831618" />
                <stop offset="1" stop-color="#831618" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_981_1130"
                x1="838.801"
                y1="66.8273"
                x2="838.426"
                y2="111.005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.140217" stop-color="#831618" stop-opacity="0" />
                <stop offset="1" stop-color="#831618" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_981_1130"
                x1="837.824"
                y1="75.8173"
                x2="837.824"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#831618" stop-opacity="0" />
                <stop offset="1" stop-color="#C55355" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hover vào SVG hiện thông tin chi tiết */}
          {isHovered &&
            !isMobile &&
            (hoverPathData ? (
              <div
                key={hoverPathData.id}
                style={{
                  ...divStyle,
                }}
                className="absolute h-max flex bg-[#efffd1] rounded-md w-44 lg:w-52"
              >
                <div className="w-full h-full flex flex-col">
                  <div>
                    <h4 className="font-bold uppercase text-xs text-center p-1 lg:p-2">
                      Mặt bằng tầng {hoverPathData.floor}
                    </h4>
                  </div>

                  {/* <ul className="w-full h-full bg-[#ebffc5] p-1 justify-self-center place-items-start">
                  <li className="w-full p-1">
                    <span className="text-xs-10 lg:text-xs text-gray-800">
                      Tầng:{" "}
                      <span className="font-bold">{hoverPathData.floor}</span>
                    </span>
                  </li>
                </ul> */}

                  <div className="w-full bg-(--sub) flex justify-center items-center">
                    <p className="px-1 text-white text-xs">
                      Click để xem chi tiết
                    </p>
                    {/* <img
                      src={next_icon}
                      alt="next_icon"
                      className="px-1 w-8 h-8 object-contain"
                    /> */}
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  ...divStyle,
                }}
                className="absolute h-max flex bg-[#efffd1] rounded-md w-44 lg:w-56"
              >
                <div className="w-full h-full flex flex-col">
                  <div>
                    <h4 className="font-bold uppercase text-xs text-center p-1 lg:p-2">
                      Mặt bằng tiện ích{" "}
                      {hoveredUtilFloor === 0
                        ? "Tầng trệt"
                        : hoveredUtilFloor === 1
                        ? "Tầng 1"
                        : hoveredUtilFloor === 2
                        ? "Tầng 3"
                        : hoveredUtilFloor === 3
                        ? "Tầng 20"
                        : hoveredUtilFloor === 4
                        ? "Tầng mái"
                        : null}
                    </h4>
                  </div>

                  {/* <ul className="w-full h-full bg-[#ebffc5] p-1 justify-self-center text-center">
                <li className="w-full p-1">
                  <span className="text-xs-10 lg:text-xs text-gray-800 font-bold">
                    {
                      hoveredUtilFloor === 0 ? "Tầng trệt" : hoveredUtilFloor === 1 ? "Tầng 20" : "Tầng mái"
                    }
                  </span>
                </li>
              </ul> */}

                  <div className="w-full bg-(--sub) flex justify-center items-center">
                    <p className={`py-2 px-1 text-white text-xs`}>
                      Click để xem chi tiết
                    </p>
                    {/* <img
                      src={next_icon}
                      alt="next_icon"
                      className="px-1 w-8 h-8 object-contain"
                    /> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="car-container touch-none relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-[180%] md:w-full h-screen"
        // className="car-container absolute left-1/2 -translate-x-1/2 w-[180%] h-full"
        onDragStart={(e) => {
          e.preventDefault();
        }}
        // onTouchStart={(e) => handleInteractionStart(e.targetTouches[0].clientX)}
        // onTouchMove={(e) => handleInteractionMove(e.targetTouches[0].clientX)}
        // onTouchStart={(e) => {
        //   console.log("Touch Start");
        //   handleInteractionStart(e.targetTouches[0].clientX);
        // }}
        // onTouchMove={(e) => {
        //   console.log("Touch Move");
        //   handleInteractionMove(e.targetTouches[0].clientX);
        // }}
        // onTouchEnd={handleInteractionEnd}
        onPointerDown={(e) => {
          if (isSnapping) return;
          handlePointerDown(e);
        }}
        onPointerMove={(e) => {
          if (isSnapping) return;
          handlePointerMove(e);
        }}
        onPointerUp={(e) => {
          if (isSnapping) return;
          handlePointerUp(e);
        }}
        // onDoubleClick={handleDoubleClick}
        ref={imageRef}
      >
        {isGuideVisible && (
          <div
            onPointerDown={(e) => {
              if (!hasDraggedRef.current) {
                setIsGuideVisible(false);
              }
            }}
            onPointerMove={(e) => {
              if (!hasDraggedRef.current) {
                setIsGuideVisible(false);
              }
            }}
            onPointerUp={(e) => {
              if (!hasDraggedRef.current) {
                setIsGuideVisible(false);
              }
            }}
          >
            <GuideSVG isGuideVisible={isGuideVisible} />
          </div>
        )}
        {/* Load ảnh trước khi rotation */}
        <div className="image-container">
          {isLoading && (
            <div className="loading-container z-50">
              <div className="loading-overlay">
                <div className="loading-text">{loadingPercentage}%</div>
                <div className="loading-bar">
                  <div
                    className="loading-progress"
                    style={{ width: `${loadingPercentage}%` }}
                  ></div>
                </div>
                <div className="loading-text1">Đang tải dữ liệu</div>
                <div className="loading-text2">Xin vui lòng chờ...</div>
              </div>
            </div>
          )}
          <StopFramePlanComponent />
          <img
            className="car-image lg:scale-100 xl:scale-[1.0]"
            src={`/src/assets/images/rotation_utils/${frameIndex}.jpg`}
            alt="building"
          />
        </div>

        {/* Button: Nhấn vào tòa nào thì sẽ xoay đến frame của tòa đó */}
        {/* Option 1 */}
      </div>
      {!isVisibleFloorDetail && (
        <UtilitiesFilter
          isVisibleMobileFilter={isVisibleMobileFilter}
          setisVisibleMobileFilter={setisVisibleMobileFilter}
          smoothSnapToFrame={smoothSnapToFrame}
          isSnapping={isSnapping}
          frameIndex={frameIndex}
        />
      )}
    </>
  );
};

const UtilitiesFilter = ({
  isVisibleMobileFilter,
  setisVisibleMobileFilter,
  smoothSnapToFrame,
  isSnapping,
  frameIndex,
}) => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);

  return (
    <section
      className={`transition-all duration-300 Navbar_wrapper fixed bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 md:top-[425px] md:w-52 md:max-h-[430px] h-fit overflow-auto 
   bg-white/60 backdrop-blur-md border border-white/10 shadow-lg 
    rounded-none md:rounded-md px-4 py-2 md:p-2 space-y-4 md:space-y-2 z-[80] md:z-40`}
    >
      {isVisibleFilter && (
        <div className="w-full h-auto md:h-fit gap-1 text-center">
          <div>
            <h2 className="mb-2 text-sm font-bold text-(--sub) hidden md:inline-block">
              CÁC TÒA
            </h2>
            <div className="flex justify-center items-center md:grid md:grid-cols-2 gap-2">
              {/* hover:opacity-100 */}
              <div
                className={`py-2 px-5 ${
                  frameIndex === 75 ? "bg-[#FFC73C]" : "bg-(--sub)"
                } hover:bg-[#FFC73C] rounded-lg text-white text-xs cursor-pointer`}
                onClick={() => {
                  !isSnapping && smoothSnapToFrame(75);
                }}
              >
                Zenia
              </div>
              {/* hover:bg-[#ff7b6e] */}
              <div
                className={`py-2 px-5 ${
                  frameIndex === 45 ? "bg-[#ff7b6e]" : "bg-(--sub)"
                } hover:bg-[#ff7b6e] rounded-lg text-white text-xs cursor-pointer`}
                onClick={() => {
                  !isSnapping && smoothSnapToFrame(45);
                }}
              >
                Risa
              </div>
              {/* hover:bg-[#1d9597] */}
              <div
                className={`py-2 px-5 ${
                  frameIndex === 15 ? "bg-[#1d9597]" : "bg-(--sub)"
                } hover:bg-[#1d9597] rounded-lg text-white text-xs cursor-pointer`}
                onClick={() => {
                  !isSnapping && smoothSnapToFrame(15);
                }}
              >
                Vista
              </div>
              {/* hover:bg-[#7e0202] */}
              <div
                className={`py-2 px-5 ${
                  frameIndex === 105 ? "bg-[#7e0202]" : "bg-(--sub)"
                } hover:bg-[#7e0202] rounded-lg text-white text-xs cursor-pointer`}
                onClick={() => {
                  !isSnapping && smoothSnapToFrame(105);
                }}
              >
                Lira
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nút thu gọn */}
      <div
        className="hidden md:block bg-(--primary) px-10 rounded-md mt-2 text-(--sub) w-max mx-auto hover:cursor-pointer"
        onClick={() => setIsVisibleFilter(!isVisibleFilter)}
      >
        {isVisibleFilter ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
    </section>
  );
};

const Utilities = () => {
  const dispatch = useDispatch();
  const { activedGuideSVG } = useSelector((state) => state.guide);

  const planState = useSelector((state) => state.plan);
  const { activeHouseSampleView } = planState;
  const responsiveState = useSelector((state) => state.responsive);
  const { isMobile } = responsiveState;

  const [isMoving, setIsMoving] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  const [isAutoRotatePreviousNextFrame, setIsAutoRotatePreviousNextFrame] =
    useState(false);

  // Bộ Lọc
  const [iframeData, setIframeData] = useState({
    currentsence: null,
    sceneTitle: null,
  });
  const [isVisibleFloorDetail, setisVisibleFloorDetail] = useState(false);
  const [pathSelectedData, setPathSelectedData] = useState(null);
  const [isVisibleMobileFilter, setisVisibleMobileFilter] = useState(false);
  const [pathUtilSelected, setPathUtilSelected] = useState(null);
  const [isVisibleUtilDetail, setIsVisibleUtilDetail] = useState(false);

  const [blockId, setBlock] = useState(75);

  const handleSetIframeData = () => {
    // setIframeData(item.frameUrl);
    setIframeData((prevState) => ({
      ...prevState,
      currentsence: null,
      sceneTitle: null,
    }));
    setIsMoving(false);
  };

  const apartmentLayoutItem = apartmentLayout?.find(
    (item) => item.id === pathSelectedData?.apartmentLayout
  );

  useEffect(() => {
    if (isVisibleFloorDetail) {
      setIsMoving(false);
    }
  }, [isVisibleFloorDetail]);

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
      setisVisibleMobileFilter(false);
    } else {
      setisVisibleMobileFilter(true);
    }
  }, [isMobile]);

  // useEffect(() => {
  //   dispatch(hideGuide());
  //   dispatch(showGuideSVG());
  // }, []);

  const toggleFilterVisible = () => {
    setisVisibleMobileFilter(!isVisibleMobileFilter);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  }, []);

  useEffect(() => {
    !activedGuideSVG && dispatch(showGuideSVG());
  }, [dispatch]);

  const [isGuideVisible, setIsGuideVisible] = useState(true);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(75);

  return (
    <section
      className="Utilities_wrapper absolute h-full md:h-screen w-screen overflow-hidden
    "
    >
      <div
        className={`
        w-screen h-screen absolute top-0 left-0 z-[-1] blur-sm
      `}
      >
        <img
          src={`/src/assets/images/rotation_utils/${currentFrameIndex}.jpg`}
          alt="background"
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1] blur-sm"
        />
      </div>
      <div
        className={`${!iframeData.currentsence ? "block" : "hidden"} ${
          !isVisibleUtilDetail ? "block" : "hidden"
        }`}
      >
        <Rotation
          setIframeData={setIframeData}
          setisVisibleFloorDetail={setisVisibleFloorDetail}
          isVisibleFloorDetail={isVisibleFloorDetail}
          setPathSelectedData={setPathSelectedData}
          isMoving={isMoving}
          setIsMoving={setIsMoving}
          isAutoRotate={isAutoRotate}
          setIsAutoRotate={setIsAutoRotate}
          isAutoRotatePreviousNextFrame={isAutoRotatePreviousNextFrame}
          setIsAutoRotatePreviousNextFrame={setIsAutoRotatePreviousNextFrame}
          isMobile={isMobile}
          isVisibleMobileFilter={isVisibleMobileFilter}
          setisVisibleMobileFilter={setisVisibleMobileFilter}
          setPathUtilSelected={setPathUtilSelected}
          setIsVisibleUtilDetail={setIsVisibleUtilDetail}
          isGuideVisible={isGuideVisible}
          setIsGuideVisible={setIsGuideVisible}
          setCurrentFrameIndex={setCurrentFrameIndex}
          setBlock={setBlock}
          block={blockId}
        />
      </div>

      {/* Tab thông tin chi tiết mặt bằng */}
      {isVisibleFloorDetail && (
        <FloorDetail
          setisVisibleFloorDetail={setisVisibleFloorDetail}
          setPathSelectedData={setPathSelectedData}
          activeFilterItem={pathSelectedData}
          activeFilterNumber={blockId}
        />
      )}

      {/* Tab thông tin chi tiết tiện ích */}
      {isVisibleUtilDetail && (
        <UtilDetail
          blockId={blockId}
          pathUtilSelected={pathUtilSelected}
          setIsVisibleUtilDetail={setIsVisibleUtilDetail}
        />
      )}

      {/* Xem 360VR Căn hộ */}
      {activeHouseSampleView && (
        <HouseSampleView apartmentLayoutItem={apartmentLayoutItem} />
      )}

      {/* Các Nút  */}
      <SideTools
        OrtherTools={() => {
          return (
            <>
              {/* {!isVisibleFloorDetail && (
                <button
                  className={`w-10 h-10 ${
                    !isVisibleMobileFilter ? "bg-(--sub)" : "bg-sub/60"
                  }  flex md:hidden justify-center items-center rounded-md`}
                  onClick={() => toggleFilterVisible()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.0929 2.57912C1.25675 2.22596 1.61069 2 2.00001 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.3466 14.8206 21.6684 14.5257 21.8507C14.2309 22.0329 13.8628 22.0494 13.5528 21.8944L9.5528 19.8944C9.21402 19.725 9.00001 19.3788 9.00001 19V12.8261L1.23644 3.64573C0.985046 3.34845 0.929037 2.93229 1.0929 2.57912ZM4.15532 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V18.382L13 19.382V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.15532Z"
                      fill="white"
                    />
                  </svg>
                </button>
              )} */}
            </>
          );
        }}
      />
    </section>
  );
};

export default Utilities;
