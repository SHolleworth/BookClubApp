import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles'
import { getMeeting } from '../../state/clubsSlice';
import { openClubWindow } from '../../state/uiSlice';
import { colors, globalStyles } from '../../constants';

const ClubPanel = ({ club }) => {

    const dispatch = useDispatch()

    const clubs = require('../../assets/images/2x/clubsLight.png')

    const flag = require('../../assets/images/2x/flag.png')

    const { id, name } = club.name ? club : undefined

    const meeting = useSelector(state => getMeeting(state, club.id))

    let thumbnail = null

    if(meeting.book) thumbnail = meeting.book.info.thumbnail

    const handlePress = () => {
        
        dispatch(openClubWindow(id))

    }

    const backgroundColor = colors.panelColors[Math.floor(Math.random() * colors.panelColors.length)]

    return (
        <TouchableOpacity style={ styles.touchable } onPress={ handlePress }>

            <View style={[ styles.background, { backgroundColor } ]}>

                <View style={ styles.top }>

                    <View style={ globalStyles.profilePlaceholder} >

                        <Image source={ clubs } style={{ height: 90, width: 90 }} />

                    </View>

                    <View>

                        <View style={ styles.imageContainer }>

                            <Image style={ styles.image } source={ flag } />
                            
                        </View>

                        {thumbnail ?
                            <View style={[ globalStyles.bookContainer, {position: 'absolute',
                            top:50, right: 0, bottom: 0, left: 0,} ]}>

                                <Image style={ globalStyles.book } source={{ uri: thumbnail }} /> 

                            </View>

                        :

                            null
                        }

                    </View>

                </View>

                <View style= {styles.textBackground }>

                    <Text style={ styles.text }>{ name }</Text>

                </View>

            </View>



        </TouchableOpacity>
    );
};

export default ClubPanel;