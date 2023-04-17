import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../../config/styles';

import styles from './appTextInputStyles';
import colors from '../../config/colors';

function AppTextInput({ icon, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={colors.medium}
				style={defaultStyles.text}
				{...otherProps}
			/>
		</View>
	);
}

export default AppTextInput;
