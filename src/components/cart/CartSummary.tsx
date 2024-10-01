import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CartSummary.style";
import { useDispatch, useSelector } from "react-redux";
import { cartItemModel, userModel } from "../../interfaces";
import { RootState } from "../../redux/store";
import { useUpdateShoppingCartMutation } from "../../redux/apis/shoppingCartApi";
import { removeFromCart, updateQuantity } from "../../redux/shoppingCartSlice";

const CartSummary: React.FC = () => {
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const dispatch = useDispatch();
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
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
        <TouchableOpacity onPress={() => handleQuantity(-1, item)}>
            <Ionicons name="remove-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item?.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantity(1, item)}>
            <Ionicons name="add-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.totalPrice}>
        ${(item.quantity! * item.menuItem!.price).toFixed(2)}
      </Text>
    </View>
  );

  const renderHiddenItem = ({item}: { item: cartItemModel }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.backRightBtn} onPress={() => handleQuantity(0, item)}>
        <Ionicons
          name="trash-outline"
          size={24}
          color="white"
          style={styles.backText}
        />
      </TouchableOpacity>
    </View>
  );

  const handleQuantity = (
    updateQuantityBy: number,
    cartItem: cartItemModel
  ) => {
    if (
      (updateQuantityBy == -1 && cartItem.quantity == 1) ||
      updateQuantityBy == 0
    ) {
      //remove the item
      //ปรับปรุง DB จริง
      updateShoppingCart({
        menuItemId: cartItem.menuItem?.id,
        updateQuantityBy: 0,
        userId: userData.id,
      });
      //ปรับปรุง State
      dispatch(removeFromCart({ cartItem, quantity: 0 }));
    } else {
      //update the quantity with the new quantity
      updateShoppingCart({
        menuItemId: cartItem.menuItem?.id,
        updateQuantityBy: updateQuantityBy,
        userId: userData.id,
      });
      dispatch(
        updateQuantity({
          cartItem,
          quantity: cartItem.quantity! + updateQuantityBy,
        })
      );
    }
  };

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
