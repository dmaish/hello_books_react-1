import React from 'react';
import ReactDOM from 'react-dom';
import RecentlyAdded from "../../../components/home/recentlyAdded";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentlyAdded />, div);
  ReactDOM.unmountComponentAtNode(div);
});
