import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import StartClubButton from '../../components/StartClubButton/StartClubButton'
import styles from './styles'

const Clubs = () => {

    const width = useSelector(state => state.ui.tabWidth)

    return (
        <View style={[ styles.background, { width } ]}>

            <StartClubButton />

        </View>
    );
};

export default Clubs;