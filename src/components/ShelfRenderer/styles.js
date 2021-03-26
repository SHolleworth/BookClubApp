import {StyleSheet} from 'react-native';
import { colors } from '../../constants'

const styles = StyleSheet.create({
    background: {
        height: 230,
        paddingBottom: 10,
        paddingTop: 10,
        margin: 5,
        marginHorizontal: 5,
    },
    headerBackground: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.highlight,
        borderBottomWidth: 1
    },
    name: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 25,
        marginLeft: 20,
    },
    shelf: {
        flex: 1,
        backgroundColor: 'red',
    },
    shelfContent: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    placeholder: {
        height: 120,
        width: 120,
        marginTop: -15,
        marginRight: -15,
        marginLeft: -15,
    },
});

export default styles;