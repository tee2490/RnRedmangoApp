import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrlAPI } from "../../common/SD";
import AsyncStorage from "@react-native-async-storage/async-storage";

const shoppingCartApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlAPI,
    prepareHeaders: async (headers: Headers, api) => {
      const token = await AsyncStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },
  }),
  tagTypes: ["ShoppingCarts"],
  endpoints: (builder) => ({
    getShoppingCart: builder.query({
      query: (userId) => ({
        url: `shoppingcart`,
        params: {
          userId: userId,
        },
      }),
      providesTags: ["ShoppingCarts"],
    }),
    updateShoppingCart: builder.mutation({
      query: ({ menuItemId, updateQuantityBy, userId }) => ({
        url: "shoppingcart",
        method: "POST",
        params: {
          menuItemId,
          updateQuantityBy,
          userId,
        },
      }),
      invalidatesTags: ["ShoppingCarts"],
    }),
  }),
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } =
  shoppingCartApi;
export default shoppingCartApi;
