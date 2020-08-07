import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
                <Route path={process.env.PUBLIC_URL + '/privacy-policy'} exact component={PrivacyPolicy} />
            </Switch>
        </BrowserRouter>
    );
}
