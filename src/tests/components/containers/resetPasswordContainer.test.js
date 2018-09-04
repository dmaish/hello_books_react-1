import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import ResetPasswordContainer from '../../../components/containers/resetPasswordContainer';

it('renders without crashing', () => {
  shallow(<ResetPasswordContainer store={store} />);
});
