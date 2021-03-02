import {StyleSheet} from 'react-native'
import { colors } from '../../constants'

const margin = 20

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.tabBackground
    },
    newShelfButton: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        margin,
    },
    newShelfButtonImage: {
        height: 12,
        width: 12,
        marginLeft: 10,
    },
    searchBarContainer: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        backgroundColor: 'blue'
    }
});

export default styles;