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
export default function App() {
	return (
		<ListingScreen
			title="Red Jacket"
			subTitle="$200"
			image={require('./assets/jacket.jpg')}
			contactPhoto
			name
			listings
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
