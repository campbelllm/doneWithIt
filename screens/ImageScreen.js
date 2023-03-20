import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Image,
	View,
	SafeAreaView,
} from 'react-native';

function ImageScreen(props) {
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.buttons}>
				<Pressable style={styles.close}></Pressable>
				<Pressable style={styles.delete}></Pressable>
			</View>
			<Image
				style={styles.image}
				source={require('../assets/chair.jpg')}></Image>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 15,
		flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'black'
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

export default ImageScreen;
