import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({ iconName, iconBackgroundColor, iconSize = 35, iconColor= 'black' }) {
	return (
		<View
			style={{
				width: iconSize,
				height: iconSize,
				borderRadius: iconSize / 2,
				backgroundColor: iconBackgroundColor,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<MaterialCommunityIcons
				name={iconName}
				size={iconSize * 0.5}
				color={iconColor}
			/>
		</View>
	);
}

export default Icon;
