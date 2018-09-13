import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import Main from '../../../components/home/main';

it('renders without crashing', () => {
  shallow(<Main store={store} />);
});
