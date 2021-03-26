import React, { useState, useEffect } from 'react';
import { Text, View, Keyboard, Alert } from 'react-native';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { loginAsUser } from '../../handlers/socketHandler'
import { globalStyles } from '../../constants';
import styles from './styles'

const LoginWindow = (props) => {

    const [paddingTop, setPaddingTop] = useState(120)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {

            Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide)

        }
    },[])

    const keyboardDidShow = (event) => {
        setPaddingTop(0)
    }

    const keyboardDidHide = (event) => {
        setPaddingTop(120)
    }

    const login = async () => {

        const details = { username, password }

        try {
                      
            const loginResponse = await loginAsUser(details)
    
            console.log(loginResponse)

        }
        catch(error) {

            Alert.alert('Login Error', error)

            console.error(error)

        }

    }

    return (
        <View style={[styles.background, { paddingTop }]}>
            <Text style={styles.heading}>Welcome To Book Clubs.</Text>
            <Text style={styles.loginHeading}>Log In</Text>
            <Text style={styles.loginText}>Username</Text>
            <TextInput 
            style={styles.textInput}
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <Text style={styles.loginText}>Password</Text>
            <TextInput 
            style={styles.textInput}
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.loginText}>Need to </Text>
                <TouchableOpacity
                onPress={() => props.setScreenShowing('register')}
                ><Text style={[styles.loginText, {color: 'blue'}]}>register</Text></TouchableOpacity>
                <Text style={styles.loginText}>?</Text>
            </View>
            <TouchableHighlight
            style={[ globalStyles.button, { marginRight: 0, padding: 0, height: 60, width: 100 }]}
            onPress={ login }
            >
                <Text style={ globalStyles.buttonText }>Log In</Text>
            </TouchableHighlight>
        </View>
    );
};

export default LoginWindow;