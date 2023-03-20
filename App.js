import { StatusBar } from 'expo-status-bar';
import {
	Dimensions,
	StyleSheet,
	Platform,
	Text,
	SafeAreaView,
	Image,
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './screens/Welcome/WelcomeScreen.js';
import ImageScreen from './screens/Image/ImageScreen.js';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
export default function App() {
	return (<Card
		title={"Red Jacket"}
		subTitle={'$100'}
		image={require("./assets/jacket.jpg")}
	/>);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
