import useKrpano from "react-krpano-hooks";

export default function Home() {
  const { containerRef } = useKrpano();

  return <div ref={containerRef} />;
}
