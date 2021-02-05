import React, { useState } from 'react';
import {Image, Text, TextInput, useWindowDimensions, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { colors, globalStyles } from '../../constants';
import { postNewShelf, retrieveBooks } from '../../handlers/socketHandler';
import Shelf from '../../objects/Shelf';
import { addShelf, getShelfStatus } from '../../state/shelvesSlice';
import CloseButton from '../CloseButton';
import styles from './styles'

const NewShelfDialogue = (props) => {
    const [value, onChangeText] = useState("Enter Shelf Name")

    const dispatch = useDispatch()

    const shelfStatus = useSelector(getShelfStatus)

    const currentUser = useSelector(state => state.user.currentUser)

    const width = useSelector(state => state.ui.tabWidth)

    const addNewShelf = async () => {

        try {

            const newShelf = {...new Shelf(null, currentUser.id, value)}

            const response = await postNewShelf(newShelf)

            console.log(response)

            await retrieveBooks(currentUser)

            onChangeText("Enter Shelf Name")
    
            props.setDialogueOpen(false)
        }
        catch (error) {

            console.error(error)

        }
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
                onPress={ addNewShelf }
                disabled={ shelfStatus === 'loading' }>
                <Text style={ globalStyles.buttonText }>Add Shelf</Text>
            </TouchableOpacity>

            <CloseButton close={ close } />
        </View>
    );
};

export default NewShelfDialogue;