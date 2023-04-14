import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
	},
	textInput: {
		fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.dark,
    },
    icon: {
        marginRight: 10,
    }
});

export default styles;
