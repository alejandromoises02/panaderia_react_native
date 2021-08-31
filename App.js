import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

import BreadNavigation from './navigation/BreadNavigation';

export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  if(!loaded) return <AppLoading />

  return (
    <BreadNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
