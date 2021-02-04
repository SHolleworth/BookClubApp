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

const Shelves = (props) => {
    const plus = require('../../assets/images/2x/plus.png')

    const [dialogueOpen, setDialogueOpen] = useState(false)

    const width = useSelector(state => state.ui.tabWidth)

    const shelves = useSelector(state => state.shelves)

    const openDialogue = () => {
        setDialogueOpen(true)
    }

    const shelvesToRender = shelves.map(shelf => (
        <ShelfRenderer key={ shelf.id } shelf={ shelf }/>
    ))

    return (
        <>
            <ScrollView 
                style={[ styles.background, { width } ]}
                showsVerticalScrollIndicator={ false }
            >

                <TouchableOpacity
                    style={[ globalStyles.button, styles.newShelfButton ]}
                    onPress={ openDialogue }
                >

                    <Text style={ globalStyles.buttonText }>New Shelf</Text>

                    <Image style={ styles.newShelfButtonImage } source={ plus }/>

                </TouchableOpacity>

                <View style={ styles.shelvesContainer }>

                    { shelvesToRender }

                </View> 

            </ScrollView>

            { dialogueOpen ? <NewShelfDialogue setDialogueOpen={setDialogueOpen}/> : null }

            <SearchBar />
        </>
    );
};

export default Shelves;