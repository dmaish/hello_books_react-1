import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import Featured from '../../../components/home/featured';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Featured store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
