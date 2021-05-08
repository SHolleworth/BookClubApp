import React from 'react';
import { Image, Text, View} from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { openDeleteShelfDialogue } from '../../state/uiSlice';
import { globalStyles } from '../../constants';

const placeholderOpacities = [0.8, 0.6, 0.4, 0.2, 0.1, 0.0]

const ShelfRenderer = (props) => {

    const placeholder = require('../../assets/images/2x/bookShadow.png')

    const shelf = props.shelf

    const dispatch = useDispatch()

    const booksInShelf = useSelector(state => state.books.filter(book => book.shelfId == shelf.id)) 
    
    const createShelfItem = (book, id) => {
        return (

                <TouchableHighlight style={ globalStyles.bookContainer } key={ id } onPress={() => handlePressOnBook(book) }> 

                        <Image key={ id } style={ globalStyles.book } source={{ uri: book.info.thumbnail }}/>

                </TouchableHighlight>

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

    if(shelf) {
        return (
            <View style={ styles.background }>
    
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    
                    <View style={ styles.headerBackground }>
    
                        <Text style={ styles.name }>{ shelf.name }</Text>
    
                        <TouchableOpacity onPress={ openDeleteDialogue }>
    
                            <Text style={{ color: 'blue', marginRight: 20 }}>remove</Text>
                            
                        </TouchableOpacity>
    
                    </View>
    
                </View>
    
                    <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
    
                        <View style={ styles.shelfContent }>{ bookComponents }</View>
    
                    </ScrollView>
    
            </View>
        );
    }
    else {
        return null
    }
    
};

export default ShelfRenderer;