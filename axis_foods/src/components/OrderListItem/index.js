import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';


export const OrderListItem=({ order })=>{
    const baseContainer = styles.orderListItemContainer;

    const navigation= useNavigation()
  return (
      <>
          <Pressable style={baseContainer} onPress={()=>navigation.navigate('order')}>
              <View style={baseContainer.imageAndTextContainer}>
                  <Image
                      source={{ uri: order.Restaurant.image }}
                      style={{ width: 100, height: 100 }}
                  />
                  <View
                      style={
                         baseContainer.imageAndTextContainer.textContainer
                      }
                  >
                      <Text style={baseContainer.imageAndTextContainer.textContainer.fontWeight600AndSize16}>{order.Restaurant.name}</Text>
                      <Text>3 items &#8226; $40.43</Text>
                      <Text>2 days ago &#8226; {order.status}</Text>
                  </View>
              </View>
          </Pressable>
      </>
  );
}

const styles = StyleSheet.create({
    orderListItemContainer: {
        borderBottomWidth: 3,
        borderColor: 'lightgrey',
      

        imageAndTextContainer: {
            flexDirection: 'row',
             alignItems:'center',
             margin:10,

             textContainer:{

                marginLeft: 10,

                fontWeight600AndSize16:{
                    fontWeight:"600",
                    fontSize:16
                }

             }
        },


    },
});