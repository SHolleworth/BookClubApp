import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: 180,
        marginTop: 10,
    },
    name: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 25,
        marginBottom: 10,
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