import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ setIsLoginDone }) {
  const handleLogin = () => {
    // Simulate login action
    setIsLoginDone(true); // Set flag to true to show the main app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App! Please click to continue</Text>
      <Button title="Proceed" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});