import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AppText({ children, style, weight = 'regular', ...props }) {
  const fontFamily = weight === 'alatsi' ? 'Alatsi_400Regular' : 'Inter_400Regular';

  return <Text style={[styles.text, { fontFamily }, style]} {...props}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});