import React from 'react';
import {Image, Text, Touchable, View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../../constants';
import { openDeleteShelfDialogue } from '../../state/uiSlice';
import styles from './styles'

const placeholderOpacities = [0.5, 0.4, 0.3, 0.2, 0.1, 0.0]

const ShelfRenderer = (props) => {

    const placeholder = require('../../assets/images/2x/bookShadow.png')

    const shelf = props.shelf

    const dispatch = useDispatch()

    const booksInShelf = useSelector(state => state.books.filter(book => book.shelfId == shelf.id)) 
    
    const createShelfItem = (book, id) => {
        return (
            <TouchableOpacity key={ id } onPress={() => handlePressOnBook(book) }> 

                <View key={ id } style={ globalStyles.bookContainer }>

                    <Image key={ id } style={ globalStyles.book } source={{ uri: book.info.thumbnail }}/>

                </View>

            </TouchableOpacity>
        )
    }


    const bookComponents = booksInShelf.length > 0 ?
    booksInShelf.map((book, i) => createShelfItem(book, i))
    : 
    placeholderOpacities.map((opacity, i) => <Image key={ i } style={[ styles.placeholder, { opacity } ]} source={ placeholder } />)


    const handlePressOnBook = (book) => {
        
        props.bookTouchableFunction(book)

    }

    
    const openDeleteDialogue = () => {

        dispatch(openDeleteShelfDialogue(shelf))
        
    }

    return (
        <View style={ styles.background }>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <Text style={ styles.name }>{ shelf.name }</Text>

                <TouchableOpacity onPress={ openDeleteDialogue }>
                    <Text style={{ color: 'blue', marginRight: 20 }}>remove</Text>
                </TouchableOpacity>

            </View>

                <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>

                    <View style={ styles.shelfContent }>{ bookComponents }</View>

                </ScrollView>

        </View>
    );
};

export default ShelfRenderer;