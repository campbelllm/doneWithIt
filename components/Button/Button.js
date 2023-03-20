import { View, Pressable, Text } from 'react-native';
import styles from './buttonStyle'
import colors from "../../config/colors"

function Button({title, color}) {
    return (
        <Pressable style={[styles.button, {backgroundColor: colors[color]}]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default Button;