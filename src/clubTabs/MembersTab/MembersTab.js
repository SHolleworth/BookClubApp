import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MemberInviteSearchBar from '../../components/MemberInviteSearchBar/MemberInviteSearchBar';
import { globalStyles } from '../../constants';
import { getClubById } from '../../state/clubsSlice';
import styles from './styles'

const MembersTab = () => {

    const width = useSelector(state => state.ui.tabWidth)

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const club = useSelector(state => getClubById(state, clubId))

    const members = club ? club.members : []

    const memberEntries = members.map((member, ind) => <MemberEntry key={ ind } member={ member } />)

    return (
        <>
        <View style={[ globalStyles.clubTabBackground, { width } ]}>

            <MemberInviteSearchBar />

            { memberEntries }

        </View>
        </>
    );
};

const MemberEntry = ({ member }) => {

    const { user, admin } = member ? member : undefined

    const { username } = user ? user : "No username found"

    const adminLabel = "(admin)"

    return(

        <View style={ styles.memberEntry }>

            <View style={[ globalStyles.smallProfilePlaceholder, { marginRight: 20 } ]} />

            <Text style={ styles.entryText }>{ username }</Text>

            { admin ? <Text style={ styles.entryAdminText }>{ adminLabel }</Text> : null }

        </View>
    )
    
}

export default MembersTab;