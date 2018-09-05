import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';
import ResetPasswordContainer from '../../../components/containers/resetPasswordContainer';

it('renders without crashing', () => {
  const resetPasswordDiv = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ResetPasswordContainer store={store} />
    </BrowserRouter>,
    resetPasswordDiv,
  );
  ReactDOM.unmountComponentAtNode(resetPasswordDiv);
});
