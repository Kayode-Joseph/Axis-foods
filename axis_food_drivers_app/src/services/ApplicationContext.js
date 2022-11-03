import { createContext, useState, useRef } from 'react';

import { useContext } from 'react';

export const deliveryStatusEnum = {
    ACCEPTED: 'ACCEPTED',

    ORDER_PICKED: 'ORDER PICKED',

    DELIVERED: 'DELIVERED',
};

const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [isOrderClickedAndOrderProps, setIsOrderClickedAndOrderProps] =
        useState({
            isOrderClicked: false,
        });

    //to set total km and time for order details screen
    const [totalKM, setTotalKM] = useState(null);

    const [totalTime, setTotalTime] = useState(null);

    const bottomSheetRef = useRef(null);

    const mapRef = useRef(null);

    const [location, setLocation] = useState(null);

    const [deliveryStatus, setDeliveryStatus]= useState(deliveryStatusEnum.ACCEPTED)

    const setLocationFunc = (object) => {
        setLocation(object);
    };

    const setIsOrderClickedAndOrderPropsFunc = (object) => {
        setIsOrderClickedAndOrderProps(object);
    };

    const setTotalKMandTotalTimeFunc = (totalTime, totalKM) => {
        setTotalTime(totalTime);
        setTotalKM(totalKM);
    };

    return (
        <ApplicationContext.Provider
            value={{
                isOrderClickedAndOrderProps,
                setIsOrderClickedAndOrderPropsFunc,
                setTotalKMandTotalTimeFunc,
                totalKM,
                totalTime,
                bottomSheetRef,
                mapRef,
                location,
                setLocationFunc,
                deliveryStatus,
                setDeliveryStatus,
                deliveryStatusEnum
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};
