import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const AuthScreenWrapper = ({children, title, message, buttonText, buttonPath}) =>{
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView
        behavior='height'
        style={styles.screen}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                {children}
                <View style={styles.propmt}>
                    <Text style={styles.propmtMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
                        <Text style={styles.propmtButton}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        fontFamily:'Roboto',
        marginBottom: 18,
        textAlign:'center',
    },
})

export default AuthScreenWrapper

// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// regex email