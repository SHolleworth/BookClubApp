import {StyleSheet} from 'react-native';
import { borderRadius, colors, globalStyles } from '../../constants';

const styles = StyleSheet.create({
    background: {
        height: 250,
        width: '100%',
        alignItems: 'center',
    },
    message: {
        ...globalStyles.h3
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderRadius,
        borderColor: 'black',
    },
    buttonText: {
        ...globalStyles.h1,
        marginBottom: 20,
    }
});

export default styles;