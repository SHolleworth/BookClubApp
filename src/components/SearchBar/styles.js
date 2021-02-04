import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.searchBar,
        elevation: 2,
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
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 30,
    },
    scrollView: {
        flex: 5,
        width: '100%',
    },
    resultsContainer: {
        padding: 20,
    }
});

export default styles;