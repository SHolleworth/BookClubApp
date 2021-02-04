import React from 'react';
import {View} from 'react-native';
import styles from './styles'

import ToShelvesButton from '../../components/ToShelvesButton'
import { useSelector } from 'react-redux';

const home = (props) => {

    const width = useSelector(state => state.ui.tabWidth)

    return (
        <View style={[styles.background, { width }]}>
            <ToShelvesButton />
        </View>
    );
};

export default home;