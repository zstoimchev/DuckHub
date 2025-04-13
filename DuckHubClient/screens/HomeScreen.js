import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <AppText style={styles.content}>HOME SCREEN</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0A07",
    paddingTop: 100,
  },
  content: {
    color: "#EFEFEF",
    textAlign: "center",
    marginTop: 50,
  },
});
