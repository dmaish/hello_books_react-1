import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storage from 'mock-local-storage';
import store from '../../../store';
import BorrowHistory from '../../../components/borrow/borrowingHistory';

it('renders without crashing', () => {
  const borrowHistory = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BorrowHistory />
    </Provider>,
    borrowHistory,
  );
  ReactDOM.unmountComponentAtNode(borrowHistory);
});
