import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./OrderSummary.style";
import { orderSummaryProps } from "./orderSummaryProps";
import { cartItemModel } from "../../interfaces";
import { getStatusColor } from "../../common";

export default function OrderSummary({
  data,
  userInput,
  payment,
}: orderSummaryProps) {
  const badgeTypeColor = getStatusColor(data.status!);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Order Summary</Text>

          {!payment && (
            <Text style={styles.statusContainer(badgeTypeColor)}>
              {data.status}
            </Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>
            Name: <Text style={styles.value}>{userInput.name}</Text>
          </Text>
          <Text style={styles.label}>
            Email: <Text style={styles.value}>{userInput.email}</Text>
          </Text>
          <Text style={styles.label}>
            Phone: <Text style={styles.value}>{userInput.phoneNumber}</Text>
          </Text>
        </View>

        <Text style={styles.header}>Menu Items</Text>
        {data?.cartItems?.map((cartItem: cartItemModel, index: number) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemName}>
              {cartItem.menuItem?.name.length! > 15
                ? cartItem.menuItem?.name.slice(0, 15) + "..."
                : cartItem.menuItem?.name}
            </Text>
            <Text style={styles.itemPrice}>
              ${cartItem.menuItem?.price.toFixed(2)} x {cartItem.quantity} = $
              {(
                (cartItem.menuItem?.price ?? 0) * cartItem.quantity! ?? 0
              ).toFixed(2)}
            </Text>
          </View>
        ))}

        <Text style={styles.total}>Total: ${data?.cartTotal?.toFixed(2)}</Text>
      </ScrollView>
    </View>
  );
}
