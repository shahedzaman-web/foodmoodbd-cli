import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";

const initialState = {
  isAuthenticated: false,
  provider: "",
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
 
    provider: (state, action) => {
      state.provider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signInUser.matchFulfilled,

      (state, { payload }) => {
        // // console.log({ payload });

        state.isAuthenticated = true;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.socialLogin.matchFulfilled,
      (state, { payload }) => {
        // // console.log({ payload });
        state.isAuthenticated = true;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.otpVerify.matchFulfilled,
      (state, { payload }) => {
        // // console.log({ payload });
        state.isAuthenticated = true;
        state.token = payload.token;
      }
    );
    builder.addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
      state.isAuthenticated = false;
      state.provider = "";
      state.token = null;
    });
  },
});
export const { provider } = authSlice.actions;
