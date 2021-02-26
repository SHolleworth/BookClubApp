import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import MeetingDetails from '../../components/MeetingDetails/MeetingDetails';
import SetupMeetingButton from '../../components/SetupMeetingButton/SetupMeetingButton';
import { getTabWidth } from '../../state/uiSlice';
import styles from './styles'

const HomeTab = () => {

    const width = useSelector(getTabWidth)

    const activeMeeting = useSelector(state => state.clubs.meeting.active)

    return (
        <View style={[ styles.background, { width } ]}>

            { activeMeeting ? <MeetingDetails /> : <SetupMeetingButton /> }

        </View>
    );
};

export default HomeTab;