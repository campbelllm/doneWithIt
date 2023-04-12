import { FlatList } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import styles from './messagesStyles'
import Screen from "../../components/Screen/Screen"
import ListItemSeparator from '../../components/ListItemSeperator/ListItemSeparator';
const messages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../../assets/mosh.jpg'),
	},
];

function Messages(props) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => 
					<ListItem
						image={item.image}
						name={item.title}
						listings={item.description}
						onPress={() => console.log("Message selected", item)}
					/>
				}
                ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}

export default Messages;
