import { DataStore } from "aws-amplify";

import {Restaurant} from "../../models"


export const getRestaurants=async()=>{

 const restaurants= await DataStore.query(Restaurant)


 return restaurants

 
}


