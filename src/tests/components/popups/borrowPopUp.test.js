import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import BorrowPopUp from '../../../components/popups/borrowPopUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BorrowPopUp store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
