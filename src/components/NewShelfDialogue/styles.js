import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
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
});

export default styles;