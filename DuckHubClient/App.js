import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts as useInter, Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts as useAlatsi, Alatsi_400Regular } from '@expo-google-fonts/alatsi';
import BottomTabNavigator from './navigation/BottomTabNavigator.js';

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });
  const [alatsiLoaded] = useAlatsi({ Alatsi_400Regular });

  if (!interLoaded || !alatsiLoaded) {
    return <AppLoading />;
  }
  return <BottomTabNavigator />;
}

