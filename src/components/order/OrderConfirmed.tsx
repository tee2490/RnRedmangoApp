import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigates/typeRootStack";
import { SIZES } from "../../common";

type Props = NativeStackScreenProps<RootStackParamList, "OrderConfirmed">;

export default function OrderConfirmed({ route }: Props) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.icon}>✔️</Text>
          <Text style={styles.title}>Order has been Confirmed!</Text>
          <Text style={styles.subtitle}>Your order ID: {id} </Text>
          <Text>
            We will soon start to cook the delicious food you ordered.
          </Text>

          <Image
            source={require("../../Images/confirmed.jpg")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: SIZES.xxLarge + 5,
    color: "green",
    alignSelf: "center",
  },
  textContainer: {
    paddingBottom: 50,
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.xLarge,
    color: "green",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: SIZES.large,
    marginTop: 10,
  },
  image: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
  },
});
