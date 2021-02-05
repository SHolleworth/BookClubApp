import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import styles from './styles'

import { openAddBookDialogue, openBookDetailWindow } from '../../state/uiSlice'

const SearchResult = ({ book }) => {

    let { title, authors, mainCategory, thumbnail } = book.info

    const thumbnailDimensions = {width: 55, height: 90}

    if(title.length > 40) title = title.slice(0, 40) + "..." 
    
    // Image.getSize(thumbnail, (width, height) => {
    //     thumbnailDimensions.width = width
    //     thumbnailDimensions.height = height
    // })

    const dispatch = useDispatch()

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
                        <Text style={ styles.authors }>{authors}</Text>
                        <Text style={ styles.genres }>{mainCategory}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[  styles.addButton ]}
                onPress={addBookToStore}>
            </TouchableOpacity>
        </View>
    );
};

export default SearchResult;