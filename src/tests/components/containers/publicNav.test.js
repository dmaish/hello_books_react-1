import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import Nav from '../../../components/containers/publicNav';

it('renders without crashing', () => {
  shallow(<Nav store={store} />);
});
