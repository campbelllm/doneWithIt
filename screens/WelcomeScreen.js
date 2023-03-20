import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	Image,
	View,
} from 'react-native';

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
        alignSelf: 'center'
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
