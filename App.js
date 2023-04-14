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
import LoginScreen from './screens/LoginScreen/LoginScreen';

export default function App() {
	return <LoginScreen></LoginScreen>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
