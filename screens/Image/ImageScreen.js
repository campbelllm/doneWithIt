import { Pressable, Image, View, SafeAreaView } from 'react-native';

import styles from './imageStyles';

function ImageScreen(props) {
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.buttons}>
				<Pressable style={styles.close}></Pressable>
				<Pressable style={styles.delete}></Pressable>
			</View>
			<Image
				style={styles.image}
				source={require('../../assets/chair.jpg')}></Image>
		</SafeAreaView>
	);
}

export default ImageScreen;
