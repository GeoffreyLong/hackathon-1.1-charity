import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import Feed from './Feed';

import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const styles = StyleSheet.create({
    contentContainer: {
        width: '75%',
        margin: '1rem 12.5%'
    },
    contentHeader: {
        border: '1px solid ' + Colors.misty,
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-around'
    },
    profileSection: {
        width: '40%'
    },
    profileHeader: {
        width: '100%',
        backgroundColor: Colors.primary,
        padding: '1rem',
        color: Colors.white,
        display: 'inline-block',
        textAlign: 'center'
    },
    profileTitle: {
        fontSize: Typography.sizes.large
    },
    profileSubTitle: {
        fontSize: Typography.sizes.medium
    },
    goalSection: {
        width: '40%'
    },
    profilePhoto: {
        width: '80%',
        margin: '0 10%'
    },
    description: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
    },
    timeline: {
        marginTop: '2rem'
    },
    timelineImage: {
        margin: '1rem'
    }
});

class Cause extends React.Component {
    constructor() {
        super();

        this.profile = {
            title: 'Ash Ketchum',
            subtitle: 'Trying to be the very best',
            photos: {
                displayPhoto: 'http://www.behindthevoiceactors.com/_img/chars/ash-ketchum-pokemon-the-movie-diancie-and-the-cocoon-of-destruction-88.5.jpg'
            },
            description: 'I want to be the very best, like no one ever was. To catch them is my real test, to train them is my cause. \n\n I will travel across the land, searching far and wide. Teach pokémon to understand the power that\'s inside. \n\n Pokémon! Gotta catch \'em all! It\'s you and me. I know it\'s my destiny. Pokémon! Oh, you\'re my best friend, in a world we must defend. \n\n Pokémon! Gotta catch \'em all! A heart so true. Our courage will pull us through. You teach me, and I\'ll teach you, Pokémon! Gotta catch \'em all, gotta catch \'em all, POKEMON!',
            feed: [{
                description: (
                  <div>
                        <div> Thank you SO much for helping me buy a squirtle. Here I am with the little guy! </div>
                        <img
                            className={ css(styles.timelineImage ) }
                            src="https://cdn.bulbagarden.net/upload/thumb/0/04/Ash_and_Squirtle.png/200px-Ash_and_Squirtle.png"
                        />
                    </div>
                ),
                createTime: 1510435257
            }, {
                description: (
                    <div>
                        <div> Thank you very much for funding my PokeDex! Today I got to use it to identify a Koffin. I am up to 21 types identified! </div>
                        <img
                            className={ css(styles.timelineImage ) }
                            src="https://i.imgur.com/yYKUbZS.gif"
                        />
                    </div>
                ),
                creatTime: 1507756857
            }]
        }
    }

    render() {
        return (
            <div className={ css(styles.contentContainer) }>
                <div className={ css(styles.contentHeader) }>
                    <div className={ css(styles.profileSection) }>
                        <div className={ css(styles.profileHeader)}>
                            <div className={ css(styles.profileTitle) }>
                                { this.profile.title }
                            </div>
                            <div className={ css(styles.profileSubTitle) }>
                                { this.profile.subtitle }
                            </div>
                        </div>
                        <pre className={ css(styles.description) }>
                            { this.profile.description }
                        </pre>
                    </div>
                    <div className={ css(styles.goalSection) }>
                        <img
                            className={ css(styles.profilePhoto) }
                            src={ this.profile.photos.displayPhoto }
                        />
                    </div>
                </div>

                <div className={ css(styles.timeline) }>
                    { this.profile.feed.map(item => (
                        <Feed
                            description={ item.description }
                            time={ item.createTime }
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Cause;
