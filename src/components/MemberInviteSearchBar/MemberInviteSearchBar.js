import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useSelector } from 'react-redux';
import { getClubById } from '../../state/clubsSlice';
import { sendClubInvite } from '../../handlers/socketHandler';

const MemberInviteSearchBar = () => {

    const searchIcon = require('../../assets/images/2x/search.png')

    const currentUser = useSelector(state => state.user.currentUser)

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const club = useSelector(state => getClubById(state, clubId))

    const [value, onChangeText] = useState("")


    const invite = async () => {
        try {

            const invite = { invitedUsername: value, inviter: currentUser, club }

            const response = await sendClubInvite(invite)

            console.log(response)
            
        }
        catch (error) {

            console.error(error)

        }
    }


    return (

        <View style={ styles.background }>

            <View style={ styles.inputContainer }>

                <TextInput 
                style={ styles.textInput }
                placeholder={ "Invite by username" }
                onChangeText={ text => onChangeText(text) } />

                <TouchableOpacity
                style={ styles.button }
                onPress={ invite }>

                    <Image style={{ height: 25, width: 25 }} source={ searchIcon }/>

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default MemberInviteSearchBar;