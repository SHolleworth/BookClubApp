import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View, Keyboard } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '../CloseButton';
import SearchResult from '../SearchResult/';
import { formatGoogleBooksVolumeData } from '../../objects/Book';
import styles from './styles'
import { useSelector } from 'react-redux';
import { sendVolumeQuery } from '../../handlers/socketHandler';

const SearchBar = (props) => {

    const width = useSelector(state => state.ui.tabWidth)

    const defaultStyle = { width: width - 40, left: width + 20, top: useWindowDimensions().height - 200, height: 70 }

    const contentShowingStyle = { ...defaultStyle, height: 500, top: defaultStyle.top - 500 + defaultStyle.height, alignItems: 'flex-end' }

    const searchIcon = require('../../assets/images/2x/search.png')

    const [value, onChangeText] = useState("")

    const [style, setStyle] = useState(defaultStyle)

    const [showingResults, setShowingResults] = useState(false)

    const [results, setResults] = useState([])



    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {

            Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide)

        }
    },[])



    const keyboardDidShow = (event) => {
        const newStyle = {...defaultStyle, top: defaultStyle.top - event.endCoordinates.height}
        setStyle(newStyle)
        setShowingResults(false)
    }



    const keyboardDidHide = (event) => {
        const newStyle = {...defaultStyle, top: defaultStyle.top + event.endCoordinates.height}
        setStyle(newStyle)
    }



    const search = async () => {
        try {
            const response = await sendVolumeQuery(value)

            displayResults(response)
        }
        catch (error) {

            console.error(error)

        }
    }



    const displayResults = (response) => {

        const books = (response.map(item => formatGoogleBooksVolumeData(item)))

        books.forEach(el => {console.log(el.info.thumbnail)} )

        setResults(books.map((book, index) => <SearchResult key={ index } id={ index } book={ book } />))

        setStyle(contentShowingStyle)

        setShowingResults(true)

    }

    

    const hideResults = () => {

        setStyle(defaultStyle)

        setShowingResults(false)

    }



    return (
        <View style={[ styles.background, style]}>

            {showingResults ?

                <View style={ styles.scrollView }>

                    <ScrollView contentContainerStyle={ styles.resultsContainer }>

                        {results}

                    </ScrollView>

                </View>
            : 
                null
            }

            <View style={ styles.inputContainer }>

                <TextInput 
                style={ styles.textInput }
                placeholder={ "Search by title" }
                onChangeText={ text => onChangeText(text) } />

                <TouchableOpacity
                style={ styles.button }
                onPress={ search }>

                    <Image style={{ height: 30, width: 30 }} source={ searchIcon }/>

                </TouchableOpacity>

            </View>

            {showingResults ?

                <CloseButton close={ hideResults } />
            :
                null

            } 
        </View>
    );
};

export default SearchBar;