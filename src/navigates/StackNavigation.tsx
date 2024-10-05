import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  AllOrderScreen,
  HomeScreen,
  MainListScreen,
  MenuItemDetailScreen,
  MyOrderScreen,
  OrderDetailScreen,
  PaymentScreen,
  ProfileScreen,
  ShoppingCartScreen,
} from "../screen";
import { RootStackParamList } from "./typeRootStack";
import { Login, Register } from "../components/profile";
import OrderConfirmed from "../components/order/OrderConfirmed";
import { MenuItemUpsert } from "../components/menu";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MenuItemDetailScreen"
          component={MenuItemDetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ShoppingCartScreen"
          component={ShoppingCartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OrderConfirmed"
          component={OrderConfirmed}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyOrderScreen"
          component={MyOrderScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OrderDetailScreen"
          component={OrderDetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AllOrderScreen"
          component={AllOrderScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainListScreen"
          component={MainListScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MenuItemUpsert"
          component={MenuItemUpsert}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
