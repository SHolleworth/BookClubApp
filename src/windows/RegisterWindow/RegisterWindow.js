import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, TextInput, Keyboard, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../constants'
import { registerNewUser } from '../../handlers/socketHandler'
import styles from './styles'

const RegisterWindow = (props) => {
    
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

    const register = async () => {

        const details = { username, password }
        
        try {
              
            const registerResponse = await registerNewUser(details)

            Alert.alert("Success", `Account ${username} has been created.`)

            props.setScreenShowing('login')
    
            console.log(registerResponse)

        }
        catch (error) {

            Alert.alert("Error", error)

            console.error(error)

        }
    }

    return (
        <View style={[styles.background, { paddingTop }]}>
            <Text style={styles.heading}>Welcome To Book Clubs.</Text>
            <Text style={styles.loginHeading}>Register</Text>
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
                <Text style={styles.loginText}>Got an account already? </Text>
                <TouchableOpacity
                onPress={() => props.setScreenShowing('login')}
                ><Text style={[styles.loginText, {color: 'blue'}]}>Log In</Text></TouchableOpacity>
            </View>
            <TouchableHighlight 
            style={[ globalStyles.button, { marginRight: 0, padding: 0, height: 60, width: 100 }]}
            onPress={ register }
            >
                <Text style={ globalStyles.buttonText }>Register</Text>
            </TouchableHighlight>
        </View>
    );
};

export default RegisterWindow;