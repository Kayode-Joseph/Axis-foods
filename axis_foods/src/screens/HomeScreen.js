import { StyleSheet, FlatList,View } from 'react-native';

import { RestaurantComponent } from '../components/restaurant.component';

import restaurants from '../../assets/Uber Eats Asset Bundle/data/restaurants.json';

import { useNavigation } from '@react-navigation/native';

import { ApplicationContext } from '../services/applicationContext/applicationContext';

import { useContext, useEffect } from 'react';


export const HomeScreen=()=> {

  const navigation = useNavigation();

  const { restaurants, setRestaurantStateFunc } =
      useContext(ApplicationContext);

  

  useEffect(()=>{

    setRestaurantStateFunc()
  }, [])

  const onPress = (item) => {
      navigation.navigate('Restaurant');
      
  };


  
  return (
      <FlatList
        showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => {
              return (
                  <>
                      <RestaurantComponent
                          restaurant={item}
                          isForRestaurantDetailScreen={true}
                          onPress={()=>{
                             navigation.navigate('Restaurant', {id: item.id, position: item.position });
                          }}

                      />
                      <View style={{padding:10}}></View>
                  </>
              );
            }
          }
          style={styles.flatList}
      />
  );
}

const styles = StyleSheet.create({

  flatList: {

    margin:10

  },
});
