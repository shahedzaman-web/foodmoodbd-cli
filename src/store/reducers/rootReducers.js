import { api } from "../services/api";
import { authApi } from "../services/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";
import { userInfoSlice } from "../slices/userInfoSlice";
import { locationSlice } from "../slices/locationSlice";
import { areaIdSlice } from "../slices/areaIdSlice";
import { cartSlice } from "../slices/cartSlice";
import { welcomeSlice } from "../slices/welcomeSlice";
import { notificationSlice } from "../slices/notificationSlice";

export default combineReducers({
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userInfoSlice.name]: userInfoSlice.reducer,
  [locationSlice.name]: locationSlice.reducer,
  [areaIdSlice.name]: areaIdSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [welcomeSlice.name]: welcomeSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
