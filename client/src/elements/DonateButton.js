import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const styles = StyleSheet.create({
    donateButton: {
        fontSize: Typography.sizes.medium,
        cursor: 'pointer',
        borderRadius: '3px',
        width: '100px',
        margin: '0.5rem auto',
        padding: '0.5rem 1rem',
        textAlign: 'center',
        ':hover': {
            background: Colors.misty
        }
    },
    donationOptions: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    back: {
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        ':hover': {
            background: Colors.lightRed
        }
    },
    donationOption: {
        padding: '0.5rem',
        fontSize: Typography.sizes.medium,
        borderRadius: '50%',
        border: '2px solid ' + Colors.cloudy,
        ':hover': {
            backgroundColor: Colors.green
        }
    },
    donationCustom: {
        padding: '0.5rem',
        borderRadius: '5px',
        ':hover': {
            backgroundColor: Colors.green
        }
    },
    donationCustomInput: {
        width: '40px',
        height: '20px'
    }
});

class DonateButton extends React.Component {
    constructor() {
        super();

        this.state = {
            isActive: false,
            customDonationAmount: 0
        }
    }

    donate(amt) {
        console.log(amt);
    }

    render() {
        if (this.state.isActive) {
            return (
                <div
                    className={ css(styles.donationOptions) }
                >
                    <div
                        className={ css(styles.donationBack) }
                        onClick={ () => this.setState({ isActive: false }) }
                    >
                        <img
                            className={ css(styles.back) }
                            src='http://downloadicons.net/sites/default/files/left-arrow-icon-93018.png'
                        />
                    </div>
                    <div
                        className={ css(styles.donationOption) }
                        onClick={ () => this.donate(1) }
                    >
                        $1
                    </div>
                    <div
                        className={ css(styles.donationOption) }
                        onClick={ () => this.donate(5) }
                    >
                        $5
                    </div>
                    <div
                        className={ css(styles.donationOption) }
                        onClick={ () => this.donate(20) }
                    >
                        $20
                    </div>
                    <div
                        className={ css(styles.donationCustom) }
                        onClick={ () => this.donate(this.state.customDonationAmount) }
                    >
                        Custom:{' '}
                        <input
                            className={ css(styles.donationCustomInput) }
                            type="number"
                            value={ this.state.customDonationAmount }
                            onChange={ e => this.setState({ customDonationAmount: e.target.value }) }
                            onClick={ (e) => e.stopPropagation() }
                        />
                    </div>
                </div>
            )
        }

        return (
            <div
                className={ css(styles.donateButton) }
                onClick={ () => this.setState({ isActive: true }) }
            >
                DONATE
            </div>
        )
    }
}

export default DonateButton;
