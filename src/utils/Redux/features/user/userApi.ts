import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKENED_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // addUserData : builder.mutation({
    //     query : (data) => ({
    //         url : '/addUserData',
    //         method : 'PATCH',
    //         body : data
    //     }),
    // }),
    // getUserInfo : builder.query({
    //     query : (email) => ({
    //         url : `/userInfo/${email}`
    //     })
    // })
  }),
});

export const { 
    // useAddUserDataMutation, 
    // useGetUserInfoQuery 
} = userApi;
