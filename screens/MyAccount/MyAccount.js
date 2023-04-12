import React from 'react';
import { View } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './myAccountStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../../components/ListItem/ListItem';
import colors from '../../config/colors'

function MyAccount(props) {
	return (
		<Screen style={styles.main}>
			<ListItem
				style={styles.user}
				image={require('../../assets/mosh.jpg')}
				name={'Lindsey'}
				listings={'lindsey@lindseysmith.co'}
			/>
			<View style={styles.list}>
                <ListItem
                    style={styles.listings} 
                //     image={<MaterialCommunityIcons
				// 	name="format-list-bulleted"
				// 	size={35}
				// 	color= {colors.primary}
				// />}
                    name={'My Listings'}
                    />
                <ListItem
                    style={styles.messages} 
                //     image={<MaterialCommunityIcons
				// 	name="email"
				// 	size={35}
				// 	color= {colors.secondary}
				// />}
                    name={'My Messages'}
                    />
			</View>
            <ListItem
                style={styles.logOut} 
                // image={<MaterialCommunityIcons
				// 	name="logout"
				// 	size={35}
				// 	color="#ffe66d"
				// />}
                name={'Log Out'}
            />
		</Screen>
	);
}

export default MyAccount;
