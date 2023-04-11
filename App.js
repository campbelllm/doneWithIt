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
import ListingScreen from './screens/ListingScreen/ListingScreen';
import Messages from './screens/Messages/Messages'
export default function App() {
	return (
		<Messages
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
