import { View, Image, Text } from 'react-native';
import styles from './cardStyle';

function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image
				source={image}
				style={styles.image}></Image>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	);
}

export default Card;
