import React from 'react';
import { View, FlatList } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './myAccountStyles';
import ListItem from '../../components/ListItem/ListItem';
import Icon from '../../components/Icon/Icon'
import colors from '../../config/colors'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },  {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

function MyAccount(props) {
	return (
		<Screen style={styles.main}>
			<ListItem
				style={styles.user}
				image={require('../../assets/mosh.jpg')}
				name={'Lindsey Smith'}
				listings={'lindsey@lindseysmith.co'}
            />
            <View style={styles.list}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) =>
                        <ListItem
                            name={item.title}
                            ImageComponent={ 
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                    />}
                >
                </FlatList>
                </View>
            <ListItem
                style={styles.logOut} 
                name={'Log Out'}
                ImageComponent={<Icon
                    name='logout'
                    size={35}
                    backgroundColor='#ffe66d'
                    iconColor='white'
                />}
            />
		</Screen>
	);
}

export default MyAccount;
