import { StyleSheet, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  cover: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },

  profileContainer: {
    flex: 1,
    alignItems: "center",
  },

  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: COLORS.primary,
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -90,
  },

  name: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginVertical: 5,
  },

  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxLarge,
  },

  menuText: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    paddingHorizontal: SIZES.small,
    fontWeight: "600",
    fontSize: SIZES.medium,
    lineHeight: 26,
  },
  menuWrapper: {
    marginTop: SIZES.medium,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth: number) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
  menuItem1: (borderBottomWidth: number): View => ({
    borderBottomWidth: borderBottomWidth,
    paddingLeft: 12,
    borderColor: COLORS.gray,
  }),
});

export default styles;
