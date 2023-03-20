import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	background: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	title: {
		alignSelf: 'center',
		padding: 80,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
	},
	buttons: {
		fontSize: '20px',

		postion: 'absolute',
		bottom: 0,
	},
	buttonRed: {
		backgroundColor: '#4ECDC4',
	},
	buttonBlue: {
		backgroundColor: '#fc5c65',
	},
	text: {
		alignSelf: 'center',
		fontSize: '20px',
		padding: 20,
	},
});

export default styles;
