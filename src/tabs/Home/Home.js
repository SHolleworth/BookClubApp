import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import ShelvesPanel from '../../components/ShelvesPanel'
import ClubPanel from '../../components/ClubPanel'
import StartClubButton from '../../components/StartClubButton/StartClubButton';
import { useSelector } from 'react-redux';
import { getClubs } from '../../state/clubsSlice';

const home = () => {

    const width = useSelector(state => state.ui.tabWidth)

    const exisitingClubs = useSelector(getClubs)

    return (
        <View style={[styles.background, { width }]}>

            <ShelvesPanel />

            { exisitingClubs.length ? <ClubPanel club={ exisitingClubs[0] } /> : <StartClubButton /> }
            
        </View>
    );
};

export default home;