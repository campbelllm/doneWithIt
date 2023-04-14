import React from 'react';
import { Image } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './loginScreenStyles';
import Button from '../../components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import AppFormField from '../../components/AppFormField/AppFormField';

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
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
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
