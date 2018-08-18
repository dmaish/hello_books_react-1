/**
* The root store of the application is called here and run
*/

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import Application from './App';

ReactDom.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('root'));
