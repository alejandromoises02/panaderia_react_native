import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button title='Ver productos' onPress={()=>{navigation.navigate('Products')}}/>
    </View>
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