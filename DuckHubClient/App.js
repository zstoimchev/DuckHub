import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts as useInter, Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts as useAlatsi, Alatsi_400Regular } from '@expo-google-fonts/alatsi';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator.js';
import LoginScreen from './screens/LoginScreen'; // Import LoginScreen
import AddDuckScreen from './screens/AddDuckScreen'; // Import AddDuckScreen
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });
  const [alatsiLoaded] = useAlatsi({ Alatsi_400Regular });
  const [isLoginDone, setIsLoginDone] = useState(false); // Track if login is done

  if (!interLoaded || !alatsiLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* LoginScreen will be the initial screen if user is not logged in */}
        {/* <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => <LoginScreen {...props} setIsLoginDone={setIsLoginDone} />}
        </Stack.Screen> */}

        {/* BottomTabNavigator will be shown after login */}
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
        >
          {(props) => <BottomTabNavigator {...props} />}
        </Stack.Screen>

        {/* Add Duck screen */}
        <Stack.Screen
          name="AddDuck"
          component={AddDuckScreen}
          options={{ title: 'Add a Duck' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});