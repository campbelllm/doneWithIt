import { StyleSheet } from 'react-native';
import colors from '../../config/colors'

const styles = StyleSheet.create({
    button: {
		borderRadius: 50,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text: {
		fontSize: 20,
        padding: 10,
        color: colors.white
	},
});

export default styles;