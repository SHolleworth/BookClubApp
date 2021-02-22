import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        width: '100%',
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 5
    },
    textContainer: {
        marginLeft: 20,
    },
    acceptButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 90,
        backgroundColor: colors.button,
        borderRadius: 25,
    },
    rejectButton: {
        marginLeft: 10,
    }
});

export default styles;