import React from 'react';
import { Image } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './loginScreenStyles';
import AppTextInput from '../../components/AppTextInput.js/AppTextInput';
import Button from '../../components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

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

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={handleChange('email')}
							icon="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>

						<ErrorMessage error={errors.email}></ErrorMessage>
						<AppTextInput
							secureTextEntry
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={handleChange('password')}
							icon="lock"
							placeholder="Password"
							textContentType="password"
						/>

						<ErrorMessage error={errors.password}></ErrorMessage>
						<Button
							title="Login"
							onPress={handleSubmit}
							color="primary"
						/>
					</>
				)}
			</Formik>
		</Screen>
	);
}

export default LoginScreen;
