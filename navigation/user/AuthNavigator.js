import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/user/LoginScreen";
import RegisterScreen from "../../screens/user/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () =>{
    return(
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
    )
};

export default AuthNavigator;