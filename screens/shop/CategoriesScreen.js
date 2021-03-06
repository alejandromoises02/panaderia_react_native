import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FAB } from "react-native-elements";
import GridItem from "../../components/GridItem";
import { selectCategory } from "../../store/actions/category.actions";
import { COLORS } from './../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CategoriesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      name: item.title
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <FAB 
        icon={<MaterialCommunityIcons name="cart" size={24} color="white" />}
        placement='right'
        color={COLORS.accent}
        onPress={()=>navigation.navigate('Cart')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})