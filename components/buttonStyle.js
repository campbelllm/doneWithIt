import { StyleSheet } from 'react-native';
import colors from '../config/colors'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
		borderRadius: 50,
        bottom: 0,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
		fontSize: '20px',
		padding: 20,
	},
});

export default styles;