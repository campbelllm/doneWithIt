import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 15,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: 'black',
	},
	buttons: {
		padding: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	close: {
		width: 50,
		height: 50,
		backgroundColor: '#fc5c65',
	},
	delete: {
		backgroundColor: '#4ECDC4',
		width: 50,
		height: 50,
	},
	image: {
		flex: 1,
		marginTop: 50,
		marginBottom: 50,
		width: '100%',
	},
});

export default imageStyles;
