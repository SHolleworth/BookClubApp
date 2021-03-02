import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    detail: {
        flex: 3,
        flexDirection: 'row',
        height: 100,
    },
    title: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 15,
    },
    authors: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 12,
    },
    addButton: {
        flex: 1,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 5,
    },
});

export default styles;