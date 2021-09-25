import React from "react";
import { StyleSheet, View, Text } from "react-native";

const OrderScreen = () =>{
    return(
        <View style={styles.screen}>
            <Text>Tus Ordenes</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default OrderScreen