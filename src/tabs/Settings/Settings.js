import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { colors, globalStyles } from '../../constants';
import { setCurrentUser } from '../../state/userSlice';
import styles from './styles'

const Settings = () => {

    const dispatch = useDispatch()

    const width = useSelector(state => state.ui.tabWidth)

    const logout = () => {
        dispatch(setCurrentUser({ id: null, username: null }))
    }

    return (
        <View style={[ styles.background,  { width }]}>
            <TouchableOpacity onPress={ logout }>
                <View style={[ globalStyles.button, { backgroundColor: colors.redButton, alignSelf: 'center', marginRight: 0 }]}>
                    <Text style={ globalStyles.buttonText }>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;