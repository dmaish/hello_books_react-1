import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';
import SignUpContainer from '../../../components/containers/signupContainer';

it('renders without crashing', () => {
  const signupDiv = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignUpContainer store={store} />
    </BrowserRouter>,
    signupDiv,
  );
  ReactDOM.unmountComponentAtNode(signupDiv);
});
