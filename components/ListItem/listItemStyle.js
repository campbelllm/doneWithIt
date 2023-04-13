import { StyleSheet } from "react-native";
import colors from '../../config/colors'

const styles = StyleSheet.create({
    contactPhoto: {
        height:50,
        borderRadius: 100,
        width: 50,
    },
    userInfo: {
        fontSize: 15,
        padding: 10,
        paddingBottom: 0
    },
    name: {
        fontWeight: 600,
    },
    listings: {
        fontWeight: 300,
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignContent: 'center',
        backgroundColor: colors.white,
   
    },
})

export default styles;