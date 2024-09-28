import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../interfaces";

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
      <Text>MenuItemList</Text>
    </View>
  );
}


