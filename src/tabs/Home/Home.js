import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import ShelvesPanel from '../../components/ShelvesPanel'
import ClubPanel from '../../components/ClubPanel'
import StartClubButton from '../../components/StartClubButton/StartClubButton';
import { useSelector } from 'react-redux';
import { getClubs } from '../../state/clubsSlice';
import ShelfRenderer from '../../components/ShelfRenderer/ShelfRenderer';
import { getShelves } from '../../state/shelvesSlice';
import { ScrollView } from 'react-native-gesture-handler';

const home = () => {

    const width = useSelector(state => state.ui.tabWidth)

    const exisitingClubs = useSelector(getClubs)

    const shelves = useSelector(getShelves)

    let shelf = undefined

    if(shelves[0]) {

        shelf = shelves[0]

    }

    return (
        <ScrollView style={[styles.background, { width }]} >

            <ShelvesPanel />

            { exisitingClubs.length ? <ClubPanel club={ exisitingClubs[exisitingClubs.length - 1] } /> : <StartClubButton /> }

            { shelf ? <ShelfRenderer shelf={shelf} /> : null }
            
        </ScrollView>
    );
};

export default home;