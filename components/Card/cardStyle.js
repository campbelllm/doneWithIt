import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		flexDirection: 'column',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 15,
		paddingBottom: 15,
        backgroundColor: colors.white,
        overflow: 'hidden'
	},
    image: {
		height: 200,
        width: '100%',
	},
	title: {
		margin: 10,
	},
    subTitle: {
        fontWeight: 'bold',
		marginLeft: 10,
		color: colors.secondary,
	},
});

export default styles;
