import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import Colors from '../styles/Colors';
import Shared from '../styles/Shared';
import Typography from '../styles/Typography';

const styles = StyleSheet.create({
    ...Shared,
    headerContainer: {
        padding: '0.5rem',
        background: Colors.primary,
        color: Colors.white
    },
    appTitle: {
        fontSize: Typography.sizes.xLarge
    }
});

class Header extends React.Component {
    render() {
        return (
            <div className={ css(styles.headerContainer) }>
                <div className={ css(styles.appTitle) }>
                    <span className={ css(styles.bold) }>
                        Valjean{' '}
                    </span>
                    - Crowdfunded Charity
                </div>
            </div>
        );
    }
}

export default Header;
