import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import Landing from '../../../components/landing';

it('renders without crashing', () => {
  shallow(<Landing store={store} />);
});
