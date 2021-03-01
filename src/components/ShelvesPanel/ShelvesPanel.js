import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux'
import { updateTab } from '../../state/navSlice';
import styles from './styles'

const ShelvesPanel = () => {
    const book = require('../../assets/images/2x/book.png')

    const dispatch = useDispatch()

    const handlePress = () => {

        dispatch(updateTab(1))
        
    }

    return (
        <TouchableOpacity style={ styles.touchable } onPress={handlePress}>

            <View style={ styles.background }>

                <Image source={ book } style={ styles.image }/>

                <View style= {styles.textBackground }>

                    <Text style={ styles.text }>Book Shelves</Text>

                </View>

            </View>

        </TouchableOpacity>
    );
};

export default ShelvesPanel;