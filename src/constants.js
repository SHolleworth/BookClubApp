import { StyleSheet } from "react-native"

export const colors = {
    button: '#1b1b1b',
    textInput: '#f2f0f0',
    textInputText: '#a9a8a8',
    searchBar: '#e8e8e8',
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
    }
})