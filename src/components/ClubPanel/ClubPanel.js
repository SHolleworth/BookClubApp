import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { globalStyles } from '../../constants';
import { openClubWindow } from '../../state/uiSlice';
import styles from './styles'

const ClubPanel = ({ club }) => {

    const dispatch = useDispatch()

    const { name } = club.name ? club : undefined

    const flag = require('../../assets/images/2x/flag.png')

    const handlePress = () => {
        
        dispatch(openClubWindow(club))

    }

    return (
        <TouchableOpacity style={ styles.touchable } onPress={ handlePress }>

            <View style={ styles.background }>

                <View style={ styles.top }>

                    <View style={ globalStyles.profilePlaceholder} />

                    <View style={ styles.imageContainer }>
                        <Image style={ styles.image } source={ flag } />
                    </View>

                </View>

                <View style= {styles.textBackground }>

                    <Text style={ styles.text }>{ name }</Text>

                </View>

            </View>

        </TouchableOpacity>
    );
};

export default ClubPanel;