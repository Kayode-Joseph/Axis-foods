import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';



import { useRef } from 'react';
import orders from './assets/Uber Eats Asset Bundle-2/data/orders.json';
import { Entypo } from '@expo/vector-icons';

import { OrderScreen } from './src/screens/MapScreen';

import { ApplicationContextProvider } from './src/services/ApplicationContext';

import { OrderItemFlatList } from './src/components/OrderItemList/OrderItemFlatList.component';

export default function App() {
    return (
        <View style={styles.container}>
            <ApplicationContextProvider>
                <OrderScreen />

                <StatusBar style='auto' />
            </ApplicationContextProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
