import { StyleSheet } from 'react-native';
import { borderRadius, globalStyles } from '../../constants';

const { height, width } = globalStyles.book

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 3,
        width: width * 3,
        marginTop: 20,
        borderRadius: borderRadius,
        elevation: 5,
    },
    bookTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 20,
    },
    nextMeeting: {
        fontFamily: 'NotoSans-Bold',
        margin: 10,
    },
    dateAndTime: {
        fontFamily: 'NotoSans-Italic',
    },
    seperatorLine: {
        height: 1,
        width: '50%',
        margin: 10,
        backgroundColor: 'black'
    }
});

export default styles;