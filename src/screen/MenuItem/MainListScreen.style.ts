import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small / 2,
    paddingBottom:50,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  separator: {
    height: 5,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  titletxt: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
    letterSpacing: 4,
    marginLeft: SIZES.small,
  },
});

export default styles;
