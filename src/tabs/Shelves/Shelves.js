import React, { useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native'
import NewShelfDialogue from '../../components/NewShelfDialogue'
import SearchBar from '../../components/SearchBar'
import ShelvesList from '../../components/ShelvesList/ShelvesList';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { openBookDetailWindow } from '../../state/uiSlice';
import { globalStyles } from '../../constants'

const Shelves = () => {
    
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

                <ShelvesList contentContainerStyle={{ paddingTop: 90 }} bookTouchableFunction={ openBookDetail }/>

                <TouchableOpacity
                style={[ globalStyles.button, styles.newShelfButton ]}
                onPress={ openDialogue } >

                    <Text style={ globalStyles.buttonText }>New Shelf</Text>

                    <Image style={ styles.newShelfButtonImage } source={ plus }/>

                </TouchableOpacity>

            </View>

            { dialogueOpen ? <NewShelfDialogue setDialogueOpen={setDialogueOpen}/> : null }

            <SearchBar />
        </>
    );
};

export default Shelves;