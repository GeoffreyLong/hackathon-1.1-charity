import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import CauseBrowser from './modules/CauseBrowser';
import Cause from './modules/Cause';
import Profile from './modules/Profile';

import Header from './elements/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={ CauseBrowser } exact />
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
