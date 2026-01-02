import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false,
    isTablet: false,
  };

const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    updateResponsiveState: (state) => {
      state.isMobile = window.innerWidth <= 768;
      state.isTablet = window.innerWidth <= 1024;
    },
  },
});

export default responsiveSlice.reducer;
export const { updateResponsiveState } = responsiveSlice.actions;
