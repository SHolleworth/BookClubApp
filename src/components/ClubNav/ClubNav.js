import React, { useState } from 'react';
import { View, Image, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import Animated, 
{
    Value,
    set,
    block,
    Clock,
    clockRunning, 
    cond, 
    Easing, 
    interpolate, 
    not, 
    startClock,  
    timing, 
    useCode,
} from 'react-native-reanimated'
import { updateClubTab } from '../../state/navSlice';

export const indicatorTransition = (clock) => {

    const state = {

        finished: new Value(0),

        position: new Value(0),

        time: new Value(0),

        frameTime: new Value(0),

    }


    const config = {

        duration: 500,

        toValue: new Value(1),

        easing: Easing.inOut(Easing.ease),

    }

    return block([

        cond(

            clockRunning(clock),

            [
                timing(clock, state, config),
            ],

        ),
        state.position
      ])
}

const ClubNav = () => {
    
    const indicatorWidth = ((useWindowDimensions().width)) / 4

    const tab = useSelector(state => state.nav.clubTab)

    const [currentIndicatorPosition, setCurrentIndicatorPosition] = useState(0)

    const clock = new Clock()

    const indicatorDest = new Value(0)

    const animationProgress = new Value(0)


    useCode(() => [

        setCurrentIndicatorPosition(indicatorTranslate),

        set(indicatorDest, tab * indicatorWidth),

        cond(not(clockRunning(clock)), startClock(clock)),

        set(animationProgress, indicatorTransition(clock)),

    ], [tab])


    const indicatorTranslate = interpolate(animationProgress, {

        inputRange: [0, 1],

        outputRange: [currentIndicatorPosition, indicatorDest]

    })

    return (
        <View style={ styles.navBar }>

            <View style={{ flexDirection: 'row', flex: 1, padding: 2 }}>

                <Animated.View style={[ styles.navIndicatorContainer, { transform: [{ translateX: indicatorTranslate }] } ]} >

                    <View style={ styles.navIndicator } />

                </Animated.View>

                <NavTouchable id={ 0 } tab={ "Home" } />

                <NavTouchable id={ 1 } tab={ "Messages" } />

                <NavTouchable id={ 2 } tab={ "Voting" } />

                <NavTouchable id={ 3 } tab={ "Members" } />

            </View>

        </View>
    );
};

export default ClubNav;

const NavTouchable = (props) => {

    const dispatch = useDispatch()

    const handleTouch = () => {

        dispatch(updateClubTab(props.id))

    }

    return (
        <TouchableOpacity style={ styles.navTouchable } onPress={ handleTouch }>

            <View style={ styles.navTouchable } >

                <Text style={ styles.navText }>{ props.tab }</Text>

            </View>

        </TouchableOpacity>
    )
}