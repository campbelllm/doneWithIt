import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from './listItemStyle';
import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ListItem({
	image,
	name,
	listings,
	ImageComponent,
	onPress,
	renderRightActions,
	showIcon,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.light}
				onPress={onPress}>
				<View style={styles.contact}>
					{ImageComponent}
					{image && (
						<Image
							source={image}
							style={styles.contactPhoto}
						/>
					)}
					<View style={styles.userInfo}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.listings}>{listings}</Text>
					</View>
					<View style={styles.icon}>
						{showIcon ? (
							<MaterialCommunityIcons
								name="chevron-right"
								size={30}
								color={colors.medium}
							/>
						) : null}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default ListItem;
