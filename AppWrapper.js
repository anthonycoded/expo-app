import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigation from "./src/navigation/AppNavigation";

const AppWrapper = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigation></AppNavigation>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
});

export default AppWrapper;
