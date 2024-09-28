import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function MainLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
