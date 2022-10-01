"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetTaxQuery = exports.useNewNotificationQuery = exports.useAppNotificationQuery = exports.useChangePaymentStatusMutation = exports.useSearchResultQuery = exports.useSearchTextMutation = exports.useFavouritesListQuery = exports.useAllFavoriteRestaurantsListQuery = exports.useMessageDeleteByIdMutation = exports.useSendMessageMutation = exports.useChatFileUploadMutation = exports.useConversationDeleteMutation = exports.useGetChatHistoryByIdQuery = exports.useChatIndexQuery = exports.useApplyCouponMutation = exports.useGetRestaurantProductsWithStoreIdQuery = exports.useRestaurantByCategoryQuery = exports.useGetUserOrderDetailsQuery = exports.useCreateOrderMutation = exports.useGetUserPerviousOrdersQuery = exports.useGetDeliveryFeeQuery = exports.useGetRestaurantDetailsByIdQuery = exports.useGetRestaurantsByAreaIdQuery = exports.useGetAreaIdQuery = exports.api = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _config = _interopRequireDefault(require("../../utils/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _react.createApi)({
  baseQuery: (0, _react.fetchBaseQuery)({
    reducerPath: "commonApi",
    baseUrl: _config["default"].base_url,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 30000,
    setTimeout: function setTimeout(timeout) {
      return timeout;
    },
    prepareHeaders: function prepareHeaders(headers, _ref) {
      var getState = _ref.getState;
      var token = getState().auth.token;

      if (token) {
        headers.set("Authorization", "Bearer ".concat(token));
      }

      return headers;
    }
  }),
  tagTypes: ["chat", "Favorite"],
  endpoints: function endpoints(builder) {
    return {
      getAreaId: builder.query({
        query: function query(city) {
          return {
            url: "/area/".concat(city),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getRestaurantsByAreaId: builder.query({
        query: function query(areaId) {
          return {
            //  url: `/home/${areaId}`,
            url: "/home/1",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getRestaurantDetailsById: builder.query({
        query: function query(restaurantId) {
          return {
            url: "/restaurant/".concat(restaurantId),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getRestaurantProductsWithStoreId: builder.query({
        query: function query(storeId) {
          return {
            url: "/productlist/".concat(storeId),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getDeliveryFee: builder.query({
        query: function query() {
          return {
            url: "/delivery_fee",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getUserPerviousOrders: builder.query({
        query: function query() {
          return {
            url: "/customer/orders",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      createOrder: builder.mutation({
        query: function query(data) {
          return {
            url: "/create_order",
            method: "Post",
            body: data,
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getUserOrderDetails: builder.query({
        query: function query(orderId) {
          return {
            url: "/customer/order/".concat(orderId),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      restaurantByCategory: builder.query({
        query: function query(categoryName) {
          return {
            url: "/category/".concat(categoryName),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      applyCoupon: builder.mutation({
        query: function query(data) {
          return {
            url: "/coupon-apply",
            method: "Post",
            body: data,
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      chatIndex: builder.query({
        query: function query() {
          return {
            url: "/chat/index",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        providesTags: ["chat"]
      }),
      getChatHistoryById: builder.query({
        query: function query(chatId) {
          return {
            url: "/chat/get-history/".concat(chatId),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        providesTags: ["chat"]
      }),
      conversationDelete: builder.mutation({
        query: function query(chatId) {
          return {
            url: "/chat/conversation/delete/".concat(chatId),
            method: "Delete"
          };
        },
        invalidatesTags: ["chat"]
      }),
      chatFileUpload: builder.mutation({
        query: function query(data) {
          return {
            url: "/chat/message/file-upload",
            method: "Post",
            body: data,
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        invalidatesTags: ["chat"]
      }),
      sendMessage: builder.mutation({
        query: function query(data) {
          return {
            url: "/chat/message/send",
            method: "Post",
            body: data,
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        invalidatesTags: ["chat"]
      }),
      messageDeleteById: builder.mutation({
        query: function query(messageId) {
          return {
            url: "/chat/message/delete/".concat(messageId),
            method: "Delete",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        invalidatesTags: ["chat"]
      }),
      allFavoriteRestaurantsList: builder.query({
        query: function query() {
          return {
            url: "/favourite-stores",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        providesTags: ["Favorite"]
      }),
      favouritesList: builder.query({
        query: function query() {
          return {
            url: "/favourites",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        },
        providesTags: ["Favorite"]
      }),
      searchText: builder.mutation({
        query: function query(data) {
          return {
            url: "/search?text_search=".concat(data),
            method: "Post",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      searchResult: builder.query({
        query: function query(data) {
          return {
            url: "/restaurant-search?search=".concat(data),
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      changePaymentStatus: builder.mutation({
        query: function query(data) {
          return {
            url: "/mobile-payment",
            method: "Post",
            body: data,
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      appNotification: builder.query({
        query: function query() {
          return {
            url: "/notifications",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      newNotification: builder.query({
        query: function query() {
          return {
            url: "/get-notifications",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      }),
      getTax: builder.query({
        query: function query() {
          return {
            url: "/tax-fee",
            method: "Get",
            validateStatus: function validateStatus(response, result) {
              return response.status === 200 && !result.isError;
            } // Our tricky API always returns a 200, but sets an `isError` property when there is an error.

          };
        }
      })
    };
  }
});
exports.api = api;
var useGetAreaIdQuery = api.useGetAreaIdQuery,
    useGetRestaurantsByAreaIdQuery = api.useGetRestaurantsByAreaIdQuery,
    useGetRestaurantDetailsByIdQuery = api.useGetRestaurantDetailsByIdQuery,
    useGetDeliveryFeeQuery = api.useGetDeliveryFeeQuery,
    useGetUserPerviousOrdersQuery = api.useGetUserPerviousOrdersQuery,
    useCreateOrderMutation = api.useCreateOrderMutation,
    useGetUserOrderDetailsQuery = api.useGetUserOrderDetailsQuery,
    useRestaurantByCategoryQuery = api.useRestaurantByCategoryQuery,
    useGetRestaurantProductsWithStoreIdQuery = api.useGetRestaurantProductsWithStoreIdQuery,
    useApplyCouponMutation = api.useApplyCouponMutation,
    useChatIndexQuery = api.useChatIndexQuery,
    useGetChatHistoryByIdQuery = api.useGetChatHistoryByIdQuery,
    useConversationDeleteMutation = api.useConversationDeleteMutation,
    useChatFileUploadMutation = api.useChatFileUploadMutation,
    useSendMessageMutation = api.useSendMessageMutation,
    useMessageDeleteByIdMutation = api.useMessageDeleteByIdMutation,
    useAllFavoriteRestaurantsListQuery = api.useAllFavoriteRestaurantsListQuery,
    useFavouritesListQuery = api.useFavouritesListQuery,
    useSearchTextMutation = api.useSearchTextMutation,
    useSearchResultQuery = api.useSearchResultQuery,
    useChangePaymentStatusMutation = api.useChangePaymentStatusMutation,
    useAppNotificationQuery = api.useAppNotificationQuery,
    useNewNotificationQuery = api.useNewNotificationQuery,
    useGetTaxQuery = api.useGetTaxQuery;
exports.useGetTaxQuery = useGetTaxQuery;
exports.useNewNotificationQuery = useNewNotificationQuery;
exports.useAppNotificationQuery = useAppNotificationQuery;
exports.useChangePaymentStatusMutation = useChangePaymentStatusMutation;
exports.useSearchResultQuery = useSearchResultQuery;
exports.useSearchTextMutation = useSearchTextMutation;
exports.useFavouritesListQuery = useFavouritesListQuery;
exports.useAllFavoriteRestaurantsListQuery = useAllFavoriteRestaurantsListQuery;
exports.useMessageDeleteByIdMutation = useMessageDeleteByIdMutation;
exports.useSendMessageMutation = useSendMessageMutation;
exports.useChatFileUploadMutation = useChatFileUploadMutation;
exports.useConversationDeleteMutation = useConversationDeleteMutation;
exports.useGetChatHistoryByIdQuery = useGetChatHistoryByIdQuery;
exports.useChatIndexQuery = useChatIndexQuery;
exports.useApplyCouponMutation = useApplyCouponMutation;
exports.useGetRestaurantProductsWithStoreIdQuery = useGetRestaurantProductsWithStoreIdQuery;
exports.useRestaurantByCategoryQuery = useRestaurantByCategoryQuery;
exports.useGetUserOrderDetailsQuery = useGetUserOrderDetailsQuery;
exports.useCreateOrderMutation = useCreateOrderMutation;
exports.useGetUserPerviousOrdersQuery = useGetUserPerviousOrdersQuery;
exports.useGetDeliveryFeeQuery = useGetDeliveryFeeQuery;
exports.useGetRestaurantDetailsByIdQuery = useGetRestaurantDetailsByIdQuery;
exports.useGetRestaurantsByAreaIdQuery = useGetRestaurantsByAreaIdQuery;
exports.useGetAreaIdQuery = useGetAreaIdQuery;