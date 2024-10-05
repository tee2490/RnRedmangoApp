import { View, StyleSheet } from "react-native";
import React from "react";
import { MenuItemList } from "../components/home";
import { MenuSearchBar } from "../components/menu";
import { COLORS, SIZES } from "../common";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.searchContainer}>
        <MenuSearchBar />
      </View>
      <MenuItemList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: SIZES.small / 2,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    margin: SIZES.xSmall,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
