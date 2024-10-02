import { View, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { FormButton } from "../../ui";

//ให้นำของเดิมมาจาก Stripe Dashboard ใช้สำหรับทดสอบเท่านั้น
const testClientSecret = "pi_3PxO5xLEJFIvBBF20kVW3KVi_secret_X4HLMb4ctmg68EGhD1wQEdIuw"

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Coms, Inc.",
      paymentIntentClientSecret: testClientSecret,
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
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

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