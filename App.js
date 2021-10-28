import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Login from "./screens/Login";
import HomePage from "./screens/HomePage";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    backgroundColor: "#ECEAEC",
  },
});
