import React, { useEffect, useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateTab } from '../state/navSlice'
import { ScrollView } from 'react-native-gesture-handler'

import NavBar from './NavBar/NavBar'
import Home from '../tabs/Home'
import Shelves from '../tabs/Shelves/Shelves'
import Clubs from '../tabs/Clubs/Clubs'
import BookDetailWindow from '../windows/BookDetailWindow'
import AddBookDialogue from '../components/AddBookDialogue'
import ClubNamingWindow from '../windows/ClubNamingWindow'
import ClubWindow from '../windows/ClubWindow/ClubWindow'
import MeetingBookWindow from '../windows/MeetingBookWindow'
import MeetingDateAndTimeWindow from '../windows/MeetingDateAndTimeWindow/MeetingDateAndTimeWindow'
import DeleteShelfDialogue from '../components/DeleteShelfDialogue'
import DeleteBookDialogue from '../components/DeleteBookDialogue'

import { connectToServer, registerNewUser, loginAsUser } from '../handlers/socketHandler'
import { setTabWidth } from '../state/uiSlice'


const App = () => {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const tab = useSelector(state => state.nav.tab)

  const windowWidth = useWindowDimensions().width

  const tabWidth = useSelector(state => state.ui.tabWidth)

  const showingBookDetailWindow = useSelector(state => state.ui.showingBookDetailWindow)

  const showingClubWindow = useSelector(state => state.ui.showingClubWindow)

  const showingClubNamingWindow = useSelector(state => state.ui.showingClubNamingWindow)

  const showingMeetingBookWindow = useSelector(state => state.ui.showingMeetingBookWindow)

  const showingMeetingDateAndTimeWindow = useSelector(state => state.ui.showingMeetingDateAndTimeWindow)

  const showingAddBookDialogue = useSelector(state => state.ui.showingAddBookDialogue)

  const showingDeleteBookDialogue = useSelector(state => state.ui.showingDeleteBookDialogue)

  const showingDeleteShelfDialogue = useSelector(state => state.ui.showingDeleteShelfDialogue)

  const testNum = 13

  //const testUser = { username: `testuser${testNum}`, password: `testpassword${testNum}` }

  const testUser = { username: `sam`, password: `123` }
  
  useEffect(() => {

    (async () => {

      setLoading(true)
    
      dispatch(setTabWidth(windowWidth))
      
      try {
  
        const connectionResponse = await connectToServer()
        
        console.log(connectionResponse)
  
        const registerResponse = await registerNewUser(testUser)
  
        console.log(registerResponse)
  
        const loginResponse = await loginAsUser(testUser)
  
        console.log(loginResponse)
  
      }
      catch (error) {
  
        console.error(error)
  
      }
      finally {
  
        setLoading(false)
  
      }
      
    })()

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

          <Clubs />

          <View style={{ backgroundColor: "yellow", flex: 1, width: tabWidth }}></View>

        </ScrollView>

        {showingBookDetailWindow ? <BookDetailWindow /> : null }

        {showingClubNamingWindow ? <ClubNamingWindow /> : null }

        {showingClubWindow ? <ClubWindow /> : null }

        {showingMeetingBookWindow ?  <MeetingBookWindow /> : null }

        {showingMeetingDateAndTimeWindow ? <MeetingDateAndTimeWindow /> : null }

        {showingAddBookDialogue ? <AddBookDialogue /> : null }

        {showingDeleteBookDialogue ? <DeleteBookDialogue /> : null }

        {showingDeleteShelfDialogue ? <DeleteShelfDialogue /> : null }
      </>
    )
  }
  else {

    return null
    
  }
};

export default App;
