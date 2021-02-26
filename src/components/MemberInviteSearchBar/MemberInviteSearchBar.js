import React, { useState, useEffect } from 'react';
import { View, Keyboard, useColorScheme } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { sendClubInvite } from '../../handlers/socketHandler';
import { getClubById } from '../../state/clubsSlice';

const MemberInviteSearchBar = () => {
    
    const width = useSelector(state => state.ui.tabWidth)

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

                    <View style={ styles.button }></View>

                </TouchableOpacity>

            </View>

        </View>
    );
};

export default MemberInviteSearchBar;