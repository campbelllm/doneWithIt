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
		marginTop: 20,
		marginBottom: 20,
	},
});

export default styles;
