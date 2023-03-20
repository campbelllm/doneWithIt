import { ImageBackground, Text, Image, View } from 'react-native';
import styles from './welcomeStyles';
import Button from '../../components/Button/Button';

export default function WelcomeScreen() {
	return (
		<ImageBackground
			source={require('../../assets/background.jpg')}
			style={styles.background}
			blurRadius={6}>
			<View style={styles.title}>
				<Image
					style={styles.logo}
					source={require('../../assets/logo-red.png')}
					width="10%"></Image>
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttons}>
				<Button
					title={'LOGIN'}
					color="primary"></Button>
				<Button
					title={'SIGN UP'}
					color="secondary"></Button>
			</View>
		</ImageBackground>
	);
}
