import React, { useEffect, useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateTab } from '../state/navSlice'
import { ScrollView } from 'react-native-gesture-handler'

import NavBar from './NavBar/NavBar'

import Home from '../tabs/Home'
import Shelves from '../tabs/Shelves/Shelves'
import { connectToServer, registerNewUser, loginAsUser } from '../handlers/socketHandler'
import BookDetailWindow from '../windows/BookDetailWindow'
import AddBookDialogue from '../components/AddBookDialogue'
import { setTabWidth } from '../state/uiSlice'
import { v4 as uuidv4 } from 'uuid'

const App = () => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const tab = useSelector(state => state.nav.tab)

  const windowWidth = useWindowDimensions().width

  const tabWidth = useSelector(state => state.ui.tabWidth)

  const showingBookDetailWindow = useSelector(state => state.ui.showingBookDetailWindow)

  const testNum = 4

  const testUser = { username: `testuser${testNum}`, password: `testpassword${testNum}` }
  
  useEffect(() => {

    connectToServer()

    dispatch(setTabWidth(windowWidth))

    registerNewUser(testUser)
      .then(response => {
        
        console.log(response)
        
      })
      .then(() => {
        
        return loginAsUser(testUser)

      })
      .then((message) => {
        
        console.log(message)

      })
      .catch(error => {

        console.error(error)
      
      })
      .finally(() => {
        
        setLoading(false)

      })

  },[])

  
  const scrollView = useRef(null)

  useEffect(() => {

    if(scrollView.current)
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

  if(tabWidth && !loading) {
    return(
      <>
        <NavBar />

        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          onMomentumScrollEnd={handleTabUpdate}
          showsHorizontalScrollIndicator={false}
          ref={scrollView}
          >

          <Home />

          <Shelves />

          <View style={{ backgroundColor: "green", flex: 1, width: tabWidth }}></View>

          <View style={{ backgroundColor: "yellow", flex: 1, width: tabWidth }}></View>

        </ScrollView>

        {showingBookDetailWindow ? <BookDetailWindow /> : null}

        <AddBookDialogue />
      </>
    )
  }
  else {

    return null
    
  }
};

export default App;
