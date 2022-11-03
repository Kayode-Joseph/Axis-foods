import { DataStore } from 'aws-amplify';

import { User } from '../../models';

import { Alert } from 'react-native';

export const saveUserInDB = async (name, address, lat, lng, sub) => {
 
    try {
        const result=await DataStore.save(
            new User({
                name,

                address,

                lat: parseFloat(lat),

                lng: parseFloat(lng),

                sub,
            })
        );
        console.log(result);
    } catch (e) {
        console.log(e);
    }
};

export const getUserFromDB= async(authenticatedUserID)=>{



return await DataStore.query(User, (user)=> user.sub("eq", authenticatedUserID))


}
