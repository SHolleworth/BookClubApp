import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import { globalStyles } from '../../constants';
import { updateTab } from '../../state/navSlice';
import styles from './styles'

const ShelvesPanel = () => {
    const bookIcon = require('../../assets/images/2x/book.png')

    const dispatch = useDispatch()

    const books = useSelector(state => state.books)

    const bookImages = books.map((book, ind) => <View style={ globalStyles.bookContainer } key={ ind }><Image style={ globalStyles.book } source={{ uri: book.info.thumbnail }}/></View>)

    const background = <View style={ styles.backgroundImage }>{ bookImages }</View>

    const handlePress = () => {

        dispatch(updateTab(1))
        
    }

    return (
        <TouchableHighlight style={ styles.touchable } onPress={handlePress}>

            <View style={ styles.background }>

                {background}

                <View style={ styles.overlay } />

                <View style={[ globalStyles.profilePlaceholder, styles.imageBackground ]}>
                    <Image source={ bookIcon } style={ styles.image }/>
                </View>

                <View style= { styles.textBackground }>

                    <Text style={ styles.text }>Book Shelves</Text>

                </View>

            </View>

        </TouchableHighlight>
    );
};

export default ShelvesPanel;