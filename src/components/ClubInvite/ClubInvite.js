import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../state/userSlice'
import { postClubMember, retrieveClubs, retrieveInvites, deleteInvite } from '../../handlers/socketHandler'
import { globalStyles } from '../../constants';

const ClubInvite = ({ invite }) => {

    const cross = require('../../assets/images/2x/cross.png')

    const { club, inviter } = invite

    const currentUser = useSelector(getCurrentUser)

    const accept = async () => {
        
        try {

            const memberData = { clubId: club.id, userId: currentUser.id }

            const payload = { inviteId: invite.inviteId, memberData }

            const message = await postClubMember(payload)

            await retrieveInvites(currentUser)

            await retrieveClubs(currentUser)

            console.log(message)

        }
        catch (error) {

            console.error(error)

        }

    }

    const reject = async () => {
        
        try {

            const message = await deleteInvite(invite)

            console.log(message)

            await retrieveInvites(currentUser)

        }
        catch (error) {

            console.error(error)

        }

    }
    
    return (

        <View style={ styles.background }>
            <View style={[ globalStyles.smallProfilePlaceholder, { height: 50, width: 50 } ]} />

            <View style={ styles.textContainer }>

                <Text style={ globalStyles.h3 }>Invited to</Text>

                <Text style={[ globalStyles.h3, { color: 'black', fontFamily: 'NotoSans-Bold' } ]}>{ club.name }</Text>

            </View>

            <View style={{flex:1}} />

            <TouchableOpacity 
            style={ styles.acceptButton }
            onPress={ accept }>

                <Text style={[ globalStyles.buttonText, { fontSize: 14 } ]}>Accept</Text>

            </TouchableOpacity>


            <TouchableOpacity 
            style={ styles.rejectButton }
            onPress={ reject }>


                <Image style={{ height: 50, width: 50 }} source={ cross } />

            </TouchableOpacity>
            
        </View>

    );
};

export default ClubInvite;