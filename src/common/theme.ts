import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#2A4D50",
  primary1: "#0000FF",
  primary2: "#1C1C1F",
  secondary: "#cfdcd9",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: "#00C135",
  lightWhite: "#FAFAFC",

  warning: "#ec942c",
  info: "#40a6ce",
  success: "#339900",
  danger: "#cc3300",

  deActive: "#DCE4F2",
  active: "#0081f1",
  backDrop: "rgba(255, 255, 255, 0.5)",
  backDropDark: "rgba(0, 0, 0, 0.5)",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const FONTS = {
  regular: "Poppins-Regular",
  light: "Poppins-Light",
  bold: "Poppins-Bold",
  medium: "Poppins-Medium",
  extraBold: "Poppins-ExtraBold",
  semiBold: "Poppins-SemiBold",
  blackItalic: "Poppins-BlackItalic",
  italic: "Poppins-Italic",
};

export { COLORS, SIZES, SHADOWS, FONTS };
