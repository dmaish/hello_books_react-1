import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import UserDashboard from '../../../components/dashboard/userDashboard';

it('renders without crashing', () => {
  const userDashboardDiv = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <UserDashboard />
      </BrowserRouter>
    </Provider>,
    userDashboardDiv,
  );
  ReactDOM.unmountComponentAtNode(userDashboardDiv);
});
