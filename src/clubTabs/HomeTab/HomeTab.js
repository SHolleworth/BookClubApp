import React from 'react'
import { View } from 'react-native'
import MeetingDetails from '../../components/MeetingDetails/MeetingDetails'
import SetupMeetingButton from '../../components/SetupMeetingButton/SetupMeetingButton'
import styles from './styles'
import { useSelector } from 'react-redux'
import { getTabWidth } from '../../state/uiSlice'
import { getMeeting } from '../../state/clubsSlice'

const HomeTab = () => {

    const width = useSelector(getTabWidth)

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const meeting = useSelector(state => getMeeting(state, clubId))

    return (
        <View style={[ styles.clubTabBackground, { width } ]}>

            { meeting.id ? <MeetingDetails /> : <SetupMeetingButton /> }

        </View>
    );
};

export default HomeTab;