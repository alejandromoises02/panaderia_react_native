import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";

const LoginScreen = ({}) =>{
    return(
            <AuthScreenWrapper
            title="Ingrese"
            message="¿Aun no estas registrado?"
            buttonText="Registrarse"
            buttonPath="Register">
                <Text>Formulario</Text>
            </AuthScreenWrapper>
        
    )
}

const styles = StyleSheet.create({})

export default LoginScreen