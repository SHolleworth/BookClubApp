import React from 'react';
import {Image, Text, Touchable, View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { openBookDetailWindow } from '../../state/uiSlice';
import styles from './styles'

const placeholderOpacities = [0.5, 0.4, 0.3, 0.2, 0.1, 0.0]

const ShelfRenderer = (props) => {
    const placeholder = require('../../assets/images/2x/bookShadow.png')

    const shelf = props.shelf

    const booksInShelf = useSelector(state => state.books.filter(book => book.shelf_id == shelf.id)) 

    const dispatch = useDispatch()

    const createShelfItem = (book, id) => {
        return (
            <TouchableOpacity key={ id } onPress={() => dispatch(openBookDetailWindow(book))}> 
                <View key={ id } style={ styles.bookContainer }>
                    <Image key={ id } style={ styles.book } source={{ uri: book.info.thumbnail }}/>
                </View>
            </TouchableOpacity>
        )
    }
    
    const bookComponents = booksInShelf.length > 0 ?
        booksInShelf.map((book, i) => createShelfItem(book, i))
        : 
        placeholderOpacities.map((opacity, i) => <Image key={ i } style={[ styles.placeholder, { opacity } ]} source={ placeholder } />)
        

    return (
        <View style={ styles.background }>
            <Text style={ styles.name }>{ shelf.name }</Text>
                <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
                    <View style={ styles.shelfContent }>{ bookComponents }</View>
                </ScrollView>
        </View>
    );
};

export default ShelfRenderer;