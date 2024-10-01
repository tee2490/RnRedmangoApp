import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.xSmall - 5,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 5,
  },
  error: {
    color: COLORS.red,
    marginBottom: SIZES.medium,
  },
  summary: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});

export default styles;