import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeHouseSampleView: false,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setActiveHouseSampleView: (state, action) => {
      state.activeHouseSampleView = action.payload;
    },
  },
});

export default planSlice.reducer;
export const { setActiveHouseSampleView } = planSlice.actions;
