import { Outlet, useLocation } from "react-router-dom";
// import logo_section from "../../assets/logo/logo_section.png";
import { useDispatch, useSelector } from "react-redux";
import Guide from "../../components/Guide";
import GuideSVG2 from "../../components/Guide/GuideSVG2";
import Navbar from "../../components/Navbar";

const SharedLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const planState = useSelector((state) => state.plan);
  const { activeHouseSampleView } = planState;

  return (
    <section className="">
      <Navbar />
      <Outlet />
      <Guide />
      <GuideSVG2 />
    </section>
  );
};

export default SharedLayout;
