import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../screen/orders/MyOrderScreen.style";
import { COLORS, MainLoader } from "../../common";
import { FormButton } from "../../ui";
import OrderCardProps from "./orderCardProps";

export default function OrderList({ isLoading, orderData }: OrderCardProps) {
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <TouchableOpacity style={styles.favContainer(COLORS.secondary)}>
          <View style={styles.textContainer}>
            <Text style={styles.productTxt} numberOfLines={1}>
              ID
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              NAME
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              PHONE
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              TOTAL
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              ITEM
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              DATE
            </Text>
            <Text style={styles.productTxt} numberOfLines={1}>
              STATUS
            </Text>
          </View>
          <View style={styles.textContainer}>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <Text key={index} style={styles.productTxt} numberOfLines={1}>
                :
              </Text>
            ))}
          </View>
          <View style={styles.textContainer1}>
            <Text style={styles.supplya} numberOfLines={1}>
              {orderData.orderHeaderId}
            </Text>
            <Text style={styles.supplya} numberOfLines={1}>
              {orderData.pickupName}
            </Text>
            <Text style={styles.supplya} numberOfLines={1}>
              {orderData.pickupPhoneNumber}
            </Text>
            <Text style={styles.supplya} numberOfLines={1}>
              ${orderData.orderTotal!.toFixed(2)}
            </Text>
            <Text style={styles.supplya} numberOfLines={1}>
              {orderData.totalItems}
            </Text>
            <Text style={styles.supplya} numberOfLines={1}>
              {new Date(orderData.orderDate!).toLocaleDateString()}
            </Text>

            <Text
              numberOfLines={1}
              style={styles.supplya}
            >
              {orderData.status}
            </Text>
          </View>

          <View>
            <FormButton title="Detail" isValid={true} onPress={() => {}} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
