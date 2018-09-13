import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';
import LoginContainer from '../../../components/containers/loginContainer';

it('renders without crashing', () => {
  const loginDiv = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoginContainer store={store} />
    </BrowserRouter>,
    loginDiv,
  );
  ReactDOM.unmountComponentAtNode(loginDiv);
});
