import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts as useInter, Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts as useAlatsi, Alatsi_400Regular } from '@expo-google-fonts/alatsi';
import BottomTabNavigator from './navigation/BottomTabNavigator.js';
import LoginScreen from './screens/LoginScreen'; // Import LoginScreen
import { View, StyleSheet } from 'react-native';

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });
  const [alatsiLoaded] = useAlatsi({ Alatsi_400Regular });
  const [isLoginDone, setIsLoginDone] = useState(false); // Track if login is done

  if (!interLoaded || !alatsiLoaded) {
    return <AppLoading />;
  }

  // Conditionally render LoginScreen or BottomTabNavigator
  return (
    <View style={styles.container}>
      {isLoginDone ? (
        <BottomTabNavigator />
      ) : (
        <LoginScreen setIsLoginDone={setIsLoginDone} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // white background
  },
});