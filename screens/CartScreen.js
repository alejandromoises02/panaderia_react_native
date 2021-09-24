import React from "react";
import { View, TouchableOpacity, FlatList, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from './../components/CartItem'
import { removeItem, confirmCart } from "../store/actions/cart.actions";

const CartScreen =() =>{
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const dispatch = useDispatch();
    const handlerDeleteItem = (id) => {
      dispatch(removeItem(id))
    }

    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handlerDeleteItem} />
    );

    const handlerConfirmCart = () =>{
      dispatch(confirmCart(items));
    }
  
  return (
   <View style={styles.container}>
       <View style={styles.list}>
           <FlatList 
           data={items}
           keyExtractor={item => item.id}
           renderItem={renderItem}
           />
       </View>
       <View style={styles.footer}>
         <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
           <Text>Confirma tu compra</Text>
           <View style={styles.total}>
             <Text style={styles.text}>Total:</Text>
             <Text style={styles.text}>${total}</Text>
           </View>
         </TouchableOpacity>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff'
      },
      list: {
        flex: 1,
      },
      footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
      },
      confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      total: {
        flexDirection: 'row',
      },
      text: {
        fontSize: 18,
        fontFamily: 'Roboto',
        padding: 8,
      },
});

export default CartScreen
