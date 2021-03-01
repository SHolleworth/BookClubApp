import React, { useState, useEffect } from 'react';
import { Text, useWindowDimensions, View, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { closeClubNamingWindow } from '../../state/uiSlice';
import { postNewClub, retrieveClubs } from '../../handlers/socketHandler'
import { globalStyles } from '../../constants';

const ClubNamingWindow = () => {

    const height = useWindowDimensions().height

    const width = useWindowDimensions().width

    const user = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch()

    const [name, setName] = useState("")

    const [marginBottom, setMarginBottom] = useState(0)

    const close = () => {
        
        setName("")

        dispatch(closeClubNamingWindow())

    }

    const createClub = () => {
        
        if(name !== "") {

            postNewClub({ name, userId: user.id })
            .then((response) => {
                
                console.log(response)

                console.log("Retrieving Clubs")

                return retrieveClubs(user)

            })
            .then((response) => {

                console.log(response)
                
                dispatch(closeClubNamingWindow())

            })
            .catch((error) => {

                console.error(error)
                
            })

        }

    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {
            Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide)
        }
    },[])


    const keyboardDidShow = (event) => {
        setMarginBottom(event.endCoordinates.height / 2)
    }


    const keyboardDidHide = (event) => {
        setMarginBottom(0)
    }

    return (
        <View style={[ { height, width }, styles.background ]}>

            <BackButton function={ close } />

            <View style={[ styles.textInputContainer, { marginBottom } ]}>

                <Text style={[ globalStyles.h1, styles.header ]}>Name your new club</Text>

                <TextInput 
                    style={ styles.textInput }
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={ "Club Name" }
                />

                <TouchableOpacity 
                    style={[ globalStyles.button, { justifyContent: 'center' } ]}
                    onPress={ createClub }
                >

                    <Text style={ globalStyles.buttonText }>Okay</Text>
                </TouchableOpacity>


            </View>

            <View style={ styles.spacer } />

        </View>
    ); 
};

export default ClubNamingWindow;