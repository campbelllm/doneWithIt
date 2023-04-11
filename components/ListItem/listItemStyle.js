import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
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
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        marginLeft: 15,
    },
})

export default styles;