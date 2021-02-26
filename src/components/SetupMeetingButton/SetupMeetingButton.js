import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { globalStyles, colors } from '../../constants';
import { closeClubWindow, openMeetingBookWindow } from '../../state/uiSlice';
import styles from './styles'

const SetupMeetingButton = () => {

    const dispatch = useDispatch()

    const openBookWindow = () => {

        dispatch(openMeetingBookWindow())
        
    }

    return (
        <TouchableOpacity 
        style={styles.background}
        onPress={ openBookWindow }>

            <Text style={[ globalStyles.h1, styles.text ]}>Setup a meeting</Text>

            <View style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 1, borderColor: colors.lightColor }}/>

        </TouchableOpacity>
    );

};

export default SetupMeetingButton;