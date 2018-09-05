import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import AdminDashboard from '../../../components/dashboard/adminDashboard';

it('renders without crashing', () => {
  const adminDashboardDiv = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    </Provider>,
    adminDashboardDiv,
  );
  ReactDOM.unmountComponentAtNode(adminDashboardDiv);
});
