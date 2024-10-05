import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { COLORS } from "../../common";
import { setSearchItem } from "../../redux/menuItemSlice";
import { useDispatch } from "react-redux";

export default function MenuSearchBar() {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const dispatch = useDispatch();

  // Create a debounced function
  const debouncedSearch = useCallback(
    debounce((text: string) => {
      setDebouncedValue(text);
    }, 1000), // 1000 ms debounce time
    []
  );

  // Handle input change
  const handleChange = (text: string) => {
    debouncedSearch(text);
  };

  useEffect(() => {
    dispatch(setSearchItem(debouncedValue));
  }, [debouncedValue]);

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color={COLORS.primary2} />
      <TextInput
        placeholder="Search here..."
        style={styles.textInput}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.primary2,
    padding: 10,
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    color: COLORS.primary2,
    fontSize: 18,
  },
});
