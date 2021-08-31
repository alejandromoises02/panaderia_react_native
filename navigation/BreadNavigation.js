import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';

const Stack = createNativeStackNavigator();

const BreadNavigation =() =>(
  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = 'Home' options={{ title: 'Categorias' }} component={CategoriesScreen} />
        <Stack.Screen name = 'Products' options={{ title: 'Productos' }} component={CategoryBreadScreen} />
        <Stack.Screen name = 'Detail' options={{ title: 'Detalles' }} component={BreadDetailScreen} />
      </Stack.Navigator>
  </NavigationContainer>
)

export default BreadNavigation;
