import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';

import { OrderScreen } from '../screens/ordersScreen';

import { RestaurantDetailScreen } from '../screens/restaurant detail screen/RestaurantDetail';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { DishDetailScreen } from '../screens/dishDetailScreen/dishDetail';

import { BasketScreen } from '../screens/basket screen/basketScreen';

import { OrderDetailsScreen } from '../screens/OrderDetailsScreen';

import { ProfileScreen } from '../screens/profile screen';

import { useAuthContext } from '../services/authContext/AuthContext';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Restaurants' component={HomeScreen} />
            <Stack.Screen
                name='Restaurant'
                component={RestaurantDetailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Dish' component={DishDetailScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} />
        </Stack.Navigator>
    );
};

const OrdersStackNavigator = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='orders' component={OrderScreen} />

                <Stack.Screen name='order' component={OrderDetailsScreen} />
            </Stack.Navigator>
        </>
    );
};

export const TabNavigator = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name='Home'
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name='home' size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Orders'
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='reorder-four-outline'
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='person' size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const ApplicationNavigator = () => {
    const { dbUser } = useAuthContext();

    return (
        <Stack.Navigator>
            {dbUser ? null : (
                <Stack.Screen
                    name='registerProfileScreen'
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
            )}

            <Stack.Screen
                name='application'
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
