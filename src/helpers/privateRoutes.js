/**
* Creating private/protected routes
* This protects the endpoints which need authentication
*/

import React from "react";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({component:Component, ...rest}) => (
  <Route {...rest} render={props => (
    localStorage.getItem("access_token")
    ?<Component {...props}/>
    : <Redirect to={{pathname: "/", state: {from: props.location}}}/>
  )}/>
)
