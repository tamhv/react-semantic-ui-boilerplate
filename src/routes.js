import React from 'react';
import {Route, Switch} from 'react-router';
import {
    HomeView,
    NotFoundView,
    AboutView
} from "./containers";

export default (
    <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route path="/about" component={AboutView}/>
        <Route path="*" component={NotFoundView}/>
    </Switch>
);
