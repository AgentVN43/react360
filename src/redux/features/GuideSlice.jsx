import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guide: false,
  activedGuide: false,
  guideSVG: false,
  activedGuideSVG: false,
  guideSVG2: false,
  activedGuideSVG2: false,
};

const guideSlice = createSlice({
  name: "guide",
  initialState,
  reducers: {
    hideGuide: (state) => {
      state.guide = false;
      state.activedGuide = true;
    },
    showGuide: (state) => {
      state.guide = true;
    },
    hideGuideSVG: (state) => {
      state.guideSVG = false;
      state.activedGuideSVG = true;
    },
    showGuideSVG: (state) => {
      state.guideSVG = true;
    },
    hideGuideSVG2: (state) => {
      state.guideSVG2 = false;
      state.activedGuideSVG2 = true;
    },
    showGuideSVG2: (state) => {
      state.guideSVG2 = true;
    },
  },
});

export default guideSlice.reducer;
export const { hideGuide, showGuide, hideGuideSVG, showGuideSVG, hideGuideSVG2, showGuideSVG2 } = guideSlice.actions;
