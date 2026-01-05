// import { Menu } from "antd";
// import { useEffect, useRef } from "react";
// import useKrpano from "react-krpano-hooks";
// import { useNavigate, useParams } from "react-router-dom";

// const APARTMENTS = {
//   living: {
//     label: "Phòng khách",
//     sceneId: "scene_R0011231_20250502120525",
//   },
//   bedroom: {
//     label: "Phòng ngủ",
//     sceneId: "scene_R0011232_20250502120604",
//   },
//   kitchen: {
//     label: "Nhà bếp",
//     sceneId: "scene_R0011233_20250502120641",
//   },
// };

// export default function Home() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Thêm ref để track scene đã load
//   const lastSceneRef = useRef(null);

//   const { containerRef, callKrpano } = useKrpano({
//     xml: "/krpano/tour.xml",
//   });

//   console.log("=== Home render ===");

//   const currentType = type || "living";
//   const currentApt = APARTMENTS[currentType];

//   useEffect(() => {
//     console.log("=== Home useEffect ===");
//     console.log("Current scene:", currentApt.sceneId);
//     console.log("Last scene:", lastSceneRef.current);
//     console.log("callKrpano available:", !!callKrpano);

//     if (!currentApt || !callKrpano) {
//       console.warn("Missing apartment or callKrpano not ready");
//       return;
//     }

//     // Kiểm tra nếu scene này đã được load rồi
//     if (lastSceneRef.current === currentApt.sceneId) {
//       console.log("Scene already loaded, skipping...");
//       return;
//     }

//     // Delay nhỏ để đảm bảo DOM ready
//     const timeout = setTimeout(() => {
//       try {
//         console.log("Loading scene:", currentApt.sceneId);

//         // QUAN TRỌNG: Kiểm tra scene có tồn tại trong XML không
//         // Thử trace scene list trước
//         callKrpano(`
//           trace("=== Checking scenes ===");
//           for(set(i,0), i LT scene.count, inc(i),
//             trace("Scene " + i + ": " + get(scene[get(i)].name));
//           );
//         `);

//         // Thử nhiều cách load scene khác nhau
//         const sceneCmd = `loadscene(${currentApt.sceneId}, null, MERGE)`;
//         console.log("Calling command:", sceneCmd);

//         callKrpano(sceneCmd);

//         // Hoặc thử cách khác nếu không được
//         // callKrpano(`loadscene('${currentApt.sceneId}')`);
//         // callKrpano(`loadpano(null, MERGE); loadscene(${currentApt.sceneId});`);

//         console.log("✓ Scene load command sent");
//         lastSceneRef.current = currentApt.sceneId;

//         // Kiểm tra xem scene có load thành công không
//         setTimeout(() => {
//           callKrpano(`trace("Current scene: " + xml.scene)`);
//           callKrpano(
//             `trace("Target scene loaded: " + (xml.scene === '${currentApt.sceneId}' ? "YES" : "NO"))`
//           );
//         }, 500);
//       } catch (err) {
//         console.error("✗ Error loading scene:", err);

//         // Thử cách load đơn giản hơn
//         try {
//           callKrpano(`loadscene(${currentApt.sceneId})`);
//         } catch (err2) {
//           console.error("✗ Even simple load failed:", err2);
//         }
//       }
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, [currentType, currentApt, callKrpano]);

//   const handleMenuClick = (key) => {
//     console.log("Menu clicked:", key);
//     navigate(`/house/${key}`);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-100 p-4 border-r overflow-y-auto pt-96">
//         <h2 className="text-lg font-bold mb-4">Các khu vực</h2>
//         <Menu
//           items={Object.entries(APARTMENTS).map(([key, apt]) => ({
//             key,
//             label: apt.label,
//             onClick: () => handleMenuClick(key),
//           }))}
//           selectedKeys={[currentType]}
//         />

//         {/* Debug panel */}
//         <div className="mt-4 p-3 bg-gray-800 text-white rounded text-sm">
//           <div className="font-bold">Debug Info:</div>
//           <div>Current: {currentApt.label}</div>
//           <div>Scene: {currentApt.sceneId}</div>
//           <div>Last loaded: {lastSceneRef.current || "None"}</div>
//           <button
//             className="mt-2 px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 text-xs"
//             onClick={() => {
//               if (callKrpano) {
//                 callKrpano("showlog();");
//               }
//             }}
//           >
//             Show Krpano Log
//           </button>
//         </div>
//       </div>

//       <div
//         ref={containerRef}
//         style={{
//           width: "calc(100% - 256px)",
//           height: "100%",
//           backgroundColor: "#000", // Thêm background đen để dễ nhìn
//         }}
//         className="krpano-container"
//       />
//     </div>
//   );
// }

// import { Menu } from "antd";
// import { useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const APARTMENTS = {
//   living: { label: "Phòng khách", sceneId: "scene_R0011231_20250502120525" },
//   bedroom: { label: "Phòng ngủ", sceneId: "scene_R0011232_20250502120604" },
//   kitchen: { label: "Nhà bếp", sceneId: "scene_R0011233_20250502120641" },
// };

// export default function Home() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   const containerRef = useRef(null);
//   const initDone = useRef(false);

//   const currentType = type || "living";
//   const currentApt = APARTMENTS[currentType];

//   // Effect 1: Khởi tạo krpano
//   useEffect(() => {
//     if (initDone.current || !containerRef.current) return;

