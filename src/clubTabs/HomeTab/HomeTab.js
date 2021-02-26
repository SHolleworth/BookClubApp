import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import MeetingDetails from '../../components/MeetingDetails/MeetingDetails';
import SetupMeetingButton from '../../components/SetupMeetingButton/SetupMeetingButton';
import { getTabWidth } from '../../state/uiSlice';
import { getMeeting } from '../../state/clubsSlice'
import styles from './styles'

const HomeTab = () => {

    const width = useSelector(getTabWidth)

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    console.log(clubId)

    const meeting = useSelector(state => getMeeting(state, clubId))

    console.log(meeting)

    return (
        <View style={[ styles.background, { width } ]}>

            { meeting.id ? <MeetingDetails /> : <SetupMeetingButton /> }

        </View>
    );
};

export default HomeTab;