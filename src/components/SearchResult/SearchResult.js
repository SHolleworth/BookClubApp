import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useDispatch } from 'react-redux';
import { openAddBookDialogue, openBookDetailWindow } from '../../state/uiSlice'


const SearchResult = ({ book }) => {

    const dispatch = useDispatch()
    
    let { title, authors, mainCategory, thumbnail } = book.info

    const thumbnailDimensions = { width: 55, height: 90 }

    if(title.length > 40) title = title.slice(0, 40) + "..."

    let authorsString = ""

    if(authors) {

        authorsString = authors[0]

        if (authors.length > 1) {
            authorsString = authors.reduce((acc, cur, ind) => {

                if (ind === authors.length - 1) {
    
                    return `${acc} and ${cur}.`
    
                }
    
                return `${acc}, ${cur}`
            })
        }
    }


    const dispatchBookDetailAction = () => {
        dispatch(openBookDetailWindow(book))
    }


    
    const addBookToStore = () => {
        dispatch(openAddBookDialogue(book))
    }



    return (
        <View style={ styles.background }>

            <TouchableOpacity onPress={ dispatchBookDetailAction }>

                <View style={ styles.detail }>

                    <Image source={{ uri: thumbnail }} style={{ flex:1, width: thumbnailDimensions.width, height: thumbnailDimensions.height }} />

                    <View style={{ flex: 4, marginLeft: 10 }}>

                        <Text style={ styles.title }>{title}</Text>

                        <Text style={ styles.authors }>{authorsString}</Text>

                        <Text style={ styles.genres }>{mainCategory}</Text>

                    </View>

                </View>

            </TouchableOpacity>

            <TouchableOpacity
            style={[  styles.addButton ]}
            onPress={addBookToStore} />

        </View>
    );
};

export default SearchResult;