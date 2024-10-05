import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.black,
  },
  imageContainer: {
    width: 100,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  productImg: {
    width: "100%",
    height: 100,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  titleContainer: {
    width: 75,
  },
  textContainer: {
    flex: 0.8,
    justifyContent: "flex-start",
  },
  productTitle: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  productTxt: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textTransform: "capitalize",
  },
  actionContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default styles;
