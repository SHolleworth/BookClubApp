import {StyleSheet} from 'react-native';
import { borderRadius, colors } from '../../constants';

const radius = borderRadius

const styles = StyleSheet.create({
    touchable: {
        height: 250,
        width: '100%',
        marginBottom: 20,
        borderRadius: radius,
        backgroundColor: 'white',
        elevation: 2,
    },
    background: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: '#f2f2f2',
        borderRadius: radius,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        backgroundColor: 'white',
        opacity: 0.5,
    },
    image: {
        height: 80,
        width: 80,
    },
    imageBackground: {
        alignSelf: 'auto',
        marginBottom: 30,
        marginLeft: 20,
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