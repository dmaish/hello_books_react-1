import React from 'react';
import { shallow } from 'enzyme';
import storage from 'mock-local-storage';
import store from '../../../store';
import EditBook from '../../../components/containers/editContainer';

it('render without crashing', () => {
  shallow(<EditBook store={store} />);
});
