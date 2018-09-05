import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import expect from 'expect';
import ReactDOM from 'react-dom';
import store from '../../../store';
import SingleBook from '../../../components/page/singleBook';

it('renders without crashing', () => {
  const singlePageDiv = document.createElement('div');
  ReactDOM.render(<SingleBook store={store} />, singlePageDiv);
});
