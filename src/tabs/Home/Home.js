import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';

import ShelvesPanel from '../../components/ShelvesPanel'
import ClubPanel from '../../components/ClubPanel'
import StartClubButton from '../../components/StartClubButton/StartClubButton';
import { getClubs } from '../../state/clubsSlice';

const home = (props) => {

    const width = useSelector(state => state.ui.tabWidth)

    const clubs = useSelector(getClubs)

    return (
        <View style={[styles.background, { width }]}>

            <ShelvesPanel />

            {clubs.length ? <ClubPanel club={ clubs[0] } /> : null}
    
            <StartClubButton />

        </View>
    );
};

export default home;