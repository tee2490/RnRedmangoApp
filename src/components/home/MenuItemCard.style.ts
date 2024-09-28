import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../common";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: 1,
  },
  detail: {
    padding: SIZES.small,
  },
  specialTagContainer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.green,
    alignSelf: "center",
    paddingHorizontal: SIZES.xSmall,
    marginTop: SIZES.xSmall / 2,
  },
  specialTag: {
    fontFamily: FONTS.italic,
    fontSize: SIZES.small,
    color: COLORS.white,
    paddingLeft: SIZES.xSmall / 2,
  },
  catgory: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    backgroundColor: COLORS.gray,
    color: COLORS.white,
    alignSelf: "flex-start",
    borderRadius: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
