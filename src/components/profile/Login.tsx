import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigates/typeRootStack";
import { COLORS, LoginSchema } from "../../common";
import styles from "./Login.style";
import { BackBtn, FormButton, FormInput } from "../../ui";
import { loginDto } from "../../interfaces/dto";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
    ]);
  };

  const login = async (userInput: loginDto) => {};

  const initialData: loginDto = {
    username: "admin",
    password: "123",
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        <BackBtn onPress={() => navigate("ProfileScreen")} />
        <Image source={require("../../Images/bk.png")} style={styles.cover} />

        <Text style={styles.title}>Unlimited Luxurious RedMango</Text>
        <Formik
          initialValues={initialData}
          validationSchema={LoginSchema}
          onSubmit={(values) => login(values)}
        >
          {({
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
          }) => (
            <View>
              <View style={styles.wrapper}>
                <Text style={styles.label}>User name</Text>
                <View
                  style={styles.inputWrapper(
                    touched.username ? COLORS.secondary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />

                  <FormInput
                    placeholder="User name"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>

              <View style={styles.wrapper}>
                <Text style={styles.label}>Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.secondary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />

                  <FormInput
                    secureTextEntry={obsecureText}
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              <FormButton
                loading={loading}
                title={"L O G I N"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />

              <Text
                style={styles.registration}
                onPress={() => {
                  navigate("Register");
                }}
              >
                Register
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
