import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetAllOrdersQuery } from "../../redux/apis/orderApi";
import styles from "./MyOrderScreen.style";
import { BackBtn1, FormButton1 } from "../../ui";
import { RootStackParamList } from "../../navigates/typeRootStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { COLORS, MainLoader } from "../../common";
import { OrderCard } from "../../components/order";
import { SD_Status } from "../../common/SD";
import RNPickerSelect from "react-native-picker-select";
import { orderHeaderModel } from "../../interfaces";

const filterOptions = [
  { label: "All", value: "All" },
  { label: SD_Status.CONFIRMED, value: SD_Status.CONFIRMED },
  { label: SD_Status.BEING_COOKED, value: SD_Status.BEING_COOKED },
  { label: SD_Status.READY_FOR_PICKUP, value: SD_Status.READY_FOR_PICKUP },
  { label: SD_Status.CANCELLED, value: SD_Status.CANCELLED },
];

export default function AllOrderScreen() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageOptions, setPageOptions] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [filters, setFilters] = useState({ searchString: "", status: "" });
  const [orderData, setOrderData] = useState<orderHeaderModel[]>([]);

  //region สำหรับส่งไปยัง backend
  const [apiFilters, setApiFilters] = useState({
    searchString: "",
    status: "",
  });

  const { data, isLoading } = useGetAllOrdersQuery({
    ...(apiFilters && {
      searchString: apiFilters.searchString,
      status: apiFilters.status,
    }),
  });
  //end region สำหรับส่งไปยัง backend

  const handleChange = (name: string) => (text: string) => {
    setFilters({ ...filters, [name]: text });
    console.log(filters);
  };

  const handleFilters = () => {
    //เมื่อสเตทเปลี่ยนจะไปเรียก useGetAllOrdersQuery()
    //กรณีประเภทเป็น All กำหนดให้เป็นค่าว่าง เพื่อให้ตรงกับฝั่ง backend
    setApiFilters({
      searchString: filters.searchString ,
      status: filters.status === "All" ? "" :filters.status,
    });
  };

  useEffect(() => {
    if (data) {
      setOrderData(data.apiResponse.result);
      const { TotalRecords } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalRecords);
    }
  }, [data]);

  const FilterOrder = (
    <View style={filterStyles.filterContainer}>
      <View style={filterStyles.filterContainer1}>
        <TextInput
          style={filterStyles.input}
          placeholder="name, email or phone"
          value={filters.searchString}
          onChangeText={handleChange("searchString")}
        />
      </View>
      <View style={filterStyles.filterContainer1}>
        <RNPickerSelect
          style={{
            inputAndroid: filterStyles.inputAndroid,
            viewContainer: filterStyles.pickerContainer,
          }}
          value={filters.status}
          onValueChange={handleChange("status")}
          items={filterOptions}
          placeholder={{ label: "Status Select...", value: null }}
        />
      </View>
      <View
        style={{
          marginTop: -12,
          borderRadius: 2,
        }}
      >
        <FormButton1
          onPress={handleFilters}
          height={40}
          title="filter"
          isValid={true}
          color={COLORS.info}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <BackBtn1 onPress={() => navigate("ProfileScreen")} />
        <Text style={styles.titletxt}>
          All Orders ({!isLoading && totalRecords} items)
        </Text>
      </View>

      {isLoading && <MainLoader />}

      {FilterOrder}

      {!isLoading && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 120 }}
          data={orderData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <OrderCard orderData={item} isLoading={isLoading} />
          )}
        />
      )}
    </View>
  );
}

const filterStyles = StyleSheet.create({
  inputAndroid: {
    color: COLORS.primary,
    marginHorizontal: -10,
    marginVertical: -5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary2,
    borderRadius: 5,
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterContainer1: {
    paddingHorizontal: 2,
    flex: 1,
    borderRadius: 5,
  },
  input: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
