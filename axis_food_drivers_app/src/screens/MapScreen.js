import { useRef, useMemo, useState, useEffect } from 'react';

import orders from '../../assets/Uber Eats Asset Bundle-2/data/orders.json';

import { useApplicationContext } from '../services/ApplicationContext';

import {GOOGLE_API_KEY} from '@env';


import { FontAwesome } from '@expo/vector-icons';


import BottomSheet from '@gorhom/bottom-sheet';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    useWindowDimensions,
    ActivityIndicator,
    Pressable,
} from 'react-native';

import { BottomSheetOrderDetailScreen } from './orderScreen/BottomSheetOrderDetailScreen';

import { BottomSheetOrdersHomeScreen } from './orderScreen/BottomSheetOrdersHomeScreen';

import { NavigationContainer } from '@react-navigation/native';

import { BottomSheetStackNavigator } from './orderScreen/BottomSheetNavigator';

import MapView, { Marker } from 'react-native-maps';

import { Entypo, Ionicons } from '@expo/vector-icons';

import * as Location from 'expo-location';

import MapViewDirections from 'react-native-maps-directions';

const getLocationPermissionAndLocation = async (setLocation) => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    console.log('STATUS' + status);

    if (!status === 'granted') {
        console.log('Permission Denied!');
        return;
    }

    let location = await Location.getCurrentPositionAsync();

    setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
    });

    return;
};

export const OrderScreen = () => {
    const {
        isOrderClickedAndOrderProps,
        setTotalKMandTotalTimeFunc,
        mapRef,
        bottomSheetRef,
        setLocationFunc,
        location,
    } = useApplicationContext();

    const snapPoints = useMemo(() => ['12%', '90%'], []);

    const { width, height } = useWindowDimensions();

    const orderPosition = isOrderClickedAndOrderProps.isOrderClicked
        ? isOrderClickedAndOrderProps.orderPosition
        : null;

    useEffect(() => {
        getLocationPermissionAndLocation(setLocationFunc);

        const foregroundSubscription = Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                distanceInterval: 100,
            },
            (updatedLocation) => {
                setLocationFunc({
                    lat: updatedLocation.coords.latitude,
                    lng: updatedLocation.coords.longitude,
                });
            }
        );
    }, []);

    console.log(location);

    return !location ? (
        <ActivityIndicator size='large' />
    ) : (
        <View style={styles.viewContainer}>
            <MapView
                ref={mapRef}
                style={{ height, width }}
                followsUserLocation
                initialRegion={{
                    latitude: location.lat,
                    longitude: location.lng,
                    latitudeDelta: 0.07,
                    longitudeDelta: 0.07,
                }}
            >
                <Marker
                    coordinate={{
                        longitude: location.lng,
                        latitude: location.lat,
                    }}
                >
                    <View style={styles.markerBackgroud}>
                        <FontAwesome name='motorcycle' size={24} color='red' />
                    </View>
                </Marker>

                {isOrderClickedAndOrderProps.isOrderClicked
                    ? [
                          <MapViewDirections
                              origin={{
                                  longitude: location.lng,
                                  latitude: location.lat,
                              }}
                              waypoints={[
                                  {
                                      longitude:
                                          orders[orderPosition]?.Restaurant.lng,
                                      latitude:
                                          orders[orderPosition]?.Restaurant.lat,
                                  },
                              ]}
                              destination={{
                                  longitude: orders[orderPosition]?.User.lng,
                                  latitude: orders[orderPosition]?.User.lat,
                              }}
                              strokeWidth={5}
                              strokeColor='green'
                              apikey={GOOGLE_API_KEY}
                              onReady={(result) => {
                                  setTotalKMandTotalTimeFunc(
                                      result.duration,
                                      result.distance
                                  );
                              }}
                          />,
                          <Marker
                              title={orders[orderPosition]?.Restaurant.name}
                              description={
                                  orders[orderPosition]?.Restaurant.address
                              }
                              coordinate={{
                                  longitude:
                                      orders[orderPosition]?.Restaurant.lng,
                                  latitude:
                                      orders[orderPosition]?.Restaurant.lat,
                              }}
                          >
                              <View style={styles.markerBackgroud}>
                                  <Entypo name='shop' size={24} color='red' />
                              </View>
                          </Marker>,
                          <Marker
                              title={orders[orderPosition]?.User.name}
                              description={orders[orderPosition]?.User.address}
                              coordinate={{
                                  longitude: orders[orderPosition]?.User.lng,
                                  latitude: orders[orderPosition]?.User.lat,
                              }}
                          >
                              <View style={styles.markerBackgroud}>
                                  <Ionicons name='man' size={24} color='red' />
                              </View>
                          </Marker>,
                      ]
                    : orders.map((order) => {
                          return (
                              <Marker
                                  key={order.id}
                                  title={order.Restaurant.name}
                                  description={order.Restaurant.address}
                                  coordinate={{
                                      longitude: order.Restaurant.lng,
                                      latitude: order.Restaurant.lat,
                                  }}
                              >
                                  <View style={styles.markerBackgroud}>
                                      <Entypo
                                          name='shop'
                                          size={24}
                                          color='red'
                                      />
                                  </View>
                              </Marker>
                          );
                      })}
            </MapView>

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                handleIndicatorStyle={{
                    backgroundColor: 'lightgrey',
                    width: 100,
                }}
            >
                <NavigationContainer>
                    <BottomSheetStackNavigator />
                </NavigationContainer>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: { backgroundColor: 'lightblue', flex: 1 },
    markerBackgroud: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 20,
    },
});
