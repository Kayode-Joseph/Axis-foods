import { useState, useEffect, useContext, createContext } from 'react';

import { Auth } from 'aws-amplify';
import { saveUserInDB } from '../userService/UserService';

import { getUserFromDB } from '../userService/UserService';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    const [dbUser, setDbUser] = useState(null);

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(
            ({ attributes }) => {
                setAuthUser(attributes?.sub);
            }
        );
    }, []);

    useEffect(() => {
        getUserFromDB(authUser);
    }, [authUser]);

    const setDbUserFunc = (name, address, lat, lng) => {
        saveUserInDB(name, address, lat, lng, authUser);
        setDbUser(authUser);
    };

    return (
        <AuthContext.Provider value={{ setDbUserFunc, dbUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
