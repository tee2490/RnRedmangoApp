import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import styles from "./ProfileScreen.style";
import { COLORS } from "../common";
import { RootStackParamList } from "../navigates/typeRootStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SD_Roles } from "../common/SD";
import { List } from "react-native-paper";

export default function ProfileScreen() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const userData = {
    fullName: "Test Name",
    id: "",
    email: "Test@email.com",
    role: "admin",
  };

  const userLogout = async () => {};

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
        },
        {
          text: "Continue",
          onPress: () => userLogout(),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image source={require("../Images/space.jpg")} style={styles.cover} />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../Images/profile.jpeg")}
          style={styles.profile}
        />

        <Text style={styles.name}>
          {userData.id ? userData.fullName : "Please login into your account"}
        </Text>

        {!userData.id ? (
          <TouchableOpacity onPress={() => navigate("Login")}>
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>L O G I N </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.loginBtn}>
            <Text style={styles.menuText}>{userData.email}</Text>
          </View>
        )}

        {userData.id && (
          <ScrollView>
            <View style={styles.menuWrapper}>
              {userData.role == SD_Roles.ADMIN && (
                <View style={styles.menuItem1(0.2)}>
                  <List.Accordion
                    titleStyle={{ color: COLORS.gray }}
                    title="Admin Panel"
                    left={(props) => (
                      <List.Icon {...props} icon="bulletin-board" />
                    )}
                  >
                    <TouchableOpacity
                      onPress={() => navigate("AllOrderScreen")}
                    >
                      <List.Item
                        title="All Orders"
                        titleStyle={{ color: COLORS.warning }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigate("MainListScreen")}
                    >
                      <List.Item
                        title="Menu Item"
                        titleStyle={{ color: COLORS.warning }}
                      />
                    </TouchableOpacity>
                  </List.Accordion>
                </View>
              )}

              <TouchableOpacity onPress={() => navigate("MyOrderScreen")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>My Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate("ShoppingCartScreen")}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
