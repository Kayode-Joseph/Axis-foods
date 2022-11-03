import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { useState } from 'react';

import restaurants from '../../../assets/Uber Eats Asset Bundle/data/restaurants.json';

import { AntDesign } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

 export const BasketFlatList = ({ menuItem }) => {
      return (
          <View style={styles.container}>
              <View style={styles.rowButtons}>
                  <View style={styles.quantityContainer}>
                      <Text>1</Text>
                  </View>
                  <Text style={{ margin: 10, fontWeight: '600' }}>
                      {menuItem.name}
                  </Text>
                  <Text style={{ marginVertical: 10, marginLeft: 'auto' }}>
                      ${menuItem.price}
                  </Text>
              </View>
          </View>
      );
  };



export const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const price = () => {
    const price = quantity * restaurants[0].dishes[0].price;

    return price.toFixed(2);
  };



  return (
    <>
 

      <View style={{marginTop:60}}>
        <Text style={styles.title}>{restaurants[0].name}</Text>
      </View>
      <View>
        <FlatList data={restaurants[0].dishes} renderItem={({ item }) => {return(<BasketFlatList menuItem={item}/>)}} />
      </View>

      <View style={{ ...styles.rowButtons }}>
        <Text>subtotal</Text>
        <Text style={{ marginLeft: 'auto' }}>$1.24</Text>
      </View>

      <View style={styles.rowButtons}>
        <Text>total</Text>
        <Text style={{ marginLeft: 'auto' }}>$1.24</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Next &#8226; ${price()}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   

    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    marginBottom:0,
 
  },
  title: {
    fontWeight: '800',
    fontSize: 25,
    marginHorizontal: 10,
  },

  quantityContainer:{ height:30, width:30, backgroundColor:'lightgrey', justifyContent:'center', alignItems:'center'},

  subtitle: {
    marginLeft: 10,
    margin: 10,
    fontSize: 15,
  },

  rowButtons: {
    flexDirection: 'row',

    margin: 10,



    alignItems:'center',

  },

  quantity: {
    fontSize: 25,

    margin: 30,
  },

  button: {
    marginTop: 'auto',

    marginBottom: 20,

    alignItems: 'center',

    backgroundColor: 'black',

    padding: 20,

    marginHorizontal: 15,
  },

  buttonText: {
    color: 'white',

    fontSize: 15,
  },

  backIcon: {
    position: 'absolute',

    top: 40,

    left: 10,

    zIndex: 999,

    backgroundColor: 'white',
  },
});
