import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import ReturnBookModal from '../../../components/popups/returnBookPopUp';

it('renders without crashing', () => {
  const returnDiv = document.createElement('div');
  ReactDOM.render(<ReturnBookModal store={store} />, returnDiv);
});
