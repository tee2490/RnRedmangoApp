import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../common";

const styles = StyleSheet.create({
   cover: {
      height: SIZES.height / 3,
      width: SIZES.width - 60,
      resizeMode: "contain",
      marginBottom: SIZES.large,
   },
   title: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      color: COLORS.primary,
      alignSelf:'center',
      marginBottom: SIZES.large
   },
   wrapper: {
      marginBottom: 15,
   },
   label: {
      fontFamily: FONTS.regular,
      fontSize: SIZES.xSmall,
      marginBottom: 5,
      marginEnd: 5,
      textAlign: "right"
   },
   inputWrapper:  (borderColor:string) => ({
      borderColor: borderColor,
      backgroundColor: COLORS.lightWhite,
      borderWidth: 1,
      height: 40,
      borderRadius: 12,
      flexDirection: 'row',
      paddingHorizontal: 15,
      alignItems: "center"

   }),
   iconStyle: {
      marginRight: 10
   },
   errorMessage: {
      color: COLORS.red,
      fontFamily: FONTS.regular,
      marginTop: 5,
      marginLeft: 5,
      fontSize: SIZES.xSmall
   },
   registration: {
      marginTop: 8,
      textAlign: "center",
   },
});

export default styles;