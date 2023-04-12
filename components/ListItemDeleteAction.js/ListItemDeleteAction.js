import styles from './ListItemDeleteActionStyle';
import { TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={35}
					color="white"
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default ListItemDeleteAction;
