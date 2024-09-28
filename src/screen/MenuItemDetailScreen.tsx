import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigates";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../common";
import styles from "./MenuItemDetailScreen.style";
import { Ionicons, SimpleLineIcons, Fontisto } from "@expo/vector-icons";
import { baseUrl } from "../common/SD";
import { FormButton1 } from "../ui";

type Props = NativeStackScreenProps<RootStackParamList, "MenuItemDetailScreen">;

export default function MenuItemDetailScreen({ navigation, route }: Props) {
  const { item } = route.params;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" color={COLORS.red} size={45} />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: baseUrl + item.image,
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$ {item.price}</Text>
            </View>
          </View>

          <View style={styles.categoryRow}>
            <View style={styles.category}>
              <Text> {item.category}</Text>
            </View>

            <View style={styles.countRow}>
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.countText}>{count}</Text>

              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWraper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description}</Text>
          </View>

          <View style={styles.cartRow}>
            <View style={{ flex: 0.8 }}>
              <FormButton1
                isValid={true}
                title="ADD TO CART"
                color={COLORS.black}
              />
            </View>

            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
