import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getShelves } from '../../state/shelvesSlice';
import ShelfRenderer from '../ShelfRenderer';
import styles from './styles'

const ShelvesList = ({ contentContainerStyle, bookTouchableFunction }) => {

    const shelves = useSelector(getShelves)

    const shelvesToRender = shelves.map(shelf => (

        <ShelfRenderer key={ shelf.id } shelf={ shelf } bookTouchableFunction={ bookTouchableFunction } />

    ))

    return (
        <ScrollView {...contentContainerStyle}>

                    { shelvesToRender }

                    <View style={{ height: 200 }} />

        </ScrollView> 
    );
};

export default ShelvesList;