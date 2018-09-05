import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import SearchBooks from '../../../components/containers/searchContainer';

it('renders without crashing', () => {
  const searchDiv = document.createElement('div');
  ReactDOM.render(<SearchBooks store={store} />, searchDiv);
  ReactDOM.unmountComponentAtNode(searchDiv);
});
