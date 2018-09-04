import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import AddBookContainer from '../../../components/containers/addBookContainer';

it('renders without crashing', () => {
  shallow(<AddBookContainer store={store} />);
});
