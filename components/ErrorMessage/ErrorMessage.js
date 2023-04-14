import React from 'react';
import styles from './errorMessageStyles'
import AppText from '../AppText/AppText';

function ErrorMessage({ error, visible }) {
    if (visible || !error) return null;
    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}

export default ErrorMessage;