//     console.log("INIT: Embedding krpano...");

//     // Sử dụng setTimeout để tránh blocking
//     setTimeout(() => {
//       try {
//         window.embedpano({
//           swf: "/krpano/tour.swf",
//           xml: "/krpano/tour.xml",
//           target: containerRef.current,
//           html5: "always",
//           vars: {
//             startscene: currentApt.sceneId, // QUAN TRỌNG: Load scene ngay từ XML
//           },
//         });
//         initDone.current = true;
//         console.log("INIT: Krpano embedded");
//       } catch (e) {
//         console.error("INIT ERROR:", e);
//       }
//     }, 100);
//   }, []);

//   // Effect 2: Xử lý chuyển scene
//   useEffect(() => {
//     if (!initDone.current || !window.krpano) return;

//     console.log(`SCENE: Attempting to load ${currentApt.sceneId}`);

//     // Sử dụng interval để thử load scene
//     const interval = setInterval(() => {
//       if (window.krpano && window.krpano.call) {
//         try {
//           window.krpano.call(`loadscene(${currentApt.sceneId})`);
//           console.log(`SCENE: ${currentApt.sceneId} loaded`);
//           clearInterval(interval);
//         } catch (e) {
//           console.log(`SCENE: Waiting for scene to be available...`);
//         }
//       }
//     }, 300);

//     // Cleanup sau 10s
//     setTimeout(() => clearInterval(interval), 10000);

//     return () => clearInterval(interval);
//   }, [currentType, currentApt]);

//   const handleMenuClick = (key) => {
//     navigate(`/house/${key}`);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-100 p-4 border-r">
//         <h2 className="text-lg font-bold mb-4">Các khu vực</h2>
//         <Menu
//           items={Object.entries(APARTMENTS).map(([key, apt]) => ({
//             key,
//             label: apt.label,
//             onClick: () => handleMenuClick(key),
//           }))}
//           selectedKeys={[currentType]}
//         />
//       </div>

//       <div
//         ref={containerRef}
//         style={{
//           flex: 1,
//           height: "100%",
//           backgroundColor: "#000",
//         }}
//       />
//     </div>
//   );
// }

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
    navigate(`/house/${key}`);
  };

  return (
    <div className="flex w-screen h-screen fixed inset-0">
      <div className="w-64 bg-gray-100 p-4 border-r overflow-y-auto pt-96">
        <h2 className="text-lg font-bold mb-4">Các khu vực</h2>
        <Menu
          items={Object.entries(APARTMENTS).map(([key, apt]) => ({
            key,
            label: apt.label,
            onClick: () => handleMenuClick(key),
          }))}
          selectedKeys={[currentType]}
        />

        {/* Debug panel */}
        {/* <div className="mt-4 p-3 bg-gray-800 text-white rounded text-sm">
          <div className="font-bold">Debug Info:</div>
          <div className="mt-1 space-y-1">
            <div>Krpano Ready: {krpanoReady ? "✅" : "⏳"}</div>
            <div>Current: {currentApt.label}</div>
            <div>Scene: {currentApt.sceneId}</div>
            <div>Last Loaded: {lastSceneRef.current || "None"}</div>
          </div>

          <button
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-xs"
            onClick={() => {
              if (window.krpano) {
                window.krpano.call("showlog();");
              } else {
                console.log("window.krpano not available");
              }
            }}
          >
            Show Krpano Log
          </button>

          <button
            className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-1 rounded text-xs"
            onClick={() => {
              if (window.krpano) {
                window.krpano.call(`
                  trace("=== DEBUG ===");
                  trace("Scene count: " + scene.count);
                  for(set(i,0), i LT scene.count, inc(i),
                    trace("Scene " + i + ": " + get(scene[get(i)].name));
                  );
                  trace("Current scene: " + xml.scene);
                `);
              }
            }}
          >
            Debug Scenes
          </button>

          <button
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-1 rounded text-xs"
            onClick={() => {
              if (window.krpano && currentApt) {
                console.log("Manual load attempt:", currentApt.sceneId);
                window.krpano.call(`loadscene(${currentApt.sceneId})`);
              }
            }}
          >
            Manual Load Current
          </button>
        </div> */}
      </div>

      <div
        ref={containerRef}
        style={{
          width: "calc(100% - 256px)",
          height: "100%",
          backgroundColor: "#000",
        }}
        className="krpano-container"
      />
    </div>

    /*a092409283904820948230984234320948*/
    // <section
    //   className="top-4 left-2 md:left-4 w-48 md:w-52 h-auto
    // bg-white/60 backdrop-blur-md border border-white/10 shadow-lg
    // rounded-md p-2 space-y-2 z-50 pt-96"
    // >
    //   <div className={`transition-all duration-500 `}>
    //     <h2 className="text-lg font-bold mb-4">Các khu vực</h2>
    //     <Menu
    //       items={Object.entries(APARTMENTS).map(([key, apt]) => ({
    //         key,
    //         label: apt.label,
    //         onClick: () => handleMenuClick(key),
    //       }))}
    //       selectedKeys={[currentType]}
    //     />
    //   </div>

    //   <div
    //     ref={containerRef}
    //     style={{
    //       width: "calc(100% - 256px)",
    //       height: "100%",
    //       backgroundColor: "#000",
    //     }}
    //     className="krpano-container"
    //   />
    // </section>
  );
}
