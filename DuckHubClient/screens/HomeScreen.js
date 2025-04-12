// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppText>This is Inter Text</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white"
  },
});