import React from 'react';
import {Image, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'

const placeholderOpacities = [0.5, 0.4, 0.3, 0.2, 0.1, 0.0]

const ShelfRenderer = (props) => {
    const placeholder = require('../../assets/images/2x/bookShadow.png')

    const shelf = props.shelf

    const books = shelf.books.length > 0 ?
        shelf.books.map(book => <Image key={book.id} style={styles.book} source={book.image}/>)
    : 
      placeholderOpacities.map((opacity, i) => <Image key={i} style={[ styles.placeholder, {opacity: opacity} ]} source={placeholder} />)

    return (
        <View style={styles.background}>
            <Text style={styles.name}>{shelf.info.name}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.shelfContent}>{books}</View>
                </ScrollView>
        </View>
    );
};

export default ShelfRenderer;