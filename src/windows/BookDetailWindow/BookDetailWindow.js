import React, { useEffect } from 'react';
import { Text, useWindowDimensions, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { closeBookDetailWindow, openAddBookDialogue, openDeleteBookDialogue } from '../../state/uiSlice';
import { colors, globalStyles } from '../../constants';

const BookDetailWindow = () => {
    const dispatch = useDispatch()

    const height = useWindowDimensions().height

    const width = useWindowDimensions().width

    const book = useSelector(state => state.ui.bookForDetailWindow)

    const volumeId = book ? book.volumeId : null 

    const bookInCollection = useSelector(state => state.books.find(ownedBook => ownedBook.volumeId === volumeId))

    const emptyBook = { 
        title: '', 
        authors: [], 
        mainCategory: '', 
        description: '', 
        publisher: '', 
        publishedDate: '', 
        thumbnail: '' 
    }

    let { title, authors, mainCategory, description, publisher, publishedDate, thumbnail } = book ? book.info : emptyBook

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

    const thumbnailDimensions = { width: 130, height: 200 }

    const publishedBlock = `Published ${publishedDate} by ${publisher}.`

    const openAddDialogue = () => {

        dispatch(openAddBookDialogue(book))

    }



    const openDeleteDialogue = () => {

        dispatch(openDeleteBookDialogue())

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

                    <TouchableOpacity onPress={ openDeleteDialogue }>

                        <View style={[ globalStyles.button, { width: 230, marginBottom: 20, backgroundColor: colors.redButton } ]}>

                            <Text style={ globalStyles.buttonText }>Remove from collection</Text>

                        </View>

                    </TouchableOpacity> 

                :
                    <TouchableOpacity onPress={ openAddDialogue }>

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