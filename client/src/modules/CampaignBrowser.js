import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import DonateButton from '../elements/DonateButton';

import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const styles = StyleSheet.create({
    contentContainer: {
        padding: '1rem'
    },
    campaignRow: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    campaign: {
        width: '30%',
        margin: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
    },
    campaignHeader: {
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titles: {
        padding: '1rem'
    },
    title: {
        fontSize: Typography.sizes.large
    },
    subtitle: {
        color: Colors.cloudy
    },
    infoIcon: {
        height: '25px',
        width: '25px'
    },
    campaignPhoto: {
        width: '100%',
        height: '100px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    user: {
        display: 'flex',
        alignItems: 'top',
        padding: '0.5rem 2rem'
    },
    userPhoto: {
        height: '50px',
        width: '50px',
        borderRadius: '50%'
    },
    userName: {
        fontSize: Typography.sizes.medium,
        padding: '0.25rem 1rem',
        fontWeight: 'bold'
    },
    campaignDescription: {
        padding: '1rem'
    },
    goal: {
        padding: '1.5rem'
    },
    goalBar: {
        border: '1px solid ' + Colors.cloudy,
        width: '100%',
        height: '20px'
    },
    goalBarFill: {
        backgroundColor: Colors.green,
        height: '16px',
        margin: '2px',
        display: 'inline-block'
    }
});

class CauseBrowser extends React.Component {
    constructor() {
        super();

        this.state = {
            campaigns: [{
                id: 1,
                title: 'Noah Needs a Turtle',
                subtitle: 'I like turtles',
                description: 'Noah needs a turtle, but cannot afford one',
                photos: {
                    displayPhoto: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 40,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Yellow-Turtles-Moveable-Charm-Pendant/dp/B00KFQ2WFA/ref=sr_1_3?ie=UTF8&qid=1510583926&sr=8-3&keywords=gold+turtle',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Noah Radding',
                    photos: {
                        displayPhoto: 'http://i0.kym-cdn.com/photos/images/original/000/181/201/i-like-turtles.jpg'
                    }
                }
            }, {
                id: 2,
                title: 'Noah Needs a Turtle',
                subtitle: 'I like turtles',
                description: 'Noah needs a turtle, but cannot afford one',
                photos: {
                    displayPhoto: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 40,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Yellow-Turtles-Moveable-Charm-Pendant/dp/B00KFQ2WFA/ref=sr_1_3?ie=UTF8&qid=1510583926&sr=8-3&keywords=gold+turtle',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Noah Radding',
                    photos: {
                        displayPhoto: 'http://i0.kym-cdn.com/photos/images/original/000/181/201/i-like-turtles.jpg'
                    }
                }
            }, {
                id: 3,
                title: 'Noah Needs a Turtle',
                subtitle: 'I like turtles',
                description: 'Noah needs a turtle, but cannot afford one',
                photos: {
                    displayPhoto: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 40,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Yellow-Turtles-Moveable-Charm-Pendant/dp/B00KFQ2WFA/ref=sr_1_3?ie=UTF8&qid=1510583926&sr=8-3&keywords=gold+turtle',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Noah Radding',
                    photos: {
                        displayPhoto: 'http://i0.kym-cdn.com/photos/images/original/000/181/201/i-like-turtles.jpg'
                    }
                }
            }, {
                id: 4,
                title: 'Noah Needs a Turtle',
                subtitle: 'I like turtles',
                description: 'Noah needs a turtle, but cannot afford one',
                photos: {
                    displayPhoto: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 40,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Yellow-Turtles-Moveable-Charm-Pendant/dp/B00KFQ2WFA/ref=sr_1_3?ie=UTF8&qid=1510583926&sr=8-3&keywords=gold+turtle',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Noah Radding',
                    photos: {
                        displayPhoto: 'http://i0.kym-cdn.com/photos/images/original/000/181/201/i-like-turtles.jpg'
                    }
                }
            }]
        };
    }

    // HACK: Workaround for backend... Should change this to a call later when seed data out
    donate(amount, campaignId) {
        this.setState((prevState) => {
            const campaignsClone = prevState.campaigns.slice();
            campaignsClone.find(campaign => campaign.id === campaignId).goal.pledged += amount;

            return {
                campaigns: campaignsClone
            }
        });
    }

    renderRow(campaigns, i) {
        return (
            <div
                className={ css(styles.campaignRow) }
                key={ 'campaign-row-' + i }
            >
                { campaigns.map(campaign => (
                    <div
                        className={ css(styles.campaign) }
                        key={ 'campaign-' + campaign.id }
                    >
                        <div className={ css(styles.campaignHeader) }>
                            <div className={ css(styles.titles) }>
                                <div className={ css(styles.title) }>
                                    { campaign.title }
                                </div>
                                <div className={ css(styles.subtitle) }>
                                    { campaign.subtitle }
                                </div>
                            </div>
                            <img
                                className={ css(styles.infoIcon) }
                                src='https://openclipart.org/image/2400px/svg_to_png/274087/1488160614.png'
                            />
                        </div>
                        <div
                            className={ css(styles.campaignPhoto) }
                            style={{
                                backgroundImage: 'url(' + campaign.photos.displayPhoto + ')'
                            }}
                        />
                        <div
                            className={ css(styles.user) }
                        >
                            <img
                                src={ campaign.user.photos.displayPhoto }
                                className={ css(styles.userPhoto) }
                            />
                            <div className={ css(styles.userName) }> { campaign.user.displayName } </div>
                        </div>
                        <div className={ css(styles.campaignDescription) }>
                            { campaign.description }
                        </div>
                        <div className={ css(styles.goal) }>
                            { '$' + campaign.goal.pledged + ' of $' + campaign.goal.amount }
                            <div
                                className={ css(styles.goalBar) }
                            >
                                <span
                                    className={ css(styles.goalBarFill) }
                                    style={{
                                        width: (campaign.goal.pledged / campaign.goal.amount) * 100 + '%'
                                    }}
                                />
                            </div>
                        </div>
                        <DonateButton
                            remaining={ campaign.goal.amount - campaign.goal.pledged }
                            onDonate={ (amount) => this.donate(amount, campaign.id) }
                        />
                    </div>
                )) }
            </div>
        )
    }

    renderCampaigns() {
        const campaigns = [];

        for (let i = 0; i < this.state.campaigns.length; i += 3) {
            campaigns.push(this.renderRow(this.state.campaigns.slice(i, i+3), i));
        }

        return campaigns;
    }

    render() {
        return (
            <div className={ css(styles.contentContainer) }>
                <div>
                    { this.renderCampaigns() }
                </div>
            </div>
        )
    }
}

export default CauseBrowser;
