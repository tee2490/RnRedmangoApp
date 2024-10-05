import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MainListScreen.style";
import { MainCard } from "../../components/menu";
import { BackBtn1 } from "../../ui";
import { COLORS, MainLoader } from "../../common";
import { Ionicons } from "@expo/vector-icons";
import { useGetMenuItemsQuery } from "../../redux/apis/menuItemApi";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigates/typeRootStack";

export default function MainListScreen() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={{ flexDirection: "row" }}>
          <BackBtn1 size={35} onPress={() => navigate("ProfileScreen")} />
          <Text style={styles.titletxt}>MenuItem List</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="add-circle-sharp" size={35} color={COLORS.primary1} />
        </TouchableOpacity>
      </View>

      {isLoading && <MainLoader />}
      {!isLoading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.result}
          keyExtractor={(item)=>item.id}
          renderItem={({ item }) => <MainCard menuItem={item} />}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}
