import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../common";

const BackBtn1 = ({ onPress, size = 30 }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="chevron-back-circle" size={size} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackBtn1;
