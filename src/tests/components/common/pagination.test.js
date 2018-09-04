import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import Pagination from '../../../components/common/pagination';

it('renders without crashing', () => {
  shallow(<Pagination store={store} />);
});
