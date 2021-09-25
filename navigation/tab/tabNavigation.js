import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import BreadNavigation from "../shop/BreadNavigation";
import cartNavigation from "../cart/cartNavigation";
import OrderNavigation from "../orders/OrdersNavigation";

const BottonTabs = createBottomTabNavigator();

const TabNavigator = () => {
  <BottonTabs.Navigator
    screenOptions={{
      tabBarStyle: { ...styles.shadow, ...styles.tabBar },
      headerShown: false,
      tabBarShowLabel: false
    }}
    initialRouteName="Shop"
  >
    <BottonTabs.Screen
      name="Shop"
      component={BreadNavigation}
      option={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-home" size={24} color="black" />
            <Text>Panaderia</Text>
          </View>
        )
      }}
    />
    <BottonTabs.Screen
      name="Cart"
      component={cartNavigation}
      option={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-cart" size={24} color="black" />
            <Text>Carrito</Text>
          </View>
        )
      }}
    />
    <BottonTabs.Screen
      name="Orders"
      component={OrderNavigation}
      option={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-list" size={24} color="black" />
            <Text>Ordenes</Text>
          </View>
        )
      }}
    />
  </BottonTabs.Navigator>;
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90
  }
});

export default TabNavigator;
