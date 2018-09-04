import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import store from '../store';
import Application from '../App';

it('renders without crashing', () => {
  const app = mount(<Application store={store} />);
  expect(app.length).toEqual(1);
});
