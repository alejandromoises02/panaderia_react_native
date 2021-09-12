import React, { useEffect }from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BreadItem from '../components/BreadItem';
import { filterBread, selectBread } from '../store/actions/bread.actions';


export default function CategoryBreadScreen({ navigation }) {

  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID)
  useEffect(() => {
    dispatch(filterBread(categoryID))
  }, [categoryID])

  const breads = useSelector(state => state.breads.filteredBreads)
  
  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Detail', {
      name: item.name,
    });
  } 

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  )
  return (
    <FlatList
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});