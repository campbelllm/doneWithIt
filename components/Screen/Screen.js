import React from 'react';
import styles from './screenStyles'

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;