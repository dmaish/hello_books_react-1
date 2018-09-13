import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import UserProfile from '../../../components/dashboard/userProfile';

it('renders without crashing', () => {
  const profileCol = document.createElement('col');
  ReactDOM.render(<UserProfile store={store} />, profileCol);
  ReactDOM.unmountComponentAtNode(profileCol);
});
