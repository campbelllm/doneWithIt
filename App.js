import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Dimensions,
	StyleSheet,
	Platform,
	Text,
	SafeAreaView,
	Image,
} from 'react-native';
import ListingEditScreen from './screens/ListingEditScreen/ListingEditScreen';
import AppFormPicker from './components/Forms/AppFormPicker/AppFormPicker';
import Screen from './components/Screen/Screen';
import Messages from './screens/Messages/Messages';
import AppPicker from './components/AppPicker/AppPicker';


const categories = [
	{
		label: 'Furniture',
		value: 1,
	},
	{
		label: 'Clothing',
		value: 2,
	},
	{
		label: 'Camera',
		value: 3,
	},
];
export default function App() {
	return <ListingEditScreen>
	
	</ListingEditScreen>

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
