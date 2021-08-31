import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function CategoryBreadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='Ver detalles' onPress={()=>{navigation.navigate('Detail')}}/>
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