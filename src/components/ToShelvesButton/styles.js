import {StyleSheet} from 'react-native';
import { borderRadius } from '../../constants';

const radius = borderRadius

const styles = StyleSheet.create({
    touchable: {
        height: 250,
        width: '100%',
        elevation: 2,
        borderRadius: radius,
        backgroundColor: 'white'
    },
    background: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: 'lightgrey',
        borderRadius: radius,
    },
    image: {
        height: 120,
        width: 120,
        marginBottom: 35,
    },
    textBackground: {
        height: 60,
        paddingLeft: 30,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
    },
    text: {
        fontSize: 18,
        fontFamily: 'NotoSans-Regular'
    }
});

export default styles;