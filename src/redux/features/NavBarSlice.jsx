import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: 1,
    isSmall: true,
  };

const navbarSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // updateScene: (state, action) => {
    //   state.currentscene = action.payload;
    // },
    // updateImage: (state, action) => {
    //     state.currentimage = action.payload;
    // },
    setActiveMenu: (state, action) => {
        state.activeMenu = action.payload;
    },
    setSmallMenu: (state, action) => {
      state.isSmall = action.payload;
    }
    // updateActiveSubMenu: (state, action) => {
    //     state.activeSubMenu = action.payload;
    // },
    // updateActiveChildMenu: (state, action) => {
    //     state.activeChildMenu = action.payload;
    // },
  },
});

export default navbarSlice.reducer;
export const { setActiveMenu, setSmallMenu } = navbarSlice.actions;
