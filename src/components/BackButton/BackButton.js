import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles'

const BackButton = (props) => {

    return (
        <View style={[ styles.container, props.style ]}>
            
            <TouchableOpacity onPress={ props.function }>

                <View style={ styles.backButton }/>

            </TouchableOpacity>

        </View>
    );
};

export default BackButton;