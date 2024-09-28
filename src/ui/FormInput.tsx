import { FC, useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS } from "../common";

interface Props extends TextInputProps {}

const FormInput: FC<Props> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        isFocused ? styles.borderActive : styles.borderDeActive,
      ]}
      placeholderTextColor={COLORS.primary}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
  },
  borderActive: { borderWidth: 1, borderColor: COLORS.primary },
  borderDeActive: { borderWidth: 1, borderColor: COLORS.secondary },
});

export default FormInput;
