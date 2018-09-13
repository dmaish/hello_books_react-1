import React from 'react';
import ReactDOM from 'react-dom';
import SearchButton from '../../../components/common/searchButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
