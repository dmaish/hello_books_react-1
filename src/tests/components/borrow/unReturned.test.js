import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import UnReturnedBook from '../../../components/borrow/unReturned';

it('renders without crashing', () => {
  const unReturnedDiv = document.createElement('div');
  ReactDOM.render(<UnReturnedBook store={store} />, unReturnedDiv);
  ReactDOM.unmountComponentAtNode(unReturnedDiv);
});
