import { createContext, useState } from 'react';

import { Alert } from 'react-native';

import { getRestaurants } from '../restaurantService/restaurantService';

import { getDishes } from '../dishServices/dishService';

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);

    const [dishes, setDishes] = useState([]);

    const setRestaurantStateFunc = () => {
        getRestaurants()
            .then((restaurants) => {
               
                //add index to resturant object as position field
                setRestaurants(
                    restaurants.map((restaurant, index) => {
                        return {
                            ...restaurant,
                            position: index,
                        };
                    })
                );
            })
            .catch((e)=>Alert.alert("error", e.message));
    };

    const setDishesFunc = (id) => {
        getDishes(id)
            .then((dishes) => {
                setDishes(
                    dishes.map((dish, index) => {
                        return {
                            ...dish,
                            position: index,
                        };
                    })
                );
            })
            .catch((e) => Alert.alert('error', e.message));
    };

    return (
        <ApplicationContext.Provider
            value={{
                restaurants,
                setRestaurantStateFunc,
                setDishesFunc,
                dishes,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};
