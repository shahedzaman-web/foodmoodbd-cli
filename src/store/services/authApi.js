import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../utils/config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_url,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
    },
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["userInfo"],
  endpoints: (builder) => ({
    signInUser: builder.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    socialLogin: builder.mutation({
      query: (data) => {
        return {
          url: "/social-login",
          method: "POST",
          body: data,
        };
      }
    }),
    register: builder.mutation({
      query: (body) => {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    otpVerify: builder.mutation({
      query: (body) => {
        return {
          url: "/customer/check-otp-verify",
          method: "POST",
          body,
        };
      },
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: "/logout",
          method: "POST",
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: "/forget-password",
          method: "POST",
          body,
        };
      },
    }),
    verifyPasswordOtp: builder.mutation({
      query: (body) => {
        return {
          url: "/verify-password-otp",
          method: "POST",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body) => {
        return {
          url: "/reset-password",
          method: "POST",
          body,
        };
      },
    }),
    profileUpdate: builder.mutation({
      query: (body) => {
        return {
          url: "/user/settings",
          method: "POST",
          body,
        };
      },
      providesTags: ["userInfo"],
    }),
    sendUserInfo: builder.mutation({
      query: () => {
        return {
          url: "/info",
          method: "Post",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
      invalidatesTags: ["userInfo"],
    }),
  }),
});

export const {
  useSignInUserMutation,
  useSocialLoginMutation,
  useLogoutUserMutation,
  useRegisterMutation,
  useOtpVerifyMutation,
  useForgotPasswordMutation,
  useVerifyPasswordOtpMutation,
  useResetPasswordMutation,
  useProfileUpdateMutation,
  useSendUserInfoMutation
} = authApi;
