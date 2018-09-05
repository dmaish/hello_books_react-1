import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import expect from 'expect';
import store from '../store';
import Application from '../App';

it('renders without crashing', () => {
  const app = mount(
    <Provider store={store}>
      <Application />
    </Provider>,
  );
  expect(app.length).toEqual(1);
});
