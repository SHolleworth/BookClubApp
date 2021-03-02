import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const radius = borderRadius

const styles = StyleSheet.create({
    touchable: {
        height: 250,
        width: '100%',
        marginBottom: 30,
        borderRadius: radius,
        backgroundColor: 'white',
        elevation: 2,
    },
    background: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: '#e2e2e2',
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