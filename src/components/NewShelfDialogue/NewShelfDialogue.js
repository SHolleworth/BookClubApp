import React, { useState } from 'react';
import {Image, Text, TextInput, useWindowDimensions, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { colors, globalStyles } from '../../constants';
import Shelf from '../../objects/objects/shelf/Shelf';
import { addShelf } from '../../state/shelvesSlice';
import CloseButton from '../CloseButton';
import styles from './styles'

const NewShelfDialogue = (props) => {
    const [value, onChangeText] = useState("Enter Shelf Name")

    const dispatch = useDispatch()

    const width = useSelector(state => state.ui.tabWidth)

    const addNewShelf = () => {
        const info = {
            name: value,
            color: null
        }

        const books = []

        dispatch(addShelf({ ...new Shelf(null, 0, info) }))

        onChangeText("Enter Shelf Name")

        props.setDialogueOpen(false)
    }

    const close = () => {
        props.setDialogueOpen(false)
    }

    return (
        <View style={[ globalStyles.dialogueBackground, { width: width - 40, left: width  } ]}>
            <Text style={ globalStyles.dialogueHeader }>New Shelf</Text>
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

            <CloseButton close={ close } />
        </View>
    );
};

export default NewShelfDialogue;