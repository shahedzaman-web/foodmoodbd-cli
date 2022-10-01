import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLocationAvailable: false,
  latitude: null,
  longitude: null,
  address: null,
  city: null,
  state: null,
  country: null,
  premise: null,
  route: null,
};
export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    storeLocation: (state, action) => {
      state.isLocationAvailable = true;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.country = action.payload.country;
      state.premise = action.payload.premise;
      state.route = action.payload.route;
    },
  },

  //   extraReducers: (builder) => {

  //     builder.addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
  //       state.isLocationAvailable = false;
  //       state.latitude = null;
  //       state.longitude = null;
  //       state.address = null;
  //     });

  //   },
});

export const {storeLocation} = locationSlice.actions;
