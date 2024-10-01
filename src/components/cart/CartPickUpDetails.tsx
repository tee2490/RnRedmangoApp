import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./CartPickUpDetails.style";
import { FormInput } from "../../ui";
import { COLORS, PickupDetailsSchema } from "../../common";
import { cartPickUpDto } from "../../interfaces/dto";

export default function CartPickUpDetails() {
  const initialData : cartPickUpDto = {
    name: "Test name",
    email: "Test@email.com",
    phoneNumber: "1234567",
  };

  return (
    <Formik
      initialValues={initialData}
      validationSchema={PickupDetailsSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <ScrollView>
          <View style={styles.container}>
            <FormInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="name..."
            />
            {touched.name && errors.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}

            <FormInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="email..."
              keyboardType="email-address"
            />
            {touched.email && errors.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}

            <FormInput
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              placeholder="phone number..."
              keyboardType="phone-pad"
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            ) : null}

            <View style={styles.summary}>
              <Text>Grand Total: $99.99</Text>
              <Text>No of items: 10</Text>
            </View>

            <Button
              onPress={() => handleSubmit()}
              title="Looks Good? Place Order!"
              color={COLORS.success}
              disabled={!isValid}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
