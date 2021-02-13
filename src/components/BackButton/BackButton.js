import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles'

const BackButton = (props) => {

    return (
        <TouchableOpacity onPress={ props.function }>

            <View style={ styles.backButton }/>

        </TouchableOpacity>
    );
};

export default BackButton;