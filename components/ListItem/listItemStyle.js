import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contactPhoto: {
        height:50,
        borderRadius: 100,
        width: 50,
        justifyContent: 'center'
    },
    userInfo: {
        fontSize: 15,
        // marginLeft: 10,
        justifyContent: 'center',
        padding: 10,
    },
    name: {
        fontWeight: 600,
        marginBottom: 0,
    },
    listings: {
        fontWeight: 300,
    },
    contact: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        alignContent : 'space-around'
    },
})

export default styles;