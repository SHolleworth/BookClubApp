import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';
const radius = borderRadius

const styles = StyleSheet.create({
    touchable: {
        height: 200,
        width: '100%',
        marginBottom: 20,
        borderRadius: radius,
        backgroundColor: 'white',
        elevation: 2,
    },
    background: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: colors.lightColor,
        borderRadius: radius,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20,
    },
    image: {
        height: 100,
        width: 100,
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
        fontFamily: 'NotoSans-Bold'
    }
});

export default styles;