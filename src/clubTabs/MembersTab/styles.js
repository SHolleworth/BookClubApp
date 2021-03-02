import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.clubTabBackground,
    },
    entryBackground: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 1,
    },
    memberEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    entryText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
        marginRight: 10,
    },
    entryAdminText: {
        fontFamily: 'NotoSan-Regular',
        fontSize: 15,
        color: 'red'
    }
});

export default styles;