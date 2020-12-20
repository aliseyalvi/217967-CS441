
import React from 'react';
import {View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Mango Shake",
    price:'100'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Banana Shake",
    price:'70'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Oreo Shake",
    price:'130'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d70",
    title: "Zinger Burger",
    price:'250'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Malai Boti",
    price:'100'
  },
  {
    id: "58694a0f-3da1-471f-bd96-4",
    title: "Anda Shaami",
    price:'60'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Pasta",
    price:'100'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Chana Chaat",
    price:'80'
  },


];

const Item = ({ item, onPress, style }) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text>{item.title}</Text>
    </View>
    <View style={styles.cell}>
      <Text>{item.price} Rs</Text>
    </View>
    <View  style={styles.cell}>
      <TouchableOpacity onPress={onPress} style={styles.orderBtn}>
        <Text style={styles.orderTxt}>Order</Text>
      </TouchableOpacity>
    </View>
    
  </View>
);

const App = () => {
  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          NUST SEECS Cafe
        </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8,
  },
  title:{
    fontSize:24,
    textAlign:'center',
    marginVertical:16,
  },
  row:{
    flex:1,
    flexDirection:'row',
    alignSelf:'stretch',
    paddingVertical:8,
  },
  cell:{
    flex:1,
    flexDirection:'row',
    alignSelf:'stretch',
    alignItems:'center'
  },
  orderBtn:{
    backgroundColor:'#F57224',
    padding:8,
  },
  orderTxt:{
    color:'white',
  }
});


export default App;
