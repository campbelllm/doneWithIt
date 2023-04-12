import styles from "./ListItemDeleteActionStyle"
import {View} from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'
function ListItemDeleteAction() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color="white"
            />
        </View>
    );
}

export default ListItemDeleteAction;