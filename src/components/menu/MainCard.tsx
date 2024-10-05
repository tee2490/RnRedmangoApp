import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./MainCard.style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../common";
import { menuItemModel } from "../../interfaces";
import { baseUrl } from "../../common/SD";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigates";

type Props = {
  menuItem: menuItemModel;
};

export default function MenuCard({ menuItem }: Props) {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: baseUrl + menuItem.image,
            }}
            style={styles.productImg}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.productTitle}>
            ID
          </Text>
          <Text numberOfLines={1} style={styles.productTitle}>
            NAME
          </Text>
          <Text numberOfLines={1} style={styles.productTitle}>
            CATEGORY
          </Text>
          <Text numberOfLines={1} style={styles.productTitle}>
            PRICE
          </Text>
          <Text numberOfLines={1} style={styles.productTitle}>
            SPECIAL TAG
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.productTxt}>
            {menuItem.id}
          </Text>
          <Text numberOfLines={1} style={styles.productTxt}>
            {menuItem.name}
          </Text>
          <Text numberOfLines={1} style={styles.productTxt}>
            {menuItem.category}
          </Text>
          <Text numberOfLines={1} style={styles.productTxt}>
            ${menuItem.price}
          </Text>
          <Text numberOfLines={1} style={styles.productTxt}>
            {menuItem.specialTag}
          </Text>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={() => navigate("MenuItemUpsert", { id: menuItem.id })}
            style={{
              backgroundColor: COLORS.success,
              borderRadius: 5,
              padding: 3,
              marginBottom: 5,
            }}
          >
            <AntDesign name="edit" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.danger,
              borderRadius: 5,
              padding: 3,
            }}
          >
            <Ionicons name="trash-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
