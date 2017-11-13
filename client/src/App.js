import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import CampaignBrowser from './modules/CampaignBrowser';
import Cause from './modules/Cause';
import Profile from './modules/Profile';

import Header from './elements/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={ CampaignBrowser } exact />
                    <Route path='/profile' component={ Profile } />
                    <Route path='/cause' component={ Cause } />
                    <Route
                        path="/:otherpage"
                        render={ () => (
                            <Redirect
                                to={{
                                    pathname: '/'
                                }}
                            />
                        ) }
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
