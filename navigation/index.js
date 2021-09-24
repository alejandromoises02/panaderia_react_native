import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import BreadNavigation from "./BreadNavigation";
import AuthNavigator from './AuthNavigator'

const MainNavigator = () =>{
    const userId = useSelector(state => state.auth.userId);

    return (
        <NavigationContainer>
            {userId ?
            <BreadNavigation />
            :
            <AuthNavigator />
            }
        </NavigationContainer>
    );
};

export default MainNavigator;