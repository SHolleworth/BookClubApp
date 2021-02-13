import React, { useEffect } from 'react';
import { Text, useWindowDimensions, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { closeBookDetailWindow, openAddBookDialogue } from '../../state/uiSlice';
import { globalStyles } from '../../constants';
import styles from './styles'
import BackButton from '../../components/BackButton';

const BookDetailWindow = () => {
    const dispatch = useDispatch()

    const height = useWindowDimensions().height
    const width = useWindowDimensions().width

    const book = useSelector(state => state.ui.bookForDetailWindow)

    const bookInCollection = useSelector(state => state.books.find(ownedBook => ownedBook.volumeId === book.volumeId))

    let { id, title, authors, mainCategory, description, publisher, publishedDate, thumbnail } = book.info

    let authorsString = ""
  
    if(authors) {

        console.log(authors)

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

    //if(title.length > 40) title = title.slice(0, 40) + "..."

    const thumbnailDimensions = { width: 130, height: 200 }

    const publishedBlock = `Published ${publishedDate} by ${publisher}.`

    const openDialogue = () => {
        dispatch(openAddBookDialogue(book))
    }

    const close = () => {
        
        dispatch(closeBookDetailWindow())

    }

    return (
        <View style={[ styles.background, { height, width }]}>
            <BackButton function={ close }/>
            <ScrollView>
                <View style={{ flexDirection: 'row', height: thumbnailDimensions.height + 20}}>
                    <Image
                        style={{ height: thumbnailDimensions.height, width: thumbnailDimensions.width }}
                        source={{ uri: thumbnail }} />
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text style={ styles.title }>{title}</Text>
                        <Text style={ styles.authors }>{authorsString}</Text>
                        <Text style={ styles.mainCategory }>{mainCategory}</Text>
                        <Text style={ styles.publishedBlock }>{publishedBlock}</Text>
                    </View>
                </View>
                {bookInCollection ?
                    null :
                    <TouchableOpacity onPress={ openDialogue }>
                        <View style={[ globalStyles.button, { width: 200, marginBottom: 20, } ]}>
                            <Text style={ globalStyles.buttonText }>Add to Collection</Text>
                        </View>
                    </TouchableOpacity>
                }
                <Text style={ styles.description }>{description}</Text>
            </ScrollView>
        </View>
    );
};

export default BookDetailWindow;