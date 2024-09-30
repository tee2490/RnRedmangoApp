import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CartSummary.style";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartSummary: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "Spring Roll", price: 7.99, quantity: 29 },
    { id: "2", name: "Idli", price: 8.99, quantity: 6 },
    { id: "3", name: "Panu Puri", price: 8.99, quantity: 1 },
    { id: "4", name: "Panu Puri", price: 8.99, quantity: 1 },
    { id: "5", name: "Spring Roll", price: 7.99, quantity: 29 },
    { id: "6", name: "Idli", price: 8.99, quantity: 6 },
    { id: "7", name: "Panu Puri", price: 8.99, quantity: 1 },
  ]);

  const handleDelete = (rowKey: string) => {
    const newData = cartItems.filter((item) => item.id !== rowKey);
    setCartItems(newData);
  };

  const updateQuantity = (id: string, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.rowFront}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, false)}>
            <Ionicons name="remove-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, true)}>
            <Ionicons name="add-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.totalPrice}>
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );

  const renderHiddenItem = (data: { item: CartItem }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.backRightBtn}
        onPress={() => handleDelete(data.item.id)}
      >
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
        data={cartItems}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartSummary;
