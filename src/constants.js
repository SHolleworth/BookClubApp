import { StyleSheet } from "react-native"

export const colors = {
    highlight: '#46484A',
    raised: '#F2F2F2',
    tabBackground: 'white',
    clubTabBackground: '#ffffff',
    background: 'white',
    button: '#1b1b1b',
    redButton: '#db3a33',
    textInput: '#f2f0f0',
    textInputText: '#a9a8a8',
    searchBar: '#e8e8e8',
    paleText: '#515151',
    darkText: '#191919',
    lightColor: '#c5c5c5',
    panelColors: [
        '#CEBEBE',
        '#ECE2D0',
        '#D5B9B2',
        '#A26769',
        '#6D2E46',
    ]
}

export const borderRadius = 5

export const globalStyles = StyleSheet.create({
    windowBackground: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        backgroundColor: colors.background,
        padding: 20,
        elevation: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '50%',
        padding: 30,
        marginRight: 40,
        borderRadius: 2,
        backgroundColor: colors.highlight,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
    },
    dialogueBackground: {
        position: 'absolute',
        top:0, right: 0, bottom: 0, left: 0,
        justifyContent:'space-between',
        height: 230,
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius,
        elevation: 3,
    },
    dialogueHeader: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
    },
    profilePlaceholder: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: 'black',
    },
    smallProfilePlaceholder: {
        alignSelf: 'center',
        height: 60,
        width: 60,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'darkgrey',
        backgroundColor: 'white',
    },
    clubTabBackground: {
        flex: 1,
        padding: 10,
    },
    book: {
        height: 125,
        width: 80,
        borderRadius: 5,
    },
    bookContainer: {
        height: 125,
        width: 80,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 5,
    },
    p: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 10,
    },
    h1: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 20,
        color: 'black',
    },
    h3: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
        color: colors.paleText,
    }
})