import {StyleSheet} from 'react-native'
import { colors } from '../../constants'

const margin = 20

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    newShelfButton: {
        margin,
    },
    newShelfButtonImage: {
        height: 15,
        width: 15,
        marginLeft: 35,
    },
    searchBarContainer: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        backgroundColor: 'blue'
    }
});

export default styles;