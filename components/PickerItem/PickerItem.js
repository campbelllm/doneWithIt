import React from 'react';
import styles from './pickerItemStyles'
import { TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText';


function PickerItem({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label }</AppText>
        </TouchableOpacity>
    );
}

export default PickerItem;