import { Text, Image, View } from 'react-native';
import styles from './listingStyles'

function ListingScreen({
	title,
	subTitle,
	image,
	contactPhoto,
	name,
	listings,
}) {
	return (
		<View>
			<View style={styles.card}>
				<Image
					source={image}
					style={styles.image}></Image>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
			<View style={styles.contact}>
				<Image
					source={require('../../assets/mosh.jpg')}
					style={styles.contactPhoto}></Image>
				<View style={styles.userInfo}>
					<Text style={styles.name}> Lindsey Smith</Text>
					<Text styles={styles.listings}> 2 Listings</Text>
				</View>
			</View>
		</View>
	);
}

export default ListingScreen;
