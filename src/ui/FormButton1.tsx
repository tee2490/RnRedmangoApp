import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../common";

const Button = ({ title, onPress, isValid, loading,color=COLORS.primary,height}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(!isValid ? COLORS.gray : color,height)}
    >
      {!loading ? (
        <Text style={styles.btnTxt}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnTxt: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingHorizontal:5,
  },
  btnStyle: (backgroundColor: string,height=40) => ({
    height: height,
    width:'auto',
    marginVertical: 5,
    marginHorizontal : 5,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
