import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../common";
import { Menu } from "react-native-paper";
import { CartPickUpDetails, CartSummary } from "../components/cart";

export default function ShoppingCartScreen() {
  const [visible, setVisible] = useState(true);

  const onSetVisible = (show: boolean) => setVisible(show);

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        {/* Option: true */}
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => onSetVisible(true)}>
            <Menu.Item
              leadingIcon="shopping"
              title="Cart Summary"
              style={[visible ? styles.bgColor : null]}
            />
          </TouchableOpacity>

          {/* Option: false */}
          <TouchableOpacity onPress={() => onSetVisible(false)}>
            <Menu.Item
              leadingIcon="card-account-details"
              title="Cart Picker Detail"
              style={[!visible ? styles.bgColor : null]}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            padding: SIZES.xSmall - 2,
            backgroundColor: COLORS.secondary,
          }}
        >
          {visible ? <CartSummary /> : <CartPickUpDetails/>}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  bgColor: { backgroundColor: COLORS.info, borderRadius: 5 },
});
