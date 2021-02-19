import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    memberEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    entryText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
        marginRight: 10,
    },
    entryAdminText: {
        fontFamily: 'NotoSan-Regular',
        fontSize: 15,
        color: 'red'
    }
});

export default styles;