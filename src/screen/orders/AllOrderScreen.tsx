import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetAllOrdersQuery } from "../../redux/apis/orderApi";
import styles from "./MyOrderScreen.style";
import { BackBtn1 } from "../../ui";
import { RootStackParamList } from "../../navigates/typeRootStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainLoader } from "../../common";
import { OrderCard } from "../../components/order";

export default function AllOrderScreen() {
  const { data, isLoading } = useGetAllOrdersQuery("");
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <BackBtn1 onPress={() => navigate("ProfileScreen")} />
        <Text style={styles.titletxt}>
          All Orders ({!isLoading && data.result.length} items)
        </Text>
      </View>

      {isLoading && <MainLoader />}

      {!isLoading && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 60 }}
          data={data.result}
          keyExtractor={(item) => item.orderHeaderId}
          renderItem={({ item }) => (
            <OrderCard orderData={item} isLoading={isLoading} />
          )}
        />
      )}
    </View>
  );
}
