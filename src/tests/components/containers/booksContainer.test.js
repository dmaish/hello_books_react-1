import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import AllBooks from '../../../components/containers/booksContainer';

it('renders without crashing', () => {
  shallow(<AllBooks store={store} />);
});
