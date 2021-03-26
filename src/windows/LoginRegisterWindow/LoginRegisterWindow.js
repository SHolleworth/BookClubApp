import React, { useState } from 'react';
import { View } from 'react-native';
import LoginWindow from '../LoginWindow'
import RegisterWindow from '../RegisterWindow'
import styles from './styles'

const LoginRegisterWindow = () => {

    const [screenShowing, setScreenShowing] = useState('login')

    return (
        <View style={{ position: 'absolute', top:0, right: 0, bottom: 0, left: 0,}}>
            {screenShowing === 'register' ? <RegisterWindow setScreenShowing={setScreenShowing} /> : null } 
            {screenShowing === 'login' ? <LoginWindow setScreenShowing={setScreenShowing} /> : null }
        </View>
    );
};

export default LoginRegisterWindow;