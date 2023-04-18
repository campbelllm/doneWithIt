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
import ListItem from './components/ListItem/ListItem';
import ListingsScreen from './screens/ListingsScreen/ListingsScreen';



export default function App() {
	return <ListItem
		
	/>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
