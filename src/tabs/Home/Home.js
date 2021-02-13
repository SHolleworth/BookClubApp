import React from 'react';
import {View} from 'react-native';
import styles from './styles'

import ToShelvesButton from '../../components/ToShelvesButton'
import { useSelector } from 'react-redux';
import StartClubButton from '../../components/StartClubButton/StartClubButton';

const home = (props) => {

    const width = useSelector(state => state.ui.tabWidth)

    return (
        <View style={[styles.background, { width }]}>
            <ToShelvesButton />
            <StartClubButton />
        </View>
    );
};

export default home;