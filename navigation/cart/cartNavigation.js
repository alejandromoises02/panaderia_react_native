import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../screens/cart/CartScreen";
import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const cartNavigation = () => (
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
      name="Cart"
      options={{ title: "Tu compra" }}
      component={CartScreen}
    />
  </Stack.Navigator>
);

export default cartNavigation;