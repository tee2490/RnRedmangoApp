import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  HomeScreen,
  MenuItemDetailScreen,
  ShoppingCartScreen,
} from "../screen";
import { RootStackParamList } from "./typeRootStack";

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
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
