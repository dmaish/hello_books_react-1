import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import UsersList from '../../../components/containers/usersListContainer';

it('renders without crashing', () => {
  const usersList = document.createElement('div');
  ReactDOM.render(<UsersList store={store} />, usersList);
  ReactDOM.unmountComponentAtNode(usersList);
});
