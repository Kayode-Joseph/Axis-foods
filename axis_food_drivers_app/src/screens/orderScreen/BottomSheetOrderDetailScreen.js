import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import orders from '../../../assets/Uber Eats Asset Bundle-2/data/orders.json';

import { FontAwesome5, Fontisto } from '@expo/vector-icons';

import { useApplicationContext } from '../../services/ApplicationContext';

export const BottomSheetOrderDetailScreen = () => {
    const {
        totalTime,
        totalKM,
        bottomSheetRef,
        mapRef,
        location,
        deliveryStatus,
        setDeliveryStatus,
        deliveryStatusEnum,
    } = useApplicationContext();

    const [deliveryStatusButtonColor, setDeliveryStatusButtonColor] =
        useState('green');

    const setDeliveryStatusButtonColorFunc = () => {
        switch (deliveryStatus) {
            case deliveryStatusEnum.ACCEPTED:
                setDeliveryStatus(deliveryStatusEnum.ORDER_PICKED);
                setDeliveryStatusButtonColor('orange');

                break;

            case deliveryStatusEnum.ORDER_PICKED:
                setDeliveryStatus(deliveryStatusEnum.DELIVERED);

                setDeliveryStatusButtonColor('green');
                break;

            case deliveryStatusEnum.DELIVERED:
                setDeliveryStatus(deliveryStatusEnum.ACCEPTED);
                setDeliveryStatusButtonColor('green');
        }
    };

    const styles = StyleSheet.create({
        orderDetailScreenHeader: {
            flexDirection: 'row',
            marginTop: 10,
            paddingBottom: 35,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 3,
        },
        row: {
            flexDirection: 'row',
        },

        orderDetailScreenBody: {
            margin: 10,
            marginHorizontal: 20,
            borderBottomColor: 'lightgrey',
            flex: 1,
        },

        orderDetailScreenGreyFont: {
            fontSize: 15,
            letterSpacing: 1,
            color: 'grey',
            marginHorizontal: 2,
        },

        orderDetailScreenButton: {
            backgroundColor: deliveryStatusButtonColor,

            padding: 10,

            borderRadius: 3,

            marginTop: 'auto',
            alignItems: 'center',
        },
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.orderDetailScreenHeader}>
                <Text style={{ fontSize: 20 }}>
                    {totalTime?.toFixed(0)} min
                </Text>
                <FontAwesome5
                    name='shopping-bag'
                    size={30}
                    color='green'
                    style={{ marginHorizontal: 10 }}
                />
                <Text style={{ fontSize: 20 }}>{totalKM?.toFixed(1)} km</Text>
            </View>

            <View style={styles.orderDetailScreenBody}>
                <View
                    style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 3,

                        paddingVertical: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                            marginBottom: 15,
                        }}
                    >
                        {orders[0].Restaurant.name}
                    </Text>
                    <View
                        style={{
                            ...styles.row,
                            marginBottom: 5,
                            alignItems: 'flex-end',
                        }}
                    >
                        <Fontisto
                            name='shopping-store'
                            size={22}
                            color='grey'
                        />
                        <Text style={styles.orderDetailScreenGreyFont}>
                            {orders[0].Restaurant.address}
                        </Text>
                    </View>
                    <View style={{ ...styles.row, alignItems: 'flex-end' }}>
                        <FontAwesome5
                            name='map-marker-alt'
                            size={30}
                            color='grey'
                        />
                        <Text style={styles.orderDetailScreenGreyFont}>
                            {orders[0].User.address}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.orderDetailScreenGreyFont}>
                        Rice and turks
                    </Text>
                    <Text style={styles.orderDetailScreenGreyFont}>
                        Plantain and turks
                    </Text>
                    <Text style={styles.orderDetailScreenGreyFont}>
                        Bread and Moin-Moin
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.orderDetailScreenButton}
                    onPress={() => {
                        bottomSheetRef.current?.collapse();

                        mapRef.current?.animateToRegion({
                            latitude: location.lat,
                            longitude: location.lng,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        });

                        setDeliveryStatusButtonColorFunc();
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        {deliveryStatus}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
