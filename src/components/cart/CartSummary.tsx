import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CartSummary.style";
import { useSelector } from "react-redux";
import { cartItemModel } from "../../interfaces";
import { RootState } from "../../redux/store";

const CartSummary: React.FC = () => {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  if (shoppingCartFromStore.length == 0) {
    return <Text>Shopping Cart Empty</Text>;
  }

  const renderItem = ({ item }: { item: cartItemModel }) => (
    <View style={styles.rowFront}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.menuItem?.name}</Text>
        <Text style={styles.itemPrice}>${item.menuItem?.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="remove-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item?.quantity}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="add-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.totalPrice}>
        ${(item.quantity! * item.menuItem!.price).toFixed(2)}
      </Text>
    </View>
  );

  const renderHiddenItem = (data: { item: cartItemModel }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.backRightBtn} onPress={() => {}}>
        <Ionicons
          name="trash-outline"
          size={24}
          color="white"
          style={styles.backText}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={shoppingCartFromStore}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartSummary;
