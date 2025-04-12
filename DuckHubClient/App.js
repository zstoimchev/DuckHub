import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  useFonts as useAlatsi,
  Alatsi_400Regular,
} from "@expo-google-fonts/alatsi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator.js";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen.js";
import AddDuckScreen from "./screens/AddDuckScreen";
import ChallengesScreen from "./screens/ChallengesScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });
  const [alatsiLoaded] = useAlatsi({ Alatsi_400Regular });

  if (!interLoaded || !alatsiLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen name="AddDuck" component={AddDuckScreen} />
        <Stack.Screen name="Challenges" component={ChallengesScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );

}

