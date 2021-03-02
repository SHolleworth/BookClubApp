import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    detail: {
        width: 300,
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
        height: 50,
        width: 30,
        backgroundColor: 'green',
        borderRadius: 5,
    },
});

export default styles;