import { DataStore } from 'aws-amplify';

import { Dish } from '../../models';

export const getDishes = (id) => {
    const dishes = DataStore.query(Dish, (dish) => dish.restaurantID('eq', id));

    return dishes;
};
