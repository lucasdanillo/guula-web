import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path= '/' exact component={PrivacyPolicy} />
                <Route path= '/privacy-policy' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
