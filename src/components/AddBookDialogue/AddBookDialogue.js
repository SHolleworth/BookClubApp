import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux';
import { closeAddBookDialogue } from '../../state/uiSlice';
import { globalStyles } from '../../constants';
import CloseButton from '../CloseButton';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addBook } from '../../state/booksSlice';
import { getShelves } from '../../state/shelvesSlice';
import { postNewBook } from '../../handlers/socketHandler';

const AddBookDialogue = () => {

    const [shelfId, setShelfId] = useState('') 

    const showing = useSelector(state => state.ui.showingAddBookDialogue)

    const shelves = useSelector(getShelves)

    const book = {...useSelector(state => state.ui.bookForAddBookDialogue)}

    const dispatch = useDispatch()

    const close = () => {
        dispatch(closeAddBookDialogue())
    }

    const addNewBook = async () => {
        try {
            book.shelf_id = shelfId

            const response = await postNewBook(book)

            dispatch(addBook(book))

            dispatch(closeAddBookDialogue())

        }
        catch (error) {
            console.error(error)
        }
  
    }

    const updateShelfId = (value) => {
        setShelfId(value)
        console.log("Shelf id: " + value)
    }

    const pickerItems = shelves.map((shelf, i) => <Picker.Item key={ i } label={ shelf.name } value={ shelf.id } /> )

    if (showing) {
        return (
            <View style={[ globalStyles.dialogueBackground, styles.background ]}>
                <Text style={ globalStyles.dialogueHeader }>Add To Shelf</Text>
                <Picker
                    selectedValue={ shelfId }
                    onValueChange={ value => updateShelfId(value) }
                >
                    {pickerItems}
                </Picker>
                <TouchableOpacity 
                    style={[ globalStyles.button, styles.button ]}
                    onPress={ addNewBook }
                >
                    <Text style={ globalStyles.buttonText }>Okay</Text>
                </TouchableOpacity>
                <CloseButton close={ close } />
            </View>
        );
    }
    else {
        return null
    }
};

export default AddBookDialogue;