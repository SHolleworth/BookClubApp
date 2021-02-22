import React from 'react';
import {Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import ClubInvite from '../ClubInvite/ClubInvite';
import styles from './styles'

const InviteList = () => {

    const invites = useSelector(state => state.clubs.invites)

    const inviteNames = invites.map((invite, ind) => <ClubInvite key={ind} invite={invite}/>)

    if(invites) {

        return (

            <View>

                { inviteNames }

            </View>

        );

    }
    else {

        return null

    }
};

export default InviteList;