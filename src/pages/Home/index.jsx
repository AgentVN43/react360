import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const APARTMENTS = {
  living: { label: "Phòng khách", sceneId: "scene_R0011231_20250502120525" },
  bedroom: { label: "Phòng ngủ", sceneId: "scene_R0011232_20250502120604" },
  kitchen: { label: "Nhà bếp", sceneId: "scene_R0011233_20250502120641" },
};

export default function Home() {
  const { type } = useParams();
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const initDone = useRef(false);
  const [krpanoReady, setKrpanoReady] = useState(false);
  const lastSceneRef = useRef("");

  const currentType = type || "living";
  const currentApt = APARTMENTS[currentType];

  // Effect 1: Khởi tạo krpano
  useEffect(() => {
    if (initDone.current || !containerRef.current) return;

    console.log("INIT: Embedding krpano...");

    // Sử dụng setTimeout để tránh blocking
    setTimeout(() => {
      try {
        window.embedpano({
          swf: "/krpano/tour.swf",
          xml: "/krpano/tour.xml",
          target: containerRef.current,
          html5: "always",
          consolelog: true, // Bật log để debug
          onready: (krpano) => {
            console.log("KRPANO READY!");
            window.krpano = krpano;
            setKrpanoReady(true);

            // Load scene đầu tiên
            if (currentApt) {
              setTimeout(() => {
                console.log(`Loading initial scene: ${currentApt.sceneId}`);
                krpano.call(`loadscene(${currentApt.sceneId}, null, MERGE)`);
                lastSceneRef.current = currentApt.sceneId;
              }, 500);
            }
          },
          onerror: (error) => {
            console.error("KRPANO ERROR:", error);
          },
        });
        initDone.current = true;
        console.log("INIT: Krpano embedded");
      } catch (e) {
        console.error("INIT ERROR:", e);
      }
    }, 100);
  }, []);

  // Effect 2: Xử lý chuyển scene khi menu click
  useEffect(() => {
    if (!krpanoReady || !window.krpano || !currentApt) {
      console.log("Not ready for scene change:", {
        krpanoReady,
        hasKrpano: !!window.krpano,
        currentApt,
      });
      return;
    }

    // Không load lại scene đang hiện tại
    if (lastSceneRef.current === currentApt.sceneId) {
      console.log("Same scene, skipping...");
      return;
    }

    console.log(
      `SCENE CHANGE: ${lastSceneRef.current} -> ${currentApt.sceneId}`
    );

    const loadScene = () => {
      try {
        console.log(`Attempting to load: ${currentApt.sceneId}`);

        // Cách 1: Thử load trực tiếp
        window.krpano.call(
          `loadscene(${currentApt.sceneId}, null, MERGE,BLEND(1))`
        );
        lastSceneRef.current = currentApt.sceneId;
        console.log(`Scene ${currentApt.sceneId} loaded successfully`);
      } catch (error) {
        console.error(`Failed to load scene ${currentApt.sceneId}:`, error);

        // Cách 2: Thử với retry
        setTimeout(() => {
          try {
            window.krpano.call(`loadscene('${currentApt.sceneId}')`);
            lastSceneRef.current = currentApt.sceneId;
          } catch (err2) {
            console.error("Retry also failed:", err2);
          }
        }, 300);
      }
    };

    // Delay nhỏ để đảm bảo DOM ready
    const timer = setTimeout(loadScene, 100);
    return () => clearTimeout(timer);
  }, [currentType, currentApt, krpanoReady]);

  const handleMenuClick = (key) => {
    console.log(`Menu clicked: ${key}`);
    setActiveFilterNumber(key)
    navigate(`/house/${key}`);
  };
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);
  const [activeFilterNumber, setActiveFilterNumber] = useState("living")
  return (
    <div className="flex w-screen h-screen fixed inset-0">
      <section
        className={`transition-all duration-300 Navbar_wrapper fixed bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 md:top-[425px] md:w-52 md:max-h-[430px] h-fit overflow-auto 
   bg-white/60 backdrop-blur-md border border-white/10 shadow-lg 
    rounded-md px-4 py-2 md:p-2 md:space-y-2 z-[80] md:z-40`}
      >
        {isVisibleFilter && (
          <div className="w-full h-auto md:h-fit gap-1 text-center">
            <div>
              <h2 className="mb-2 text-sm font-bold text-(--sub) hidden md:inline-block uppercase">Các khu vực</h2>
              {/* <Menu
                items={Object.entries(APARTMENTS).map(([key, apt]) => ({
                  key,
                  label: apt.label,
                  onClick: () => handleMenuClick(key),
                }))}
                selectedKeys={[currentType]}
              /> */}
              <ul className="grid grid-cols-3 md:grid-cols-1 gap-1 w-max md:w-auto">
                {Object.entries(APARTMENTS).map(([key, item]) => (
                  <li
                    key={key}
                    className={`w-full h-8 px-2 hover:bg-(--primary) hover:text-(--sub) text-center text-xs flex justify-center items-center rounded-md hover:cursor-pointer ${activeFilterNumber === key
                      ? "bg-(--primary) text-(--sub) font-semibold"
                      : "bg-(--sub) text-white"
                      }`} onClick={() => handleMenuClick(key)}>
                    {item.label}
                  </li>))}
              </ul>
            </div>
          </div>
        )}
        <div
          className="hidden md:block bg-(--primary) px-10 rounded-md mt-2 text-(--sub) w-max mx-auto hover:cursor-pointer"
          onClick={() => setIsVisibleFilter(!isVisibleFilter)}
        >
          {isVisibleFilter ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </div>

      </section >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
        }}
        className="krpano-container"
      />
    </div>
  );
}
