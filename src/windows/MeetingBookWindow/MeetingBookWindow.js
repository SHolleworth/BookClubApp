import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/BackButton';
import ShelvesList from '../../components/ShelvesList/ShelvesList';
import { globalStyles } from '../../constants';
import { setMeetingBook } from '../../state/clubsSlice';
import { closeMeetingBookWindow, openMeetingDateAndTimeWindow } from '../../state/uiSlice';
import styles from './styles'

const BookForMeetingWindow = () => {

    const dispatch = useDispatch()

    const close = () => {
        
        dispatch(closeMeetingBookWindow())

    }

    const bookTouchableFunction = (book) => {
        
        dispatch(setMeetingBook(book))

        dispatch(openMeetingDateAndTimeWindow())

        dispatch(closeMeetingBookWindow())

    }

    return (
        <View style={[ globalStyles.windowBackground, { elevation: 15, alignItems: 'center', padding: 0 } ]}>

            <View style={ styles.header }>

                <BackButton function={close} />

                <Text style={ globalStyles.h1 }>Pick a book from your collection</Text>

            </View>

            <ShelvesList contentContainerStyle={{ paddingTop: 20 }} bookTouchableFunction={ bookTouchableFunction } />

        </View>
    );
 
};

export default BookForMeetingWindow;