import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingLeft: SIZES.small / 2,
    backgroundColor: COLORS.white,
  },
  separator: {
    height: 16,
  },
  categoryContainer: {
    marginHorizontal: SIZES.xSmall,
    flexDirection: "row",
  },
});

export default styles;
