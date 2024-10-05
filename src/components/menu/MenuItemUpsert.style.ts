import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../common";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  imageContainer: { flexDirection: "row" },
  btnTitle: {
    color: COLORS.primary2,
    marginTop: 5,
  },
  fileSelector: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: COLORS.primary2,
    borderRadius: 7,
  },
  selectedImage: {
    width: 70,
    height: 70,
    borderRadius: 7,
    marginLeft: 5,
  },
  imageOption: {
    fontWeight: "600",
    fontSize: 18,
    color: COLORS.primary2,
    padding: 10,
  },
  inputAndroid: {
    color: COLORS.primary,
    marginHorizontal: -10,
    marginVertical: -5,
  },
  pickerContainer: {
    borderWidth: 0.3,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.regular,
    marginBottom: 15,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  nextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles