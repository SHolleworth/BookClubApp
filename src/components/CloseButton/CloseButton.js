import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { useSelector } from 'react-redux';

const CloseButton = (props) => {
    const cross = require('../../assets/images/2x/cross.png')

    const width = useSelector(state => state.ui.tabWidth)

    return (
        <View style={[ styles.cross, { left: width - 70 } ]}>
            <TouchableOpacity
                style={{ minHeight: 40 }}
                onPress={ () => props.close() }>
                <Image style={{ height: 40, width: 40 }} source={cross} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cross: {
        position: 'absolute',
        top: -10, right: 0, bottom: 0, left: 0,
        height: 40,
        width: 40,
    },
})

export default CloseButton;