import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import { useSelector } from 'react-redux';

import ShelvesPanel from '../../components/ShelvesPanel'
import ClubPanel from '../../components/ClubPanel'
import StartClubButton from '../../components/StartClubButton/StartClubButton';

const home = (props) => {

    const width = useSelector(state => state.ui.tabWidth)

    return (
        <View style={[styles.background, { width }]}>
            <ShelvesPanel />
    
            <StartClubButton />
        </View>
    );
};

export default home;