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
	icon: {
		marginRight: 10,
    },
    text: {
        flex: 1,
    }
});

export default styles;
