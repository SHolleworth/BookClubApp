import { StyleSheet } from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 220, 
        height: 330,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: borderRadius,
        borderColor: colors.black,
    },
    text: {
        marginBottom: 20,
    }
});

export default styles;