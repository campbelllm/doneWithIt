import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
const styles = StyleSheet.create({
    card: {
		flexDirection: 'column',
		marginBottom: 25,
		fontSize: 15,
		paddingBottom: 10,
        backgroundColor: colors.white,
        overflow: 'hidden'
	},
    image: {
		height: 300,
        width: '100%',
	},
	title: {
        margin: 15,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 500,
	},
    subTitle: {
        fontWeight: 'bold',
		marginLeft: 15,
		color: colors.secondary,
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        marginLeft: 15,
    },
    contactPhoto: {
        height:50,
        borderRadius: 100,
        width: 50
    },
    userInfo: {
        fontSize: 15,
        marginLeft: 5,
    },
    name: {
        fontWeight: 600,
        marginBottom: 4,
    },
    listings: {
        fontWeight: 300,
    }

})

export default styles;