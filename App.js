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
import Messages from './screens/Messages/Messages';
import MyAccount from './screens/MyAccount/MyAccount';
import ListItem from './components/ListItem/ListItem';
import Icon from './components/Icon/Icon';
import Screen from './components/Screen/Screen';

export default function App() {
	return (
	<Screen>
		<ListItem
				name="Lindsey"
				listings="2 listings"
				ImageComponent={<Icon 
					name='email'
					size={35}
					backgroundColor='black'
					iconColor='white'
			/>}
			/>
	</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
