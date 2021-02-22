import React from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getClubs } from '../../state/clubsSlice';
import ClubPanel from '../ClubPanel';
import styles from './styles'

const ClubsList = () => {

    const clubs = useSelector(getClubs)

    let clubPanels = null

    if(clubs.length) {

        clubPanels = clubs.map(club => <ClubPanel key={ club.id } club={ club } />)

    }

    if(clubs.length) {

        return (

            <ScrollView>
                {clubPanels}
            </ScrollView>
    
        );     

    }
    else {

        return null

    }

};

export default ClubsList;