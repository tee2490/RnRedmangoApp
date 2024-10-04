import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./OrderSummary.style";
import { orderSummaryProps } from "./orderSummaryProps";
import { cartItemModel } from "../../interfaces";
import { COLORS, getStatusColor } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { BackBtn1, FormButton1 } from "../../ui";
import { SD_Roles, SD_Status } from "../../common/SD";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function OrderSummary({
  data,
  userInput,
  payment,
}: orderSummaryProps) {
  const badgeTypeColor = getStatusColor(data.status!);
  const { goBack } = useNavigation();
  const userData = useSelector((state: RootState) => state.userAuthStore);
  const [loading, setIsLoading] = useState(false);

  const nextStatus: any =
    data.status! === SD_Status.CONFIRMED
      ? { color: COLORS.info, value: SD_Status.BEING_COOKED }
      : data.status! === SD_Status.BEING_COOKED
      ? { color: COLORS.warning, value: SD_Status.READY_FOR_PICKUP }
      : data.status! === SD_Status.READY_FOR_PICKUP && {
          color: COLORS.success,
          value: SD_Status.COMPLETED,
        };

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

        {!payment && userData.role == SD_Roles.ADMIN && (
          <View style={styles.nextContainer}>
            <BackBtn1 size={40} onPress={() => goBack()} />

            <View style={{ flexDirection: "row" }}>
              {data.status! !== SD_Status.CANCELLED &&
                data.status! !== SD_Status.COMPLETED && (
                  <>
                    <FormButton1
                      isLoading={loading}
                      isValid={true}
                      title="Cancel"
                      color={COLORS.danger}
                    />
                    <FormButton1
                      isLoading={loading}
                      isValid={true}
                      title={nextStatus.value}
                      color={nextStatus.color}
                    />
                  </>
                )}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
