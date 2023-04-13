import { Text, Image, View } from 'react-native';
import styles from './listingDetailsStyles';
import ListItem from '../../components/ListItem/ListItem';

function ListingScreen({
	title,
	subTitle,
	image,

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

			<ListItem
				image={require('../../assets/mosh.jpg')}
				name="lindsey"
				listings='none'
			></ListItem>
		</View>
	);
}

export default ListingScreen;
