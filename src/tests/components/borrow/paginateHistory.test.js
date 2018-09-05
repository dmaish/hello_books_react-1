import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import PaginateHistory from '../../../components/borrow/paginateHistory';

it('render without crashing', () => {
  const paginateHistory = document.createElement('div');
  ReactDOM.render(<PaginateHistory store={store} />, paginateHistory);
  ReactDOM.unmountComponentAtNode(paginateHistory);
});
