import React, { useEffect, useState } from 'react';
import {Image, useWindowDimensions, View, Keyboard} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../constants';
import styles from './styles'

import { searchGoogleBooks } from '../../handlers/requestHandler'

const SearchBar = (props) => {
    const [value, onChangeText] = useState("")
    const [top, setTop] = useState(useWindowDimensions().height - 200)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {
            Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide)
        }
    },[])

    const keyboardDidShow = (event) => {
        setTop(top - event.endCoordinates.height)
    }

    const keyboardDidHide = (event) => {
        setTop(top + event.endCoordinates.height)
    }

    const search = () => {
        requestHandler.searchGoogleBooks(value)
    }

    return (
        <View style={[ styles.background, { width: props.width - 40, left: props.width + 20, top }]}>
            <TextInput 
            style={ styles.textInput }
            placeholder={ "Search by title" }
            onChangeText={ text => onChangeText(text) } />
            <TouchableOpacity 
            style={ styles.button }
            onPress={ search }>
                <View style={ styles.button }></View>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;