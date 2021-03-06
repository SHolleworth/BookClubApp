import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { setMeetingTime } from '../../state/clubsSlice';
import { globalStyles } from '../../constants';

const TimeInput = () => {

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const [hours, setHours] = useState(12)

    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        
        let time = {}

        time.minutes = minutes

        time.hours = hours

        dispatch(setMeetingTime({ time, clubId }))

    },[minutes, hours])

    const updateHours = (text) => {

        let int = 0;

        int = text === '' ? 0 :  Number.parseInt(text)

        setHours(int)
        
    }

    const updateMinutes = (text) => {

        let int = 0;

        int = text === '' ? 0 :  Number.parseInt(text)

        setMinutes(int)
        
    }

    const minutesString = () => {

        if(minutes > 59) setMinutes(0)

        const string = numberToString(minutes)

        return string
        
    }

    const hoursString = () => {

        if(hours > 23) setHours(0)

        const string = numberToString(hours)

        return string
        
    }

    const numberToString = (number) => {

        let string = ''

        if(number < 0) {
            string = '00'
        }
        else if(number < 10) {
            string = '0' + number
        }
        else {
            string = number.toString()
        }

        return string
        
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: 20 }}>

            <TextInput 
            style={ styles.textInput }
            onChangeText={ text => updateHours(text) }
            value={ hoursString() }
            placeholder={ "18" }
            keyboardType={ 'number-pad' }
            selectTextOnFocus={ true }/>

            <Text style={[ globalStyles.h1, { margin: 20 } ]}>:</Text>

            <TextInput 
            style={ styles.textInput }
            onChangeText={ text => updateMinutes(text) }
            value={ minutesString() }
            placeholder={ "00" }
            keyboardType={ 'number-pad' }
            selectTextOnFocus={ true }/>

        </View>
    );
};

export default TimeInput;