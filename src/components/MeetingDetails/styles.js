import { StyleSheet } from 'react-native';
import { borderRadius, globalStyles } from '../../constants';

const { height, width } = globalStyles.book

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        borderRadius: borderRadius,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    bookTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 25,
    },
    nextMeeting: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 20,
        margin: 10,
    },
    dateAndTime: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
    },
    seperatorLine: {
        height: 2,
        width: '50%',
        margin: 10,
        backgroundColor: 'black'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 120,
        marginTop: -20,
        backgroundColor: 'black',
        borderRadius: 5,
    }
});

export default styles;
