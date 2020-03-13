import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './Home/HomeView';
import MyProfileView from './MyProfile/MyProfileView';
import ToursView from './Tours/ToursView';
import NotFound from './NotFound/NotFound'

const Routing = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/tours",
        component: ToursView,

    },
    {
        path: "/my-profile",
        component: MyProfileView,
    },
    {
        path: "*",
        component: NotFound,
    }
]

const Routes = () => {
    return <Switch>
        {Routing.map((route =>
            <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
    </Switch>
}

export default Routes;