import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/Uber Eats Asset Bundle/data/orders.json'

import restaurant from '../../../assets/Uber Eats Asset Bundle/data/restaurants.json'

import { RestaurantComponent } from '../../components/restaurant.component'

import { BasketFlatList } from '../basket screen/basketScreen'


export const OrderDetailsScreen=()=> {
  return (
      // <RestaurantComponent restaurant={orders[0].Restaurant} order={orders[0]}/>

      <FlatList
          data={restaurant[0].dishes}
          renderItem={({ item }) => <BasketFlatList menuItem={item} />}
          ListHeaderComponent={RestaurantComponent({
              restaurant: orders[0].Restaurant,
              order: orders[0],
          })}
      />
  );
}