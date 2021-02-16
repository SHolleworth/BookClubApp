import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../../constants';
import styles from './styles'

const MembersTab = () => {

    const width = useSelector(state => state.ui.tabWidth)

    const club = useSelector(state => state.ui.dataForClubWindow)

    const members = club ? club.members : []

    const memberEntries = members.map(member => <MemberEntry member={member} />)

    return (
        <View style={[ globalStyles.clubTabBackground, { width } ]}>

            {memberEntries}

        </View>
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

            {admin ? <Text style={ styles.entryAdminText }>{ adminLabel }</Text> : null }

        </View>
    )
    
}

export default MembersTab;