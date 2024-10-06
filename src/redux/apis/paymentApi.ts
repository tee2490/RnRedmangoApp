import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrlAPI } from "../../common/SD";
import AsyncStorage from "@react-native-async-storage/async-storage";

const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlAPI,
    prepareHeaders: async (headers: Headers, api) => {
      const token = await AsyncStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },
  }),
  endpoints: (builder) => ({
    initiatePayment: builder.mutation({
      query: (userId) => ({
        url: "payment",
        method: "POST",
        params: {
          userId: userId,
        },
      }),
    }),
  }),
});

export const { useInitiatePaymentMutation } = paymentApi;
export default paymentApi;