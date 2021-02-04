import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        backgroundColor: 'white',
        padding: 20,
        elevation: 10,
    },
    title: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        marginBottom: 10,
    },
    authors: {
        fontFamily: 'NotoSans-Regular'
    },
    publishedBlock: {
        fontFamily: 'NotoSans-Regular',
        color: colors.paleText
    },
    description: {
        marginBottom: 30,
    },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        marginBottom: 20,
    },
});

export default styles;