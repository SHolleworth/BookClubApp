import React, { useEffect, useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateTab } from './NavBar/navSlice'
import { ScrollView } from 'react-native-gesture-handler'

import NavBar from './NavBar/NavBar'

import Home from '../tabs/Home'
import Shelves from '../tabs/Shelves/Shelves'

const App = () => {
  const tabWidth = useWindowDimensions().width;

  const dispatch = useDispatch()

  const tab = useSelector(state => state.nav.tab)

  const scrollView = useRef(null)

  useEffect(() => {
    scrollView.current.scrollTo({ x: tab * tabWidth })
  }, [tab])

  const handleTabUpdate = ({ nativeEvent }) => {
    const offset = nativeEvent.contentOffset.x
    let newTab = 0

    if(offset > tabWidth/2 && offset < tabWidth * 1.5)
      newTab  = 1
    else if(offset > tabWidth * 1.5 && offset < tabWidth * 2.5)
      newTab  = 2
    else if(offset > tabWidth * 2.5)
      newTab  = 3

    dispatch(updateTab(newTab))
  }

  return(
    <>
      <NavBar />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollEnd={handleTabUpdate}
        showsHorizontalScrollIndicator={false}
        ref={scrollView}>
        <Home width={tabWidth}/>
        <Shelves width={tabWidth}/>
        <View style={{ backgroundColor: "green", flex: 1, width: tabWidth }}></View>
        <View style={{ backgroundColor: "yellow", flex: 1, width: tabWidth }}></View>
      </ScrollView>
    </>
  )
};

export default App;
