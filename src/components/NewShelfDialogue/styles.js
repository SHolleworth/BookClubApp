import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        justifyContent:'space-between',
        height: 230,
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius,
        elevation: 3,
    },
    header: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 25,
    },
    textInput: {
        backgroundColor: colors.textInput,
        padding: 20,
        borderRadius: 10,
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderWidth: 1,
        width: 150,
    },
    cross: {
        position: 'absolute',
        top: -10, right: 0, bottom: 0, left: 0,
        height: 40,
        width: 40,
    },
});

export default styles;