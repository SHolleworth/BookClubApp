import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.raised,
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
        color: colors.textInputText
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderWidth: 1,
        backgroundColor: colors.highlight,
        borderRadius: 30,
    },
    scrollView: {
        flex: 5,
        width: '100%',
    },
    resultsContainer: {
        padding: 10,
    }
});

export default styles;