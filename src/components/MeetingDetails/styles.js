import { StyleSheet } from 'react-native';
import { borderRadius, globalStyles } from '../../constants';

const { height, width } = globalStyles.book

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        padding: 20,
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
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 120,
        backgroundColor: 'black',
        borderRadius: 5,
    }
});

export default styles;