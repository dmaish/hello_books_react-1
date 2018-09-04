import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import DeletePopUp from '../../../components/popups/deleteBookPopUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeletePopUp store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
