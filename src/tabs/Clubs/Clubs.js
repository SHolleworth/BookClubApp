import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import InviteList from '../../components/InviteList/InviteList'
import ClubsList from '../../components/ClubsList/ClubsList'
import StartClubButton from '../../components/StartClubButton/StartClubButton'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { openClubNamingWindow } from '../../state/uiSlice'
import { getClubs } from '../../state/clubsSlice'
import { globalStyles } from '../../constants'

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

            

            <ClubsList />

           { exisitingClubs.length ? 
                <TouchableOpacity
                style={[ globalStyles.button, styles.newShelfButton ]}
                onPress={ handlePress }>

                    <Text style={ globalStyles.buttonText }>New Club</Text>

                    <Image style={ styles.newShelfButtonImage } source={ plus }/>

                </TouchableOpacity> 
            : 
                <StartClubButton /> 
            }

        </View>
    );
};

export default Clubs;