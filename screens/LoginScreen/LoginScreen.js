import React from 'react';
import { Image } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './loginScreenStyles';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton } from '../../components/Forms'


const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
	return (
		<Screen>
			<Image
				source={require('../../assets/logo-red.png')}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					icon="email"
					placeholder="Email"
					textContentType="emailAddress"
					name="email"
				/>
				<AppFormField
					secureTextEntry
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					placeholder="Password"
					textContentType="password"
					name="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

export default LoginScreen;
