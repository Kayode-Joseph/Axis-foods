import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Entypo } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';

import { useAuthContext } from '../../services/authContext/AuthContext';

export const ProfileScreen = () => {
    const { setDbUserFunc } = useAuthContext();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [lat, setLat] = useState('0');
    const [lng, setLng] = useState('0');

    const onSave = () => {
        
        setDbUserFunc(name, address, lat, lng);
       
     
    };

    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                }}
            >
                <Text style={styles.title}>Profile</Text>
                <Entypo
                    name='log-out'
                    size={24}
                    color='black'
                    style={{ marginLeft: 'auto' }}
                    onPress={() => Auth.signOut()}
                />
            </View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='Name'
                style={styles.input}
            />
            <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder='Address'
                style={styles.input}
            />
            <TextInput
                value={lat}
                onChangeText={setLat}
                placeholder='Latitude'
                style={styles.input}
                keyboardType='numeric'
            />
            <TextInput
                value={lng}
                onChangeText={setLng}
                placeholder='Longitude'
                style={styles.input}
            />
            <Button onPress={onSave} title='Save' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 145,
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
    },
});
