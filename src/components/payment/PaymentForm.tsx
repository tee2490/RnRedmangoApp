import { View, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { FormButton } from "../../ui";
import { orderSummaryProps } from "../order/orderSummaryProps";
import { apiResponse, cartItemModel } from "../../interfaces";
import { SD_Status } from "../../common/SD";
import { useCreateOrderMutation } from "../../redux/apis/orderApi";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigates";

export default function PaymentForm({
  data,
  userInput,
  clientSecret,
}: orderSummaryProps) {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [createOrder] = useCreateOrderMutation();
  const { initPaymentSheet, presentPaymentSheet, retrievePaymentIntent } =
    useStripe();
  const [loading, setLoading] = useState(false);

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Coms, Inc.",
      paymentIntentClientSecret: clientSecret,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Teeradet",
      },
    });
    if (!error) {
      setLoading(true);
    }
    {
      setLoading(false);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      const { paymentIntent } = await retrievePaymentIntent(clientSecret);

      // มาจาก Post : /api/Order
      // "pickupName": "string",
      // "pickupPhoneNumber": "string",
      // "pickupEmail": "string",
      // "applicationUserId": "string",
      // "orderTotal": 0,
      // "stripePaymentIntentID": "string",
      // "status": "string",
      // "totalItems": 0,
      // "orderDetailsDTO": [
      //   {
      //     "menuItemId": 0,
      //     "quantity": 0,
      //     "itemName": "string",
      //     "price": 0
      //   }
      // ]
      //สร้างออบเจคในส่วนของ OrderDetail
      let grandTotal = 0;
      let totalItems = 0;
      const orderDetailsDTO: any = [];
      data.cartItems?.forEach((item: cartItemModel) => {
        const tempOrderDetail: any = {};
        tempOrderDetail["menuItemId"] = item.menuItem?.id;
        tempOrderDetail["quantity"] = item.quantity;
        tempOrderDetail["itemName"] = item.menuItem?.name;
        tempOrderDetail["price"] = item.menuItem?.price;
        orderDetailsDTO.push(tempOrderDetail);
        grandTotal += item.quantity! * item.menuItem?.price!;
        totalItems += item.quantity!;
      });

      //ส่งไปบันทึกยัง Post : /api/Order
      const response: apiResponse = await createOrder({
        pickupName: userInput.name,
        pickupPhoneNumber: userInput.phoneNumber,
        pickupEmail: userInput.email,
        totalItems: totalItems,
        orderTotal: grandTotal,
        orderDetailsDTO: orderDetailsDTO,
        stripePaymentIntentID: data.stripePaymentIntentId,
        applicationUserId: data.userId,
        status:
          paymentIntent?.status === "Succeeded"
            ? SD_Status.CONFIRMED
            : SD_Status.PENDING,
      });

      if (response) {
        if (response.data?.result.status === SD_Status.CONFIRMED) {
          navigate("OrderConfirmed", {
            id: response.data.result.orderHeaderId,
          });
        }
      }
    } //ปีกกาปิดของ else
  };

  useEffect(() => {
    initializePaymentSheet();
  }, [clientSecret]);

  return (
    <View style={styles.container}>
      {/* <View style={{ marginTop: 10 }}></View> */}
      <FormButton
        title="Checkout"
        isValid={true}
        loading={loading}
        onPress={openPaymentSheet}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
