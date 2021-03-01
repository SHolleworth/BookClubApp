import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars'
import BackButton from '../../components/BackButton';
import TimeInput from "../../components/TimeInput";
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { setMeetingDate, getMeeting } from '../../state/clubsSlice';
import { closeMeetingDateAndTimeWindow, openMeetingBookWindow } from '../../state/uiSlice';
import { postMeeting } from '../../handlers/socketHandler'
import { globalStyles } from '../../constants';

const MeetingDateAndTimeWindow = () => {

    const [markedDates, setMarkedDates] = useState({ })

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const meeting = useSelector(state => getMeeting(state, clubId))

    const thumbnail = meeting.book ? { uri: meeting.book.info.thumbnail } : ''

    useEffect(() => {

        const now = new Date(Date.now())
        
        const date = {}

        date.dateString = formatDate(now)

        date.day = now.getDate()

        date.month = now.getMonth() + 1

        date.year = now.getFullYear()

        markDate(date)

    }, [])

    const markDate = (date) => {

        const { dateString } = date

        const mark = {}

        mark[dateString] = { selected: true, selectedColor: 'black' }

        setMarkedDates(mark)

        storeSelectedDate(date)
        
    }

    const storeSelectedDate = (date) => {

        dispatch(setMeetingDate({ date, clubId }))
        
    }

    const close = () => {

        dispatch(openMeetingBookWindow())
        
        dispatch(closeMeetingDateAndTimeWindow())

    }

    const formatDate = (date) => {

        let dayString, monthString = ""

        const day = date.getDate()

        if (day < 10) dayString = '0' + day
        else dayString = day.toString()

        const month = date.getMonth()

        if(month < 10) monthString = '0' + month
        else monthString = month.toString()

        const year = date.getFullYear()

        return `${year}-${monthString}-${dayString}`
        
    }

    const handlePress = async () => {
        
        try {

            const message = await postMeeting(meeting)

            console.log(message)

            dispatch(closeMeetingDateAndTimeWindow())

        }
        catch (error) {

            console.error(error)

        }

    }

    return (
        <ScrollView style={[ globalStyles.windowBackground, { padding: 0 } ]}
        contentContainerStyle={{ alignItems: 'center' }}>

            <View style={ styles.header }>

                <BackButton function={close} />

                <View style={[ globalStyles.bookContainer, { marginBottom: 20 } ]}>
                    <Image source={ thumbnail } style={ globalStyles.book }/>
                </View>
    
                <Text style={ globalStyles.h1 }>Set a date and time</Text>

            </View>

            <View style={{width: "100%"}}>
                <Calendar 
                onDayPress={ day => { markDate(day) } }
                markedDates={ markedDates }
                />
            </View>

            <TimeInput />

            <TouchableOpacity 
            style={[ globalStyles.button, { justifyContent: 'center' } ]}
            onPress={ handlePress }>

                <Text style={ globalStyles.buttonText }>Accept</Text>

            </TouchableOpacity>

        </ScrollView>
    );

}

export default MeetingDateAndTimeWindow;