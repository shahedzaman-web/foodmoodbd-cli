import {createSlice} from '@reduxjs/toolkit';
import {api} from '../services/api';
// import { authApi } from "../services/authApi";

const initialState = {
  areaId: null,
};
export const areaIdSlice = createSlice({
  name: 'areaId',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.getAreaId.matchFulfilled,
      (state, {payload}) => {
        state.areaId = payload.data.id;
      },
    );
  },
});
