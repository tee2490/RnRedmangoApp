import { View } from "react-native";
import React from "react";
import { useGetOrderDetailsQuery } from "../../redux/apis/orderApi";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigates/typeRootStack";
import { OrderSummary } from "../../components/order";

type Props = NativeStackScreenProps<RootStackParamList, "OrderDetailScreen">;

export default function OrderDetailScreen({ route }: Props) {
  const { id } = route.params;
  const { data, isLoading } = useGetOrderDetailsQuery(id);
  let userInput, orderDetails;

  if (!isLoading && data?.result) {
    userInput = {
      name: data.result[0].pickupName,
      email: data.result[0].pickupEmail,
      phoneNumber: data.result[0].pickupPhoneNumber,
    };
    orderDetails = {
      id: data.result[0].orderHeaderId,
      cartItems: data.result[0].orderDetails,
      cartTotal: data.result[0].orderTotal,
      status: data.result[0].status,
    };
  }

  return (
    <View>
      {!isLoading && orderDetails && userInput && (
        <OrderSummary userInput={userInput}  data={orderDetails} />
      )}
    </View>
  );
}
