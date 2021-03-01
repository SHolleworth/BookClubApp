import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '../CloseButton';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { closeBookDetailWindow, closeDeleteBookDialogue } from '../../state/uiSlice'
import { deleteBook } from '../../handlers/socketHandler';
import { globalStyles } from '../../constants';

const DeleteBookDialogue = () => {

    const book = useSelector(state => state.ui.bookForDetailWindow)

    const headerText = `Delete ${book ? book.info.title : ''} from collection?`

    const dispatch = useDispatch()

    const close = () => {

        dispatch(closeDeleteBookDialogue())

    }

    const removeBook = async () => {

        try {

            const message = await deleteBook(book)

            console.log(message)

            dispatch(closeBookDetailWindow())

            dispatch(closeDeleteBookDialogue())

        }
        catch (error) {

            console.error(error)

        }
  
    }

    return (
        <View style={[ globalStyles.dialogueBackground, styles.background ]}>

            <Text style={[ globalStyles.dialogueHeader, styles.header ]}>{ headerText }</Text>
            
            <View style={{ flexDirection: 'row' }}>
                
                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ close }
                >

                    <Text style={ globalStyles.buttonText }>Cancel</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ removeBook }
                >

                    <Text style={ globalStyles.buttonText }>Okay</Text>

                </TouchableOpacity>

            </View>

            <CloseButton close={ close } />

        </View>
    );
};

export default DeleteBookDialogue;