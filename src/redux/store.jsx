import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./features/LanguageSlice";
import NavBarRuducer from "./features/NavBarSlice";
import GuideReducer from "./features/GuideSlice";
import PlanReducer from "./features/PlanSlice";
import responsiveReducer from "./features/ResponsiveSlice";

const store = configureStore({
  reducer: {
    language: LanguageReducer,
    nav: NavBarRuducer,
    guide: GuideReducer,
    plan: PlanReducer,
    responsive: responsiveReducer,
  },
});

export default store;
