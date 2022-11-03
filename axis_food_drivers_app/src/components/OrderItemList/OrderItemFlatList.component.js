import { FlatList, Pressable, StyleSheet } from 'react-native';

import { OrderItem } from '../OrderItem/OrderItem.component';

import { useNavigation } from '@react-navigation/native';

export const OrderItemFlatList = ({
    orders,
    setIsOrderClickedAndOrderPropsFunc,
}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={orders}
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        onPress={() => {
                            navigation.navigate('OrderDetail');
                            setIsOrderClickedAndOrderPropsFunc({
                                isOrderClicked: true,
                                orderPosition: index,
                            });
                        }}
                    >
                        <OrderItem order={item} />
                    </Pressable>
                );
            }}
        />
    );
};
