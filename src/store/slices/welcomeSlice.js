import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenViewed: false,
};
export const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    setScreenViewed: (state) => {
      state.screenViewed = true;
    },
  },
});
export const { setScreenViewed } = welcomeSlice.actions;
