import React, { useState } from 'react';
import {Image, KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

import ShelfRenderer from '../../components/ShelfRenderer'
import NewShelfDialogue from '../../components/NewShelfDialogue'
import SearchBar from '../../components/SearchBar'

import { globalStyles } from '../../constants'
import { getShelves } from '../../state/shelvesSlice';
import ShelvesList from '../../components/ShelvesList/ShelvesList';
import { openBookDetailWindow } from '../../state/uiSlice';

const Shelves = (props) => {
    const plus = require('../../assets/images/2x/plus.png')

    const [dialogueOpen, setDialogueOpen] = useState(false)

    const width = useSelector(state => state.ui.tabWidth)

    const dispatch = useDispatch()

    const openDialogue = () => {
        console.log("Pressed")
        setDialogueOpen(true)
    }

    const openBookDetail = (book) => {
        
        dispatch(openBookDetailWindow(book))

    }



    return (
        <>
            <View 
            style={[ styles.background, { width } ]}
            showsVerticalScrollIndicator={ false }>

                <TouchableOpacity
                style={[ globalStyles.button, styles.newShelfButton ]}
                onPress={ openDialogue } >

                    <Text style={ globalStyles.buttonText }>New Shelf</Text>

                    <Image style={ styles.newShelfButtonImage } source={ plus }/>

                </TouchableOpacity>

                <ShelvesList contentContainerStyle={{ paddingTop: 90 }} bookTouchableFunction={ openBookDetail }/>

            </View>

            { dialogueOpen ? <NewShelfDialogue setDialogueOpen={setDialogueOpen}/> : null }

            <SearchBar />
        </>
    );
};

export default Shelves;