import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '../CloseButton';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { closeAddBookDialogue } from '../../state/uiSlice';
import { addBook } from '../../state/booksSlice';
import { getShelves } from '../../state/shelvesSlice';
import { postNewBook, retrieveBooks } from '../../handlers/socketHandler';
import { globalStyles } from '../../constants';
import { getCurrentUser } from '../../state/userSlice';

const AddBookDialogue = () => {

    const [shelfId, setShelfId] = useState(-99) 

    const shelves = useSelector(getShelves)

    const book = {...useSelector(state => state.ui.bookForAddBookDialogue)}

    const currentUser = useSelector(getCurrentUser)

    const dispatch = useDispatch()

    const close = () => {
        dispatch(closeAddBookDialogue())
    }

    const addNewBook = async () => {

        if(shelfId !== -99) {

            try {
                book.shelfId = shelfId
                
                const response = await postNewBook(book)

                await retrieveBooks(currentUser)

                dispatch(closeAddBookDialogue())

            }
            catch (error) {
                console.error(error)
            }

        }
  
    }

    const updateShelfId = (value) => {

        setShelfId(value)

        console.log("Shelf id: " + value)

    }

    const pickerItems = shelves.map((shelf, i) => <Picker.Item key={ i } label={ shelf.name } value={ shelf.id } /> )

    return (
        <View style={[ globalStyles.dialogueBackground, styles.background ]}>

            <Text style={ globalStyles.dialogueHeader }>Add To Shelf</Text>

            <Picker
            selectedValue={ shelfId }
            onValueChange={ value => updateShelfId(value) }>

                <Picker.Item label={ "Select a shelf" } value={ -99 }/>

                {pickerItems}

            </Picker>

            <TouchableOpacity 
            style={[ globalStyles.button, styles.button ]}
            onPress={ addNewBook }>

                <Text style={ globalStyles.buttonText }>Okay</Text>

            </TouchableOpacity>

            <CloseButton close={ close } />
            
        </View>
    );
};

export default AddBookDialogue;