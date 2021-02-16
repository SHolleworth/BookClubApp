import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/BackButton';
import ClubNav from '../../components/ClubNav/ClubNav';
import { globalStyles } from '../../constants';
import { closeClubWindow } from '../../state/uiSlice';
import { updateClubTab } from '../../state/navSlice'
import styles from './styles'
import MembersTab from '../../app/clubTabs/MembersTab/MembersTab';

const ClubWindow = () => {

    const dispatch = useDispatch()

    const club = useSelector(state => state.ui.dataForClubWindow)

    const showing = useSelector(state => state.ui.showingClubWindow)

    const tabWidth = useSelector(state => state.ui.tabWidth)

    const tab = useSelector(state => state.nav.clubTab)

    const name = club ? club.name : undefined

    const scrollView = useRef(null)

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

    if(showing){
        
        return (
            <ScrollView
            style={[ globalStyles.windowBackground, { padding: 0 } ]}
            contentContainerStyle={[ { alignItems: 'center' } ]}
            >

                <BackButton function={ close } style={{ marginLeft: 20, marginTop: 20, marginBottom: 5 }}/>

                <View style={ styles.header }>

                    <View style={[ globalStyles.profilePlaceholder ]} />

                    <Text style={ styles.headerText }>{ name }</Text>

                </View>

                <ClubNav />

                <ScrollView 
                horizontal={ true }
                pagingEnabled={ true }
                onMomentumScrollEnd={ handleTabUpdate }
                ref={ scrollView }
                >

                    <View style={{ height: 700, width: tabWidth, backgroundColor: 'red' }} />

                    <View style={{ flex: 1, width: tabWidth, backgroundColor: 'blue' }} />

                    <View style={{ flex: 1, width: tabWidth, backgroundColor: 'green' }} />

                    <MembersTab />
                    

                </ScrollView>

            </ScrollView>
        );

    }
    else {

        return null

    }
  
};

export default ClubWindow;