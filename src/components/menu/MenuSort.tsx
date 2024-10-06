import { View, StyleSheet } from "react-native";
import React from "react";
import { SD_SortTypes } from "../../common/SD";
import RNPickerSelect from "react-native-picker-select";
import { COLORS } from "../../common";
import { useDispatch } from "react-redux";
import { setSortItem } from "../../redux/menuItemSlice";

// Use the enum values for the picker options
const SortTypes = [
  { label: SD_SortTypes.PRICE_LOW_HIGH, value: SD_SortTypes.PRICE_LOW_HIGH },
  { label: SD_SortTypes.PRICE_HIGH_LOW, value: SD_SortTypes.PRICE_HIGH_LOW },
  { label: SD_SortTypes.NAME_A_Z, value: SD_SortTypes.NAME_A_Z },
  { label: SD_SortTypes.NAME_Z_A, value: SD_SortTypes.NAME_Z_A },
];

export default function MenuSort() {
  const dispatch = useDispatch();

  // Handle input change
  const handleChange = (text: string) => {
    dispatch(setSortItem(text));
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        style={{
          inputAndroid: styles.inputAndroid,
          viewContainer: styles.pickerContainer,
        }}
        onValueChange={(value) => handleChange(value)}
        items={SortTypes}
        placeholder={{ label: "Sort type...", value: null }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex: 1,
    borderRadius: 5,
  },
  inputAndroid: {
    color: COLORS.primary,
    marginHorizontal: -10,
    marginVertical: -5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary2,
    borderRadius: 5,
    height: 50,
  },
});
