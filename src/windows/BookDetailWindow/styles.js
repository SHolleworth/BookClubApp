import {StyleSheet} from 'react-native';
import { colors, globalStyles } from '../../constants';

const styles = StyleSheet.create({
    background: {
        ...globalStyles.windowBackground
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
});

export default styles;