import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, ShoppingCartScreen } from "../screen";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SIZES } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../redux/apis/shoppingCartApi";
import { userTest } from "../common/SD";
import { setShoppingCart } from "../redux/shoppingCartSlice";
import { cartItemModel } from "../interfaces";
import { RootState } from "../redux/store";
import { Badge } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(userTest);

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: any;

              if (route.name === "HOME") {
                iconName = "home";
              } else if (route.name === "CART") {
                iconName = "cart";
                if (shoppingCartFromStore?.length)
                  return (
                    <View>
                      <Ionicons name={iconName} size={size} color={color} />
                      <Badge
                        size={18}
                        style={{ position: "absolute", top: -5, right: -5 }}
                      >
                        {shoppingCartFromStore.length}
                      </Badge>
                    </View>
                  );
              } else if (route.name === "SETTING") {
                iconName = "settings";
              } else if (route.name === "PROFILE") {
                iconName = "person";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="HOME" component={StackNavigation} />
          <Tab.Screen name="CART" component={ShoppingCartScreen} />
          <Tab.Screen name="SETTING" component={HomeScreen} />
          <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: SIZES.xLarge,
  },
});
