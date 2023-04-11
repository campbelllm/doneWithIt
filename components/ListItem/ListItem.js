import { View, Image, Text } from 'react-native';
import styles from './listItemStyle';
function ListItem(props) {
	return (
		<View style={styles.contact}>
			<Image
				source={require('../../assets/mosh.jpg')}
				style={styles.contactPhoto}></Image>
			<View style={styles.userInfo}>
				<Text style={styles.name}> Lindsey Smith</Text>
				<Text style={styles.listings}> 2 Listings</Text>
			</View>
		</View>
	);
}

export default ListItem;
