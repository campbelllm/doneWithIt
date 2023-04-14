import { Pressable, Text } from 'react-native';
import styles from './buttonStyle'
import colors from "../../config/colors"

function Button({title, color = "primary", onPress}) {
    return (
        <Pressable style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default Button;