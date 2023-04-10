import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
const styles = StyleSheet.create({
    card: {
		flexDirection: 'column',
		marginLeft: 5,
		marginRight: 20,
		marginBottom: 40,
		fontSize: 15,
		paddingBottom: 10,
        backgroundColor: colors.white,
        overflow: 'hidden'
	},
    image: {
		height: 200,
        width: '100%',
	},
	title: {
        margin: 10,
        fontSize: 18
	},
    subTitle: {
        fontWeight: 'bold',
		marginLeft: 10,
		color: colors.secondary,
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
    },
    contactPhoto: {
        height:50,
        borderRadius: 100,
        width: 50
    },
    userInfo: {
        fontSize: 15,
    },
    name: {
        fontWeight: 'bold',
    },
    listings: {
        
    }

})

export default styles;