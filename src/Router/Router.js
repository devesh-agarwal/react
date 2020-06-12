import { BrowserRouter, Switch,  } from 'react-router-dom';

import React, { Suspense, lazy } from 'react';

import Header from '../Header/Header';
import ModernMenu from '../ModernMenu/ModernMenu'
import CardsMenu from '../CardsMenu/CardsMenu';
import About from '../About/About'
import StandardMenu from '../StandardMenu/StandardMenu'
import {Route} from 'react-router';
function Router() {
    const element = (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>

                <Route exact path="/" component={CardsMenu} />
                <Route  path='/Header' component={Header} />
                <Route  path='/modern-menu' component={ModernMenu} />
                <Route   path="/cards-menu" component={CardsMenu} />
                <Route   path="/standard-menu" component={StandardMenu} />
                <Route   path="/about" component={About} />
                </Switch></Suspense>
            </BrowserRouter>
    )
    return element;
}

export default Router;