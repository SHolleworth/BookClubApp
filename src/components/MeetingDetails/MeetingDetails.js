import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getMeeting } from '../../state/clubsSlice';
import { openDeleteMeetingDialogue } from '../../state/uiSlice';

const MeetingDetails = () => {

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const meeting = useSelector(state => getMeeting(state, clubId))

    let title, thumbnail = ''

    const { day, month, year } = meeting.date

    const { minutes, hours } = meeting.time

    let dayString, monthString, minutesString, hoursString = ''

    if (meeting.book) {

        title = meeting.book.info.title

        thumbnail = { uri: meeting.book.info.thumbnail }

    }

    dayString = day < 10 ? '0' + day : day

    monthString = month < 10 ? '0' + month : month

    minutesString = minutes < 10 ? '0' + minutes : minutes

    hoursString = hours < 10 ? '0' + hours : hours

    const dateString = `${dayString}/${monthString}/${year}`

    const timeString = `${hoursString}:${minutesString}`

    const cancelMeeting = () => {
        
        dispatch(openDeleteMeetingDialogue(meeting))
        
    }

    return (
        <ImageBackground 
        style={ styles.background }
        source={ thumbnail }>

            <View style={{ position: 'absolute',
            top:0, right: 0, bottom: 0, left: 0,
            backgroundColor: 'white',
            opacity: 0.8 }} />

            <Text style={ styles.bookTitle }>{ title }</Text>

            <Text style={ styles.nextMeeting }>Next Meeting</Text>

            <Text style={ styles.dateAndTime }>{ dateString }</Text>

            <View style={ styles.seperatorLine } />

            <Text style={ styles.dateAndTime }>{ timeString }</Text>

            <View style={{ height: 30}} />

            <TouchableOpacity style={ styles.button } onPress={ cancelMeeting }><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>

        </ImageBackground>
    );
};

export default MeetingDetails;