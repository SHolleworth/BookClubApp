import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../constants';

const styles = StyleSheet.create({
    background: {
        ...globalStyles.windowBackground,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 25,
        marginBottom: 40,
    },
    loginHeading: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 20,
        marginBottom: 40,
    },
    loginText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
        marginBottom: 20,
    },
    textInput: {
        width: '90%',
        backgroundColor: colors.textInput,
        marginBottom: 20,
    }
});

export default styles;