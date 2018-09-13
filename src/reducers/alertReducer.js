/**
 * This is alert reducers
 * When there is any alert, this is the reducer called
 */

import { alertConstants } from '../actions/alertTypes';

export const alert = (state = {}, { type, message }) => {
  switch (type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message,
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
