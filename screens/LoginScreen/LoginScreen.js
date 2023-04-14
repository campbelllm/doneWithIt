import React, { useState } from 'react';
import {Image} from 'react-native'
import Screen from '../../components/Screen/Screen';
import styles from './loginScreenStyles';
import AppTextInput from '../../components/AppTextInput.js/AppTextInput';
import Button from '../../components/Button/Button';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
		<Screen>
			<Image
				source={require('../../assets/logo-red.png')}
				style={styles.logo}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
				icon="email"
				placeholder="email"
				textContentType="emailAddress"></AppTextInput>
			<AppTextInput
				secureTextEntry
				autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
				icon="lock"
				placeholder="password"
                textContentType="password"></AppTextInput>
            <Button
                title="Login"
                onPress={() => console.log(email, password)}
                color="primary"
            />
		</Screen>
	);
}

export default LoginScreen;
