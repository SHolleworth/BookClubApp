import React from 'react';
import {View} from 'react-native';
import styles from './styles'

import ToShelvesButton from '../../components/ToShelvesButton'

const home = (props) => {
    return (
        <View style={[styles.background, {width: props.width}]}>
            <ToShelvesButton />
        </View>
    );
};

export default home;