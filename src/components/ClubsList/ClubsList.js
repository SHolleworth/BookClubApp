import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ClubPanel from '../ClubPanel';
import { useSelector } from 'react-redux';
import { getClubs } from '../../state/clubsSlice';

const ClubsList = () => {

    const clubs = useSelector(getClubs)

    let clubPanels = null

    if(clubs.length) {

        clubPanels = clubs.map(club => <ClubPanel key={ club.id } club={ club } />)

    }

    if(clubs.length) {

        return (

            <ScrollView contentContainerStyle={{ paddingTop: 90 }}>

                {clubPanels}

            </ScrollView>
    
        );     

    }
    else {

        return null

    }

};

export default ClubsList;