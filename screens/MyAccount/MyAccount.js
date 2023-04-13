import React from 'react';
import { View, FlatList } from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './myAccountStyles';
import ListItem from '../../components/ListItem/ListItem';
import Icon from '../../components/Icon/Icon'
import colors from '../../config/colors'
import ListItemSeparator from '../../components/ListItemSeperator/ListItemSeparator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
            iconColor: colors.white
        }
    },  {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
            iconColor: colors.white
        }
    }
]

function MyAccount(props) {
	return (
        <Screen style={styles.main}>
            <View style={styles.user}>
			<ListItem
				image={require('../../assets/mosh.jpg')}
				name={'Lindsey Smith'}
				listings={'lindsey@lindseysmith.co'}
                />
                </View>
            <View style={styles.list}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            name={item.title}
                            ImageComponent={ 
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                    iconColor={item.icon.iconColor}
                                />
                            }
                    />}
                >
                </FlatList>
            </View>
            <View style={styles.logOut} >
            <ListItem
                name={'Log Out'}
                ImageComponent={<Icon
                    name='logout'
                    size={35}
                    backgroundColor='#ffe66d'
                    iconColor='white'
                />}
                />
            </View>
		</Screen>
	);
}

export default MyAccount;
