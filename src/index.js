/**
 * The root store of the application is called here and run
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Application from './App';

/**
 * ReactDOM.render(element, container[, callback])
 * The store wrapped in the Provider is the element/Object to appear in the screen
 * Desired properties/compoonent instance/DOM node/immutable
 * ReactDom.render control the content of container passed
 * And does not modify the container but its children
 * Container passed is Application, containing all routes/element of application
 * Application is also a component that returns elements as result of all app routes
 * Wrapped into provider and can note the changes in the store
 */
ReactDom.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);

/**
 * document.getElementById("root")); callback that is class the attributes "root"
 * This is where the dom is manioulated and element appear
 */

// In the main application
// Callback is function passed in another function as an argument
// ReactDom.render takes a JSX expression, creates a corresponding tree of DOM nodes,
// and adds that tree to the DOM, then make it appear on screen.
