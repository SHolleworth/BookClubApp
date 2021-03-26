import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 10,
        paddingLeft: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 5,
        height: 80,
        padding: 30,
        color: colors.textInputText,

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 30,
    },
});

export default styles;