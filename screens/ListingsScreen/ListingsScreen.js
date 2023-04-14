import React from 'react';
import styles from './listingsScreenStyles';
import Screen from '../../components/Screen/Screen';
import { FlatList } from 'react-native';
import Card from '../../components/Card/Card';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../../assets/couch.jpg'),
    },
];

function ListingsScreen(props) {
	
	return (
		<Screen style={styles.main}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
                    <Card
                        style={styles.card}
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}

export default ListingsScreen;
