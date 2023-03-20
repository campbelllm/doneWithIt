import {
	ImageBackground,
	Pressable,
	Text,
	Image,
	View,
} from 'react-native';
import styles from "./welcomeStyles"

export default function WelcomeScreen() {
	const background = { uri: './assets/backgroundImage.jpg' };
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.background}>
			<View style={styles.title}>
				<Image
					style={styles.logo}
                    source={require('../assets/logo-red.png')}
                    width= '10%'></Image>
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttons}>
				<Pressable style={styles.buttonRed}>
					<Text style={styles.text}>Login</Text>
				</Pressable>
				<Pressable style={styles.buttonBlue}>
					<Text style={styles.text}>Sign Up</Text>
				</Pressable>
			</View>
		</ImageBackground>
	);
}


