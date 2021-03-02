import {StyleSheet} from 'react-native';
import { globalStyles, colors, borderRadius } from '../../constants';

const styles = StyleSheet.create({
    background: {
        ...globalStyles.windowBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: colors.darkText,
        marginBottom: 20,
    },
    textInput: {
        height: 70,
        width: 300,
        padding: 20,
        marginBottom: 20,
        backgroundColor: colors.textInput,
        borderWidth: 1,
        borderColor: colors.darkText,
        borderRadius: 5,
    },
    textInputContainer: {
        flex: 2,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        flex: 3,
    }
});

export default styles;