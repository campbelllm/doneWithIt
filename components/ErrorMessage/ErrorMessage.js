import React from 'react';
import styles from './errorMessageStyles'
import AppText from '../AppText/AppText';

function ErrorMessage({ error }) {
    if (!error) return null;
    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}

export default ErrorMessage;