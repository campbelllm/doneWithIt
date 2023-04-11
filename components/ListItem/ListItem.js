import { View, Image, Text } from 'react-native';
import styles from './listItemStyle';
function ListItem({image, name, listings}) {
	return (
		<View style={styles.contact}>
			<Image
				source={image}
				style={styles.contactPhoto}></Image>
			<View style={styles.userInfo}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.listings}>{listings}</Text>
			</View>
		</View>
	);
}

export default ListItem;
