import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/BackButton';
import ClubNav from '../../components/ClubNav/ClubNav';
import { colors, globalStyles } from '../../constants';
import { closeClubWindow } from '../../state/uiSlice';
import { updateClubTab } from '../../state/navSlice'
import styles from './styles'
import MembersTab from '../../clubTabs/MembersTab/MembersTab';
import MemberInviteSearchBar from '../../components/MemberInviteSearchBar/MemberInviteSearchBar';
import { getClubById } from '../../state/clubsSlice';
import HomeTab from '../../clubTabs/HomeTab/HomeTab';

const ClubWindow = () => {

    const dispatch = useDispatch()

    const clubId = useSelector(state => state.ui.clubIdForWindow)

    const club = useSelector(state => getClubById(state, clubId))

    const tabWidth = useSelector(state => state.ui.tabWidth)

    const tab = useSelector(state => state.nav.clubTab)

    const name = club ? club.name : undefined

    const scrollView = useRef(null)

    useEffect(() => {

        if(scrollView.current)

            scrollView.current.scrollTo({ x: tab * tabWidth, animated: false })
        
    }, [])

    useEffect(() => {
  
      if(scrollView.current)

        scrollView.current.scrollTo({ x: tab * tabWidth })
  
    }, [tab])

    const close = () => {
        
        dispatch(closeClubWindow())

    }

    const handleTabUpdate = ({ nativeEvent }) => {

        const offset = nativeEvent.contentOffset.x
    
        let newTab = 0
    
        if(offset > tabWidth/2 && offset < tabWidth * 1.5)
          newTab  = 1
    
        else if(offset > tabWidth * 1.5 && offset < tabWidth * 2.5)
          newTab  = 2
    
        else if(offset > tabWidth * 2.5)
          newTab  = 3
    
        dispatch(updateClubTab(newTab))

    }

    return (
        <ScrollView
        style={[ globalStyles.windowBackground, { padding: 0, backgroundColor: colors.tabBackground } ]}
        contentContainerStyle={[ { alignItems: 'center', backgroundColor: colors.tab } ]} >


            <View style={ styles.header }>

                <BackButton function={ close } style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, alignSelf: 'flex-start' }}/>

                <View style={[ globalStyles.profilePlaceholder ]} />

            </View>

            <View style={{ backgroundColor: 'white', width: '100%', alignItems: 'center' }}>

                <Text style={ styles.headerText }>{ name }</Text>

            </View>

            <ClubNav />

            <ScrollView 
            horizontal={ true }
            pagingEnabled={ true }
            showsHorizontalScrollIndicator={ false }
            onMomentumScrollEnd={ handleTabUpdate }
            ref={ scrollView }
            >

                <HomeTab />

                <View style={{ flex: 1, width: tabWidth, backgroundColor: 'blue' }} />

                <View style={{ flex: 1, width: tabWidth, backgroundColor: 'green' }} />

                <MembersTab />
                

            </ScrollView>

        </ScrollView>
    );
  
};

export default ClubWindow;