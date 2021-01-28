import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.searchBar,
        elevation: 2,
    },
    textInput: {
        flex: 5,
        height: 80,
        padding: 20,
        color: colors.textInputText
    },
    button: {
        height: 40,
        width: 40,
        backgroundColor: 'black',
    },
});

export default styles;