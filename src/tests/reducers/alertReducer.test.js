import expect from 'expect';
import { alertConstants } from '../../actions/alertTypes';
import { alert } from '../../reducers/alertReducer';

describe('Alert reducers', () => {
  it('alert and should return state', () => {
    expect(alert(undefined, {})).toEqual({});
  });
  it('get users and should handle alertConstants.SUCCESS', () => {
    expect(
      alert([], {
        type: alertConstants.SUCCESS,
        message: 'success message',
      }),
    ).toEqual({
      type: 'alert-success',
      message: 'success message',
    });
  });
  it('get users and should handle alertConstants.CLEAR', () => {
    expect(
      alert([], {
        type: alertConstants.CLEAR,
      }),
    ).toEqual({});
  });
  it('get users and should handle alertConstants.ERROR', () => {
    expect(
      alert([], {
        type: alertConstants.ERROR,
        message: 'error message',
      }),
    ).toEqual({
      type: 'alert-danger',
      message: 'error message',
    });
  });
});
