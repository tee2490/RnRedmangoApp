import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigates/typeRootStack";

type Props = NativeStackScreenProps<RootStackParamList, "PaymentScreen">;

export default function PaymentScreen({ route }: Props) {
  const { state } = route.params;

  return (
    <View>
      <Text>{state?.apiResult}</Text>
    </View>
  );
}