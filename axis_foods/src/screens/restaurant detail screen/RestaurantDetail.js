import { RestaurantComponent } from '../../components/restaurant.component';

import restaurants from '../../../assets/Uber Eats Asset Bundle/data/restaurants.json';

import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useRoute, useNavigation } from '@react-navigation/native';

import { useContext, useEffect } from 'react';

import { ApplicationContext } from '../../services/applicationContext/applicationContext';

export const RestaurantDetailScreen = () => {

    const { restaurants }=useContext(ApplicationContext)

    const { setDishesFunc } = useContext(ApplicationContext);

    const { dishes } = useContext(ApplicationContext);

    const route = useRoute();

    const navigation = useNavigation();

    const id = route.params.id;
    const position= route.params.position

    // console.log("id"+id);

    useEffect(() => {

        setDishesFunc(id)

    }, []);

    const ListHeader = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <RestaurantComponent
                    restaurant={restaurants[position]}
                    style={styles.restaurantContainer}
                    isForRestaurantDetailScreen={true}
                />

                <View
                    style={{
                        paddingBottom: 10,
                        borderBottomColor: 'lightgrey',

                        marginLeft: 12,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Menu</Text>
                </View>
            </View>
        );
    };

    return (
        <>
            {/* <RestaurantComponent
              restaurant={restaurants[0]}
              style={styles.restaurantContainer} 
              isForRestaurantDetailScreen={true}
              order={null}
          /> */}
            <Ionicons
                name='arrow-back-circle'
                size={45}
                style={styles.backIcon}
                color='white'
                onPress={() => navigation.goBack()}
            ></Ionicons>

            <FlatList
                ListHeaderComponent={ListHeader}
                stickyHeaderIndices={[0]}
                data={dishes}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={styles.flatListContainer}>
                                <Pressable
                                    style={styles.dishContainer}
                                    onPress={() =>
                                        navigation.navigate('Dish', {
                                            id: item.name,
                                            position: item.position
                                        })
                                    }
                                >
                                    <Text style={styles.title}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={styles.subtitle}
                                        numberOfLines={2}
                                    >
                                        {item.description}
                                    </Text>
                                    <Text
                                        style={{
                                            ...styles.subtitle,
                                            color: 'green',
                                        }}
                                    >
                                        ${item.price}
                                    </Text>
                                </Pressable>

                                <Image
                                    source={{ uri: item.image }}
                                    style={{ height: 60, width: 60 }}
                                />
                            </View>
                        </>
                    );
                }}
                style={styles.flatList}
            />
        </>
    );
};

const styles = StyleSheet.create({
    flatList: {
        marginTop: 0,

        backgroundColor: 'white',
    },
    flatListContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,

        borderColor: 'lightgrey',

        marginHorizontal: 20,

        marginBottom: 10,

        alignItems: 'center',
    },
    restaurantContainer: {
        title: {
            fontWeight: 'bold',
            fontSize: 35,
            marginVertical: 10,
        },
        subtitle: {
            marginBottom: 10,
            color: 'grey',
        },

        margin: 0,
    },

    subtitle: {
        marginLeft: 10,

        color: 'grey',
    },
    line: {
        width: '100%',
        height: 3,
        backgroundColor: 'lightgrey',
    },

    line80: {
        flex: 1,
        height: 2,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIcon: {
        position: 'absolute',

        top: 25,

        left: 10,

        zIndex: 999,
    },
    dishContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 10,
        marginBottom: 2,
    },
});
