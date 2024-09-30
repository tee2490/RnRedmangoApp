import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding:SIZES.xSmall-5,
  },
  listContentContainer: {
    paddingBottom: SIZES.xxLarge,
  },
  rowFront: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: SIZES.xSmall,
    paddingVertical: SIZES.xSmall,
    width: SIZES.width, // Full width of the screen
  },
  itemDetails: {
    flexDirection: "column",
    flex: 0.8,
  },
  itemName: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
  },
  itemPrice: {
    color: "#E91E63",
    fontSize: SIZES.medium,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.xSmall,
  },
  quantityText: {
    marginHorizontal: SIZES.xSmall,
    fontSize: SIZES.medium,
  },
  totalPrice: {
    paddingRight:18,
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#ff3b30",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: SIZES.width, // Full width of the screen
  },
  backRightBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 75,
  },
  backText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    paddingRight: SIZES.xSmall,
  },
});

export default styles;
