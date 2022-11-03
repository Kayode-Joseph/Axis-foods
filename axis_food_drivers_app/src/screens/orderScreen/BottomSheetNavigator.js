
import { BottomSheetOrderDetailScreen } from './BottomSheetOrderDetailScreen';

import { BottomSheetOrdersHomeScreen } from './BottomSheetOrdersHomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator();


export const BottomSheetStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='Orders'
                component={BottomSheetOrdersHomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='OrderDetail'
                component={BottomSheetOrderDetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
