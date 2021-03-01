import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '../CloseButton';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteMeetingDialogue } from '../../state/uiSlice';
import { deleteMeeting } from '../../handlers/socketHandler'
import { globalStyles } from '../../constants';

const DeleteMeetingDialogue = () => {

    const meeting = useSelector(state => state.ui.meetingForDeletion)

    const headerText = `Delete meeting?`

    const dispatch = useDispatch()

    const close = () => {
        dispatch(closeDeleteMeetingDialogue())
    }

    const cancelMeeting = async () => {

        try {

            const message = await deleteMeeting(meeting)

            console.log(message)

            dispatch(closeDeleteMeetingDialogue())

        }
        catch (error) {

            console.error(error)

        }
  
    }

    return (
        <View style={[ globalStyles.dialogueBackground, styles.background ]}>

            <Text style={[ globalStyles.dialogueHeader, styles.header ]}>{ headerText }</Text>
            
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ close }
                >

                    <Text style={ globalStyles.buttonText }>Cancel</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ cancelMeeting }
                >

                    <Text style={ globalStyles.buttonText }>Okay</Text>

                </TouchableOpacity>

            </View>

            <CloseButton close={ close } />

        </View>
    );
};

export default DeleteMeetingDialogue;