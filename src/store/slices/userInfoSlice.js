import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";


const initialState = {
  id: null,
  name: "",
  avatar: "",
  email: "",
  status: "",
  phone: "",
};
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,

  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.sendUserInfo.matchFulfilled, (state,{payload}) => {
      state.id = payload.id;
      state.name = payload.name;
      state.avatar = payload.avatar;
      state.email = payload.email;
      state.status = payload.status;
      state.phone = payload.phone_number !== null ? payload.phone_number : "";
    });
    builder.addMatcher(authApi.endpoints.logoutUser.matchRejected, (state) => {
      state.id = null;
      state.name = "";
      state.avatar = "";
      state.email = "";
      state.status = "";
    }
    );
  }
});

export const { storeUserInfo } = userInfoSlice.actions;
