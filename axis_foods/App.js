import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    SafeAreaView,
} from 'react-native';

import { RestaurantComponent } from './src/components/restaurant.component';

import restaurants from './assets/Uber Eats Asset Bundle/data/restaurants.json';

import { HomeScreen } from './src/screens/HomeScreen';

import { RestaurantDetailScreen } from './src/screens/restaurant detail screen/RestaurantDetail';

import { DishDetailScreen } from './src/screens/dishDetailScreen/dishDetail';

import { BasketScreen } from './src/screens/basket screen/basketScreen';

import { OrderScreen } from './src/screens/ordersScreen';

import { OrderDetailsScreen } from './src/screens/OrderDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './src/navigation';

import { TabNavigator } from './src/navigation';

import { Amplify } from 'aws-amplify';

import config from './src/aws-exports';

import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';

import { createContext } from 'react';

import { ApplicationContextProvider } from './src/services/applicationContext/applicationContext';

import { AuthContextProvider } from './src/services/authContext/AuthContext';

import { ApplicationNavigator } from './src/navigation/index'

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
    return (
        <AuthContextProvider>
            <ApplicationContextProvider>
                <NavigationContainer>
                   <ApplicationNavigator/>
                    {/* <RootNavigator/> */}
                </NavigationContainer>
            </ApplicationContextProvider>
        </AuthContextProvider>
    );
}

export default withAuthenticator(App);
