import { StyleSheet } from "react-native"

export const colors = {
    button: '#1b1b1b',
    textInput: '#f2f0f0',
    textInputText: '#a9a8a8',
    searchBar: '#e8e8e8',
    paleText: '#515151'
}

export const borderRadius = 20

export const globalStyles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: 180,
        backgroundColor: colors.button,
        borderRadius: 35,
        padding: 30,
        elevation: 2,
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
        fontSize: 25,
    },
})