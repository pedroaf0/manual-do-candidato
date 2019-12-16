import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import index from './pages/index'
import modo from './pages/modo-de-acesso'
export default function routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact component={index} />
                <Route path="/modo-de-acesso/:id" component={modo}/>
                <Route path="/modo-de-acesso/" component={modo}/>
            </Switch>
        </HashRouter>
    );
}
