import { Text, Image, View } from 'react-native';
import styles from './listingStyles';
import ListItem from '../../components/ListItem/ListItem';

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

			<ListItem></ListItem>
		</View>
	);
}

export default ListingScreen;
