import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/common/footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});
