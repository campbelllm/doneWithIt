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
import ListingScreen from './screens/ListingDetailsScreen/ListingDetailsScreen.js';
import Messages from './screens/Messages/Messages';
import MyAccount from './screens/MyAccount/MyAccount';
import ListItem from './components/ListItem/ListItem';
import Icon from './components/Icon/Icon';
import Screen from './components/Screen/Screen';
import ListingsScreen from './screens/ListingsScreen/ListingsScreen.js';
import AppTextInput from './components/AppTextInput.js/AppTextInput.js';
import AppPicker from './components/AppPicker/AppPicker.js';

export default function App() {
	return (
		<Screen>
			<AppPicker
				icon="apps"
				placeholder="category"></AppPicker>
			<AppTextInput
				placeholder="Username"
				icon="email"
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
