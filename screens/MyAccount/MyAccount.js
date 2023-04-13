import React from 'react';
import { View } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './myAccountStyles';
import ListItem from '../../components/ListItem/ListItem';
import Icon from '../../components/Icon/Icon'
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
                    name={'My Listings'}
                    // ImageComponent={}
                    />
                <ListItem
                    style={styles.messages} 
               
                    name={'My Messages'}
                    />
			</View>
            <ListItem
                style={styles.logOut} 
           
                name={'Log Out'}
            />
		</Screen>
	);
}

export default MyAccount;
