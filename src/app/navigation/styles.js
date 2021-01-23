import {StyleSheet} from 'react-native';

const padding = 15
const height = 70
const width = '100%'
const highlightWidth = 70

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        height,
        width,
        padding,
        paddingBottom: padding - 5,
        backgroundColor: 'white',
        elevation: 1,
    },
    navIndicatorContainer: {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        height: '100%',
        width: "20%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    navIndicator: {
        height: 1.2,
        width: '100%',
        backgroundColor: 'black',
    },
    navTouchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    navText: {
        padding: 7,
        fontFamily: 'NotoSans-Regular',
        fontSize: 12,
    },
});

export default styles;