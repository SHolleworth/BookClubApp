import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: 210,
        paddingBottom: 10,
        paddingTop: 10,
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 5,
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