import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from './listItemStyle';
import colors from '../../config/colors';

function ListItem({ image, name, listings, onPress }) {
	return (
		<TouchableHighlight
			underlayColor={colors.light}
			onPress={onPress}>
			<View style={styles.contact}>
				<Image
					source={image}
					style={styles.contactPhoto}></Image>
				<View style={styles.userInfo}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.listings}>{listings}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
}

export default ListItem;
