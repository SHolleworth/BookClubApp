import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getMeeting } from '../../state/clubsSlice';
import { openDeleteMeetingDialogue } from '../../state/uiSlice';
import { colors, globalStyles } from '../../constants';

const MeetingDetails = () => {

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const meeting = useSelector(state => getMeeting(state, clubId))

    const { book } = globalStyles

    const height = book.height * 2

    const width = book.width * 2

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
        
        <View style={ styles.background }>

            <View style={{ alignItems: 'center' }}>

                <Text style={{ textAlign: 'center', width: '50%' }}><Text style={ styles.bookTitle }>{ title }</Text></Text>

                <Text style={ styles.nextMeeting }>Next Meeting</Text>

                <Text style={ styles.dateAndTime }>{ dateString }</Text>

                <View style={ styles.seperatorLine } />

                <Text style={ styles.dateAndTime }>{ timeString }</Text>

                <View style={{ height: 30}} />

                <TouchableOpacity style={[ styles.button, { backgroundColor: colors.redButton } ]} onPress={ cancelMeeting }><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>

            </View>

                <View style={{ height, width, marginRight: 10, elevation: 2, backgroundColor: 'white' }}>

                    <Image source={ thumbnail } style={{ height, width }} />

                </View>

        </View>
    );
};

export default MeetingDetails;