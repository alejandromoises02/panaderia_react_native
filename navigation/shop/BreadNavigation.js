import React from "react";
import { Platform } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from '../../screens/shop/CategoriesScreen'
import BreadDetailScreen from "../../screens/shop/BreadDetailScreen";
import CategoryBreadScreen from "../../screens/shop/CategoryBreadScreen";

import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const BreadNavigation = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}
  >
    <Stack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: "Categorias" }}
    />
    <Stack.Screen
      name="Products"
      component={CategoryBreadScreen}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
    <Stack.Screen
      name="Detail"
      options={({ route }) => ({
        title: route.params.name
      })}
      component={BreadDetailScreen}
    />
  </Stack.Navigator>
);

export default BreadNavigation;
