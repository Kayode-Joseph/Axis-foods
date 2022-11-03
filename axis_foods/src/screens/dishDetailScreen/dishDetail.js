import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Pressable,
} from 'react-native';

import { useState, useContext } from 'react';

import restaurants from '../../../assets/Uber Eats Asset Bundle/data/restaurants.json';

import { AntDesign } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ApplicationContext } from '../../services/applicationContext/applicationContext';

export const DishDetailScreen = () => {
    const { dishes } = useContext(ApplicationContext);

    const [quantity, setQuantity] = useState(1);

    const navigation = useNavigation();

    const route = useRoute();

    // const id = route.params.id;
    const position = route.params.position;

    const dish = dishes[position];

    const price = () => {
        const price = quantity * dish.price;

        return price.toFixed(2);
    };

    return (
        <>
            
                <View style={styles.container}>
                    <Text style={styles.title}>{dish.name}</Text>

                    <Text style={styles.subtitle}>{dish.description}</Text>
                </View>
            

            <View style={styles.rowButtons}>
                <AntDesign
                    name='minuscircleo'
                    size={60}
                    onPress={() => {
                        quantity > 1 ? setQuantity(quantity - 1) : null;
                    }}
                    suppressHighlighting={true}
                />

                <Text style={styles.quantity}>{quantity}</Text>

                <AntDesign
                    name='pluscircleo'
                    size={60}
                    color='black'
                    onPress={() => {
                        setQuantity(quantity + 1);
                    }}
                    suppressHighlighting={true}
                />
            </View>

            <Pressable
                onPress={() => navigation.navigate('Basket')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    add {quantity} items to basket &#8226; ${price()}
                </Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 80,

        marginBottom: 50,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    },
    title: {
        fontWeight: '800',
        fontSize: 25,
        marginHorizontal: 10,
    },

    subtitle: {
        marginLeft: 10,
        margin: 10,
        color: 'grey',
    },

    rowButtons: {
        flexDirection: 'row',

        alignItems: 'center',

        justifyContent: 'center',
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

        top: 25,

        left: 10,

        zIndex: 999,

        backgroundColor: 'white',
    },
});
