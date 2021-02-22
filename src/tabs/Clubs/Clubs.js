import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ClubsList from '../../components/ClubsList/ClubsList'
import StartClubButton from '../../components/StartClubButton/StartClubButton'
import styles from './styles'
import { globalStyles } from '../../constants'
import { openClubNamingWindow } from '../../state/uiSlice'
import { getClubs } from '../../state/clubsSlice'
import InviteList from '../../components/InviteList/InviteList'

const Clubs = () => {

    const plus = require('../../assets/images/2x/plus.png')

    const width = useSelector(state => state.ui.tabWidth)

    const exisitingClubs = useSelector(getClubs)

    const dispatch = useDispatch()

    const handlePress = () => {
        
        dispatch(openClubNamingWindow())

    }

    return (
        
        <View style={[ styles.background, { width } ]}>

            <InviteList />

           { exisitingClubs.length ? 
           <TouchableOpacity
            style={[ globalStyles.button, styles.newShelfButton ]}
            onPress={ handlePress }>

                <Text style={ globalStyles.buttonText }>New Club</Text>

                <Image style={ styles.newShelfButtonImage } source={ plus }/>

            </TouchableOpacity> : null }

            <StartClubButton />

            <ClubsList />

        </View>
    );
};

export default Clubs;