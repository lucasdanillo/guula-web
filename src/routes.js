import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path= '/' exact component={Home} />
                <Route path= '/privacy-policy' component={PrivacyPolicy} />
            </Switch>
        </BrowserRouter>
    );
}
