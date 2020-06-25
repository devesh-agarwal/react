import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const ModernMenu = lazy(() => import('../ModernMenu/ModernMenu'));
const CardsMenu = lazy(() => import('../CardsMenu/CardsMenu'));
const StandardMenu = lazy(() => import('../StandardMenu/StandardMenu'));
const About = lazy(() => import('../About/About'));

function Router() {
    const element = (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={CardsMenu} />
                    <Route path='/modern-menu' component={ModernMenu} />
                    <Route path="/cards-menu" component={CardsMenu} />
                    <Route path="/standard-menu" component={StandardMenu} />
                    <Route path="/about" component={About} />
                </Switch></Suspense>
        </BrowserRouter>
    )
    return element;
}

export default Router;