import React, { useState } from 'react';
import {
	View,
	TextInput,
	Modal,
	Button,
	TouchableWithoutFeedback,
	FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PickerItem from '../PickerItem/PickerItem';

import styles from './appPickerStyles';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';
import Screen from '../Screen/Screen';

function AppPicker({
	icon,
	placeholder,
	items,
	onSelectedItem,
	selectedItem,
	width = '100%',
	...otherProps
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}

					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal
				visible={modalVisible}
				animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								{...otherProps}
								iconName={item.iconName}
								iconBackgroundColor={item.iconBackgroundColor}
								iconSize={item.iconSize}
								iconColor={item.iconColor}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectedItem(item);
								}}
							/>
						)}></FlatList>
				</Screen>
			</Modal>
		</>
	);
}

export default AppPicker;
