import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../interfaces";
import MenuItemCard from "./MenuItemCard";

export default function MenuItemList() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://cb91-202-28-123-199.ngrok-free.app/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <View>
      {menuItems.length > 0 &&
        menuItems.map((menuItem, index) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </View>
  );
}


