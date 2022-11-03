import { Text, View, FlatList } from "react-native";

import { OrderListItem } from "../../components/OrderListItem";

import orders from "../../../assets/Uber Eats Asset Bundle/data/orders.json"

import { useNavigation } from '@react-navigation/native';


export const OrderScreen=()=>{

    return(

        <View>

        <FlatList data={orders} 
        renderItem={({ item, index })=>{

            return(
            <OrderListItem order={item}/>

            )


        }}
        
    
        />

        </View>


    )


}