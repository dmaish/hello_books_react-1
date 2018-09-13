import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/common/header';

it('renders without crashing', () => {
  shallow(<Header />);
});
