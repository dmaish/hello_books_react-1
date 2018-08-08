import React from 'react';
import ReactDOM from 'react-dom';
import InternetError from "../../../components/common/internetError";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InternetError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
