import React, { useState } from 'react';
import { View, Image, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import styles from './styles'
import Animated, { block, Clock, clockRunning, cond, Easing, interpolate, not, sqrt, startClock, stopClock, timing, useCode, pow, sub, multiply } from 'react-native-reanimated'

const {
    Value,
    set,
} = Animated

export const selectorTransition = (clock) => {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
      };
    
      const config = {
        duration: 500,
        toValue: new Value(1),
        easing: Easing.inOut(Easing.ease),
      };

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

const NavBar = () => {
    const home = require("../../assets/images/2x/home.png")
    const book = require("../../assets/images/2x/book.png")
    const settings = require("../../assets/images/2x/settings.png")
    
    const selectorWidth = (useWindowDimensions().width - (styles.navBar.padding )) / 4

    const [tab, setTab] = useState(0)
    const [currentSelectorPosition, setCurrentSelectorPosition] = useState(0)

    const clock = new Clock()
    const selectorDest = new Value(0)
    const animationProgress = new Value(0)

    useCode(() => [
        setCurrentSelectorPosition(selectorTranslate),
        set(selectorDest, tab * selectorWidth),
        cond(not(clockRunning(clock)), startClock(clock)),
        set(animationProgress, selectorTransition(clock)),
    ], [tab])

    const selectorTranslate = interpolate(animationProgress, {
        inputRange: [0, 1],
        outputRange: [currentSelectorPosition, selectorDest]
    })

    return (
        <View style={ styles.navBar }>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Animated.View style={[ styles.navSelectorContainer, { transform: [{ translateX: selectorTranslate }] } ]} >
                    <View style={ styles.navSelector } />
                </Animated.View>
                <NavTouchable id={ 0 } tab={ "Home" } image={ home } moveSelector={ setTab } />
                <NavTouchable id={ 1 } tab={ "Shelves" } image={ book } moveSelector={ setTab } />
                <NavTouchable id={ 2 } tab={ "Clubs" } moveSelector={ setTab } />
                <NavTouchable id={ 3 } tab={ "Settings" } image={ settings } moveSelector={ setTab } />
            </View>
        </View>
    );
};

const useAnimation = () => {
    
}

export default NavBar;

const NavTouchable = (props) => {
    const dimensions =  styles.navBar.height - 40

    const handleTouch = () => {
        props.moveSelector(props.id)
    }

    return (
        <TouchableOpacity style={ styles.navTouchable } onPress={ handleTouch }>
            <View style={ styles.navTouchable } >
                <Image 
                    source={ props.image }
                    style={{ height: dimensions, width: dimensions }}
                    />
                <Text style={ styles.navText }>{ props.tab }</Text>
            </View>
        </TouchableOpacity>
    )
}