import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles'

const BackButton = (props) => {

    const back = require('../../assets/images/2x/back.png')

    return (
        <View style={[ styles.container, props.style ]}>
            
            <TouchableOpacity onPress={ props.function }>

                <Image style={{ height: 35, width: 35}} source={ back } />

            </TouchableOpacity>

        </View>
    );
};

export default BackButton;