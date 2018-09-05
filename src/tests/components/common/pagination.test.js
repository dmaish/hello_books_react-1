import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import Pagination from '../../../components/common/pagination';

it('renders without crashing', () => {
  const pagination = document.createElement('div');
  ReactDOM.render(<Pagination store={store} />, pagination);
  ReactDOM.unmountComponentAtNode(pagination);
});
