import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../constants';
import { openClubNamingWindow } from '../../state/uiSlice';
import styles from './styles'

const StartClubButton = () => {

    const message = "You're not a member of any clubs yet."

    const dispatch = useDispatch()

    const exisitingClubs = useSelector(state => state.clubs.length)

    return (
        <View style={ styles.background }>

            { !exisitingClubs ? 
            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={ styles.message }> { message } </Text>
            </View>
            : null }

            
            <View style={{ flex: 3, width: '100%' }}>
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={ () => { dispatch(openClubNamingWindow()) }}
                >

                    <Text style={ styles.buttonText }>Start a club</Text>

                    <View style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2, borderColor: colors.lightColor }}/>

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default StartClubButton;