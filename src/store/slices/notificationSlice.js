import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

const initialState = {
  notifications: 0,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notificationViewed: (state) => {
      state.notifications = 0;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.newNotification.matchFulfilled,
      (state, { payload }) => {
        state.notifications = payload.count_notification;
      }
    );
  },
});

export const { notificationViewed } = notificationSlice.actions;
