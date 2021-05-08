import React from 'react';
import { View} from 'react-native';
import ClubInvite from '../ClubInvite/ClubInvite';
import { useSelector } from 'react-redux';

const InviteList = () => {

    const invites = useSelector(state => state.clubs.invites)

    const inviteNames = invites.map((invite, ind) => <ClubInvite key={ind} invite={invite}/>)

    if(invites) {

        return (

            <View style={{ marginTop: 90 }}>

                { inviteNames }

            </View>

        );

    }
    else {

        return null

    }
};

export default InviteList;