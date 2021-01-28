import React, { useState } from 'react';
import {Image, Text, TextInput, useWindowDimensions, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { colors, globalStyles } from '../../constants';
import Shelf from '../../objects/objects/shelf/Shelf';
import { addShelf } from '../../tabs/Shelves/shelvesSlice';
import styles from './styles'

const NewShelfDialogue = (props) => {
    const cross = require('../../assets/images/2x/cross.png')

    const [value, onChangeText] = useState("Enter Shelf Name")

    const dispatch = useDispatch()

    const addNewShelf = () => {
        const info = {
            name: value,
            color: null
        }

        const books = []

        dispatch(addShelf({ ...new Shelf(null, info, books) }))

        onChangeText("Enter Shelf Name")

        props.setDialogueOpen(false)
    }

    return (
        <View style={[ styles.background, { width: props.width - 40, left: props.width  } ]}>
            <Text style={ styles.header }>New Shelf</Text>
            <TextInput
                style={ styles.textInput }
                onChangeText={ text => onChangeText(text) }
                value={ value }
                selectTextOnFocus={ true }
                />

            <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ addNewShelf }>
                <Text style={ globalStyles.buttonText }>Add Shelf</Text>
            </TouchableOpacity>

            <View style={[ styles.cross, { left: props.width - 70 } ]}>
                <TouchableOpacity
                    style={{ minHeight: 40 }}
                    onPress={ () => props.setDialogueOpen(false) }>
                    <Image style={{ height: 40, width: 40 }} source={cross} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewShelfDialogue;