import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import orders from '../../../assets/Uber Eats Asset Bundle-2/data/orders.json';
import { Entypo } from '@expo/vector-icons';


export const OrderItem = ({order}) => {
    return (
        <View style={styles.orderCard}>
            <View style={styles.orderCardImageAndTextContainer}>
                <Image
                    source={{ uri: order.Restaurant.image }}
                    style={{
                        width: '25%',
                        height: '100%',
                        borderTopLeftRadius: 7,
                        borderBottomLeftRadius: 7,
                    }}
                />
                <View
                    style={styles.orderCardImageAndTextContainerTextConatiner}
                >
                    <Text
                        style={{
                            ...styles.orderCardTextBold,
                            fontSize: 18,
                        }}
                        numberOfLines={1}
                    >
                        {order.Restaurant.name}
                    </Text>
                    <Text style={styles.orderCardTextGrey}>
                        {order.Restaurant.address}
                    </Text>
                    <Text
                        style={{
                            ...styles.orderCardTextBold,
                            marginTop: 3,
                            fontSize: 15,
                        }}
                    >
                        Delivery Details:
                    </Text>
                    <Text style={styles.orderCardTextGrey}>
                        {order.User.name}
                    </Text>
                    <Text style={styles.orderCardTextGrey}>
                        {order.User.name}>{order.User.address}
                    </Text>
                </View>
            </View>

            <View style={styles.orderCardCheckIconConatiner}>
                <Entypo name='check' size={30} color='white' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderCard: {
        borderWidth: 3,
        borderColor: 'green',
        flexDirection: 'row',
        borderRadius: 10,
        marginVertical:10
    },
    orderCardImageAndTextContainer: {
        flexDirection: 'row',

        marginRight: 40,
    },
    orderCardImageAndTextContainerTextConatiner: {
        width: 250,

        padding: 10,
    },

    orderCardTextBold: {
        fontWeight: '500',
    },

    orderCardTextGrey: {
        color: 'grey',
    },

    orderCardCheckIconConatiner: {
        marginLeft: 'auto',

        backgroundColor: 'green',

        justifyContent: 'center',

        alignItems: 'center',

        padding: 5,
    },
});
