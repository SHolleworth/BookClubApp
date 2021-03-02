import {StyleSheet} from 'react-native';
import { clockRunning } from 'react-native-reanimated';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.textInput,
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.button
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: 150,
    },
});

export default styles;