import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux';
import BreadNavigation from './navigation/BreadNavigation';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  if(!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <BreadNavigation />
    </Provider>
    
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
