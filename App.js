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
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

export default function App() {
	return <RegisterScreen></RegisterScreen>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
