import { OrderItemFlatList } from '../../components/OrderItemList/OrderItemFlatList.component';

import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useApplicationContext } from '../../services/ApplicationContext';

import orders from '../../../assets/Uber Eats Asset Bundle-2/data/orders.json';

export const BottomSheetOrdersHomeScreen = () => {
    const { setIsOrderClickedAndOrderPropsFunc } =
        useApplicationContext();

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ margin: 10 }}>
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 20,
                            marginBottom: 5,
                        }}
                    >
                        You Are Online
                    </Text>
                    <Text style={{ color: 'grey' }}>
                        Available Orders: {orders.length}
                    </Text>
                </View>
                <OrderItemFlatList
                    orders={orders}
                    setIsOrderClickedAndOrderPropsFunc={
                        setIsOrderClickedAndOrderPropsFunc
                    }
                />
            </View>
        </View>
    );
};
