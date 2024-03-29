import React from 'react';
import styles from './registerScreenStyles'
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton } from '../../components/Forms'
import Screen from '../../components/Screen/Screen';

const validationSchema = Yup.object().shape({
	name:Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
    return (
        <Screen>
			<AppForm
				initialValues={{name: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
					autoCapitalize= "true"
					autoCorrect={false}
					keyboardType="text"
					icon="account"
					placeholder="Name"
					textContentType="Name"
					name="Name"
				/>
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
				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
    );
}

export default RegisterScreen;