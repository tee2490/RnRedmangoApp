import { View, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { FormButton } from "../../ui";

interface Props {
  clientSecret : string
}

export default function PaymentForm({clientSecret}:Props) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
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