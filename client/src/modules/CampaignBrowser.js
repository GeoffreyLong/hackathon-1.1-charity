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
        height: '200px',
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
    },
    isFinished: {
        height: '100%',
        width: '100%'
    }
});

class CauseBrowser extends React.Component {
    constructor() {
        super();

        this.state = {
            campaigns: [{
                id: 1,
                title: 'Noah Needs a Turtle',
                subtitle: 'He like turtles',
                description: 'Noah needs a turtle. He keeps on losing them down drains in the hopes they will become Teenage Mutant Ninja Turtles.',
                photos: {
                    displayPhoto: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 40,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Design-Toscano-Gilbert-Turtle-Multicolored/dp/B00BB572Y0/ref=sr_1_1_sspa?ie=UTF8&qid=1510605838&sr=8-1-spons&keywords=turtle&refinements=p_72%3A2661618011&psc=1',
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
                title: 'Ash needs a Pikachu',
                subtitle: 'Ash is trying to build out his PokeDex',
                description: 'He wants to be the best, like no one ever was. To catch them is his real test; to train them is his cause. Unfortunately, he could not catch a pikachu',
                photos: {
                    displayPhoto: 'https://cdn.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/250px-Ash_Pikachu.png'
                },
                goal: {
                    amount: 10000,
                    pledged: 300,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Pokemon-Center-Original-Sleeping-Pikachu/dp/B01931RATU/ref=sr_1_3?ie=UTF8&qid=1510606139&sr=8-3&keywords=pikachu',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Ash Ketchum',
                    photos: {
                        displayPhoto: 'http://www.behindthevoiceactors.com/_img/chars/ash-ketchum-pokemon-the-movie-diancie-and-the-cocoon-of-destruction-88.5.jpg'
                    }
                }
            }, {
                id: 3,
                title: 'Luke Needs a Hand',
                subtitle: 'Lost in Cloud City',
                description: 'Luke\'s father took Luke\'s hand away. Please help Luke buy a new one! It should be animatronic, and should respond when you poke it with a needle',
                photos: {
                    displayPhoto: 'https://vignette.wikia.nocookie.net/starwars/images/a/a0/LukeHand.png/revision/latest?cb=20130325041744'
                },
                goal: {
                    amount: 25,
                    pledged: 20,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/US-Toy-Robot-Hand-Pack/dp/B00362KX9W/ref=sr_1_6?s=toys-and-games&ie=UTF8&qid=1510606099&sr=1-6&keywords=robot+hand&dpID=41wTQraq1iL&preST=_SY300_QL70_&dpSrc=srch',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Luke Skywalker',
                    photos: {
                        displayPhoto: 'http://cdn.playbuzz.com/cdn/cf28c3f8-0da1-4dc4-8299-53a82b498dac/55d9a8ee-1802-4767-89d0-35d01f4f8da3.jpg'
                    }
                }
            }, {
                id: 4,
                title: 'Stranger Things needs a Dart',
                subtitle: 'Trying to buy a new Dart',
                description: 'You probably shouldn\'t fund this one',
                photos: {
                    displayPhoto: 'https://cdn3.whatculture.com/images/2017/10/a4f09e1d94ba3200-600x400.jpg'
                },
                goal: {
                    amount: 100,
                    pledged: 0,
                    deadline: 1510876800000,
                    item: 'https://www.amazon.com/Yellow-Turtles-Moveable-Charm-Pendant/dp/B00KFQ2WFA/ref=sr_1_3?ie=UTF8&qid=1510583926&sr=8-3&keywords=gold+turtle',
                    deliveryInfo: {
                        address: 'none'
                    }
                },
                user: {
                    displayName: 'Dustin Henderson',
                    photos: {
                        displayPhoto: 'https://images.hellogiggles.com/uploads/2016/08/08055255/GATEN1-700x525.jpg'
                    }
                }
            }]
        };
    }

    // HACK: Workaround for backend... Should change this to a call later when seed data out
    donate(amount, campaignId) {
        const campaignsClone = this.state.campaigns.slice();
        const curCampaign = campaignsClone.find(campaign => campaign.id === campaignId);
        curCampaign.goal.pledged += amount;

        if (curCampaign.goal.pledged === curCampaign.goal.amount) {
            curCampaign.isFinished = true;

            setTimeout(() => {
                campaignsClone.splice(campaignsClone.indexOf(curCampaign), 1);
                this.setState({
                    campaigns: campaignsClone
                })
            }, 4000);
        }

        this.setState((prevState) => {
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
                        { campaign.isFinished ? (
                            <img
                                className={ css(styles.isFinished) }
                                src='https://i.giphy.com/media/P9hygc0S8eVs4/giphy.webp'
                            />
                        ) : (
                            <div>
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
                        )}
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
