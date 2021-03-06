import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const randomColorIndex = Math.floor(Math.random() * 5)

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        width: '100%',
        paddingBottom: 10,
        backgroundColor: colors.panelColors[randomColorIndex],
        elevation: 1,
    },
    headerText: {
        color: 'black',
        fontFamily: 'NotoSans-Bold',
        fontSize: 25,
        margin: 10,
        marginTop: 20,
    },
});

export default styles;