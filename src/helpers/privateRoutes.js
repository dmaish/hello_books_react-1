/**
 * Creating private/protected routes
 * This protects the endpoints which need authentication
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('access_token') ? (
    // Check if token is available and direct the user to the component
      <Component {...props} />
    ) : (
    // Then redirect to the homepage when token is missing
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);
export default PrivateRoute;
