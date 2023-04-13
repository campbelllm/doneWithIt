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
   
})

export default styles;