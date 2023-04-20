import React from 'react';
import styles from './pickerItemStyles'
import { TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';


function PickerItem({label, onPress, name, ...otherProps}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon
                {...otherProps}
            /> 
            <AppText style={styles.text}>{label }</AppText>
        </TouchableOpacity>
    );
}

export default PickerItem;