"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = void 0;

var _api = require("./services/api");

var _authApi = require("./services/authApi");

var _authSlice = require("./slices/authSlice");

var _toolkit = require("@reduxjs/toolkit");

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

var _reduxPersist = require("redux-persist");

var _userInfoSlice = require("./slices/userInfoSlice");

var _rootReducers = _interopRequireDefault(require("./reducers/rootReducers"));

var _query = require("@reduxjs/toolkit/dist/query");

var _cartSlice = require("./slices/cartSlice");

var _welcomeSlice = require("./slices/welcomeSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: '@testV6',
  version: 1,
  storage: _asyncStorage["default"],
  whitelist: [_authSlice.authSlice.name, _userInfoSlice.userInfoSlice.name, _cartSlice.cartSlice.name, _welcomeSlice.welcomeSlice.name]
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _rootReducers["default"]);
var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
      }
    }).concat(_authApi.authApi.middleware, _api.api.middleware);
  }
});
(0, _query.setupListeners)(store.dispatch);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = store;
exports["default"] = _default;