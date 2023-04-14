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


export default function App() {
	return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
