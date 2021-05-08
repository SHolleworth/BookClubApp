import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 0,
        paddingTop: 0,
        backgroundColor: colors.tabBackground
    },
    newShelfButton: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        margin: 10,
    },
    newShelfButtonImage: {
        height: 12,
        width: 12,
        marginLeft: 10,
    },
});

export default styles;