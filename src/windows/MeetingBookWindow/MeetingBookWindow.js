import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/BackButton';
import ShelvesList from '../../components/ShelvesList/ShelvesList';
import styles from './styles'
import { closeMeetingBookWindow, openMeetingDateAndTimeWindow } from '../../state/uiSlice';
import { setMeetingBook } from '../../state/clubsSlice';
import { globalStyles } from '../../constants';

const BookForMeetingWindow = () => {

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const close = () => {
        
        dispatch(closeMeetingBookWindow())

    }

    const bookTouchableFunction = (book) => {
        
        dispatch(setMeetingBook({ book, clubId }))

        dispatch(openMeetingDateAndTimeWindow())

        dispatch(closeMeetingBookWindow())

    }

    return (
        <View style={[ globalStyles.windowBackground, { elevation: 15, padding: 0 } ]}>

            <View style={ styles.header }>

                <BackButton function={close} />

                <Text style={ globalStyles.h1 }>Pick a book from your collection</Text>

            </View>

            <ShelvesList contentContainerStyle={{ paddingTop: 20 }} bookTouchableFunction={ bookTouchableFunction } />

        </View>
    );
 
};

export default BookForMeetingWindow;