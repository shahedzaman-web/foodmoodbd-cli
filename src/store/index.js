import {api} from './services/api';
import {authApi} from './services/authApi';
import {authSlice} from './slices/authSlice';
import {configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {userInfoSlice} from './slices/userInfoSlice';
import rootReducers from './reducers/rootReducers';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {cartSlice} from './slices/cartSlice';
import {welcomeSlice} from './slices/welcomeSlice';

const persistConfig = {
  key: '@testV10',
  version: 1,
  storage: AsyncStorage,
  whitelist: [
    authSlice.name,
    userInfoSlice.name,
    cartSlice.name,
    welcomeSlice.name,
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
