import { createSlice } from "@reduxjs/toolkit";
import English from "../../locales/en.json";
import VietNamese from "../../locales/vi.json";

const initialState = {
    locale: "vi",
    messages: VietNamese,
  };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    selectLanguage: (state, action) => {
        if(action.payload === "en") {
            state.messages = English;
            state.locale = "en";
        } else {
            state.messages = VietNamese;
            state.locale = "vi";
        }
      
    },
  },
});

export default languageSlice.reducer;
export const { selectLanguage } = languageSlice.actions;
