import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screen";

const Tab = createBottomTabNavigator();

export default function Navigators() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName:any;

              if (route.name === "HOME") {
                iconName = "home";
              } else if (route.name === "CART") {
                iconName = "cart";
              } else if (route.name === "SETTING") {
                iconName = "settings";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown:false,
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="CART" component={HomeScreen} />
          <Tab.Screen name="SETTING" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
