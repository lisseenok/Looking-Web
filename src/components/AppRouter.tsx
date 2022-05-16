import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {ADD_HOSTEL_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {useAuth} from "../hooks/use-auth";

const AppRouter = () => {
    const {isAuth, email} = useAuth();
    return isAuth ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={HOME_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={HOME_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;