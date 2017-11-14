import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import moment from 'moment';

import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const styles = StyleSheet.create({
    feedContainer: {
        margin: '1rem 15%',
        border: '1px solid ' + Colors.misty,
        padding: '1rem'
    },
    createTime: {
        color: Colors.foggy,
        fontSize: Typography.sizes.sm
    }
});

class Feed extends React.Component {
    render() {
        return (
            <div className={ css(styles.feedContainer) }>
                { this.props.description }

                <div className={ css(styles.createTime) }>
                    { 'Written at ' + moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a') }
                </div>
            </div>
        )
    }
}

export default Feed;
