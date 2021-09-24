import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FAB } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { addItem } from "../store/actions/cart.actions";
import { COLORS } from './../constants/colors'

export default function BreadDetailScreen({ navigation }) {
  const breadID = useSelector((state) => state.breads.selectedID);
  const breads = useSelector((state) => state.breads.list);
  const bread = breads.find((item) => item.id === breadID);

  const dispatch = useDispatch();

  const handlerAddItemToCart = () => {
    dispatch(addItem(bread));
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text>{bread.description}</Text>
        <Text>$ {bread.price}</Text>
        <Text>{bread.weight}</Text>
        <Button
          title="Agregar este producto al carrito"
          onPress={handlerAddItemToCart}
        />
      </View>
      <FAB
        icon={<MaterialCommunityIcons name="cart" size={24} color="white" />}
        placement="right"
        color={COLORS.accent}
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain:{
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto",
    marginBottom: 10
  }
});
