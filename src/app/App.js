import React, { useEffect, useRef, useState } from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateTab } from './navigation/navSlice';

import NavBar from './navigation/NavBar'

const App = () => {
  const appWidth = useWindowDimensions().width * 4;
  const tabWidth = useWindowDimensions().width;

  const dispatch = useDispatch()

  const tab = useSelector(state => state.nav.tab)

  const scrollView = useRef(null)

  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    scrollView.current.scrollTo({x: tab * tabWidth})
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
        ref={scrollView}>
        <View style={{ backgroundColor: "red", flex: 1, width: tabWidth }}></View>
        <View style={{ backgroundColor: "blue", flex: 1, width: tabWidth }}></View>
        <View style={{ backgroundColor: "green", flex: 1, width: tabWidth }}></View>
        <View style={{ backgroundColor: "yellow", flex: 1, width: tabWidth }}></View>
      </ScrollView>
    </>
  )
};

export default App;
