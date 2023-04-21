import React from 'react';
import styles from './pickerItemStyles';
import { TouchableOpacity, View } from 'react-native';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';

function PickerItem({ label, onPress, name, iconName, ...otherProps }) {
	return (
		<TouchableOpacity onPress={onPress}>
            {iconName && (
                <View>
				<View style={styles.iconTrue}>
					<Icon
						iconName={iconName}
						{...otherProps}
					/>
					<AppText style={styles.text}>{label}</AppText>
                    </View>
                    </View>
			)}
			{!iconName ? <AppText style={styles.text}>{label}</AppText> : null}
		</TouchableOpacity>
	);
}

export default PickerItem;
