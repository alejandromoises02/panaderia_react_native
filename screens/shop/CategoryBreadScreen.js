import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FAB } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import BreadItem from "../../../components/BreadItem";
import { filterBread, selectBread } from "../../../store/actions/bread.actions";
import { COLORS } from '../../../constants/colors'

export default function CategoryBreadScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  useEffect(() => {
    dispatch(filterBread(categoryID));
  }, [categoryID]);

  const breads = useSelector((state) => state.breads.filteredBreads);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detail", {
      name: item.name
    });
  };

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  );
  return (
    <View style={styles.containerMain}>
      <FlatList
        data={breads}
        keyExtractor={(item) => item.id}
        renderItem={renderItemBread}
      />
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
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


