import { FlatList, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { menuItemModel } from "../../interfaces";
import MenuItemCard from "./MenuItemCard";
import styles from "./MenuItemList.style";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FloatingAction } from "react-native-floating-action";
import { COLORS } from "../../common";

export default function MenuItemList() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    fetch("https://4480-202-28-123-199.ngrok-free.app/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
      .catch(() => console.log("error"));
  }, []);

  const actions = [
    {
      icon: <AntDesign name="totop" size={24} color={COLORS.white} />,
      text: "Go to Top",
      name: "bt_go_to_top",
      position: 1,
    },
    {
      icon: (
        <MaterialIcons
          name="vertical-align-bottom"
          size={24}
          color={COLORS.white}
        />
      ),
      text: "Scroll to Bottom",
      name: "bt_scroll",
      position: 1,
    },
  ];

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={menuItems}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItemCard menuItem={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <FloatingAction
        distanceToEdge={{ vertical: 20, horizontal: 20 }}
        actions={actions}
        onPressItem={(name) => {
          if (name === "bt_go_to_top") {
            scrollToTop();
          }

          if (name === "bt_scroll") {
            scrollToBottom();
          }
        }}
      />
    </View>
  );
}
