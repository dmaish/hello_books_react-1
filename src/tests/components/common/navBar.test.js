import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../../components/common/navBar';

it('renders without crashing', () => {
  shallow(<NavBar />);
});
