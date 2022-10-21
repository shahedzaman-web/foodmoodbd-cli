import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../../utils/config';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: 'commonApi',
    baseUrl: config.base_url,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 30000,
    setTimeout: timeout => {
      return timeout;
    },
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['chat', 'Favorite'],
  endpoints: builder => ({
    getAreaId: builder.query({
      query: city => {
        return {
          url: `/area/${city}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getRestaurantsByAreaId: builder.query({
      query: areaId => {
        return {
          url: `/home/${areaId}`,
            // url: `/home/1`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getRestaurantDetailsById: builder.query({
      query: restaurantId => {
        return {
          url: `/restaurant/${restaurantId}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getRestaurantProductsWithStoreId: builder.query({
      query: storeId => {
        return {
          url: `/productlist/${storeId}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getDeliveryFee: builder.query({
      query: () => {
        return {
          url: `/delivery_fee`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getUserPerviousOrders: builder.query({
      query: () => {
        return {
          url: `/customer/orders`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    createOrder: builder.mutation({
      query: data => {
        return {
          url: `/create_order`,
          method: 'Post',
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getUserOrderDetails: builder.query({
      query: orderId => {
        return {
          url: `/customer/order/${orderId}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    restaurantByCategory: builder.query({
      query: categoryName => {
        return {
          url: `/category/${categoryName}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    applyCoupon: builder.mutation({
      query: data => {
        return {
          url: `/coupon-apply`,
          method: 'Post',
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    chatIndex: builder.query({
      query: () => {
        return {
          url: `/chat/index`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      providesTags: ['chat'],
    }),
    getChatHistoryById: builder.query({
      query: chatId => {
        return {
          url: `/chat/get-history/${chatId}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      providesTags: ['chat'],
    }),
    conversationDelete: builder.mutation({
      query: chatId => {
        return {
          url: `/chat/conversation/delete/${chatId}`,
          method: 'Delete',
        };
      },
      invalidatesTags: ['chat'],
    }),
    chatFileUpload: builder.mutation({
      query: data => {
        return {
          url: `/chat/message/file-upload`,
          method: 'Post',
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      invalidatesTags: ['chat'],
    }),
    sendMessage: builder.mutation({
      query: data => {
        return {
          url: `/chat/message/send`,
          method: 'Post',
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      invalidatesTags: ['chat'],
    }),
    messageDeleteById: builder.mutation({
      query: messageId => {
        return {
          url: `/chat/message/delete/${messageId}`,
          method: 'Delete',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      invalidatesTags: ['chat'],
    }),

    allFavoriteRestaurantsList: builder.query({
      query: () => {
        return {
          url: `/favourite-stores`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      providesTags: ['Favorite'],
    }),
    favouritesList: builder.query({
      query: () => {
        return {
          url: `/favourites`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      providesTags: ['Favorite'],
    }),
    searchText: builder.mutation({
      query: data => {
        return {
          url: `/search?text_search=${data}`,
          method: 'Post',

          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    searchResult: builder.query({
      query: data => {
        return {
          url: `/restaurant-search?search=${data}`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    changePaymentStatus: builder.mutation({
      query: data => {
        return {
          url: `/mobile-payment`,
          method: 'Post',
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    appNotification: builder.query({
      query: () => {
        return {
          url: `/notifications`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    newNotification: builder.query({
      query: () => {
        return {
          url: `/get-notifications`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getTax: builder.query({
      query: () => {
        return {
          url: `/tax-fee`,
          method: 'Get',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
  }),
});

export const {
  useGetAreaIdQuery,
  useGetRestaurantsByAreaIdQuery,
  useGetRestaurantDetailsByIdQuery,
  useGetDeliveryFeeQuery,
  useGetUserPerviousOrdersQuery,
  useCreateOrderMutation,
  useGetUserOrderDetailsQuery,
  useRestaurantByCategoryQuery,
  useGetRestaurantProductsWithStoreIdQuery,
  useApplyCouponMutation,
  useChatIndexQuery,
  useGetChatHistoryByIdQuery,
  useConversationDeleteMutation,
  useChatFileUploadMutation,
  useSendMessageMutation,
  useMessageDeleteByIdMutation,
  useAllFavoriteRestaurantsListQuery,
  useFavouritesListQuery,
  useSearchTextMutation,
  useSearchResultQuery,
  useChangePaymentStatusMutation,
  useAppNotificationQuery,
  useNewNotificationQuery,
  useGetTaxQuery,
} = api;
