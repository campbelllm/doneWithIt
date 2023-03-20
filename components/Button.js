import { View, Pressable, Text } from 'react-native';
import styles from './buttonStyle'


function Button({title}) {
    return (
        <View style={styles.main}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
    </View>
    );
}

export default Button;