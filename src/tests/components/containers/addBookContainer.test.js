import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import AddBookContainer from '../../../components/containers/addBookContainer';

it('renders without crashing', () => {
  const addBookContainer = document.createElement('div');
  ReactDOM.render(<AddBookContainer store={store} />, addBookContainer);
  ReactDOM.unmountComponentAtNode(addBookContainer);
});
