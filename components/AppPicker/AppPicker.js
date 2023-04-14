import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../../config/styles';

import styles from './appPickerStyles';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';

function AppPicker({ icon, placeholder, ...otherProps }) {
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
			<AppText style={styles.text}>{placeholder}</AppText>
			<MaterialCommunityIcons
				name="chevron-down"
				size={20}
				color={colors.medium}
			/>
		</View>
	);
}

export default AppPicker;
