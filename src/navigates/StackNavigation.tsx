import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  HomeScreen,
  MenuItemDetailScreen,
  ProfileScreen,
  ShoppingCartScreen,
} from "../screen";
import { RootStackParamList } from "./typeRootStack";
import { Login, Register } from "../components/profile";

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
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
