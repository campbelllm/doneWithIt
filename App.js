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
import WelcomeScreen from './screens/WelcomeScreen.js';
import ImageScreen from './screens/ImageScreen.js';
export default function App() {
	return <ImageScreen/>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
