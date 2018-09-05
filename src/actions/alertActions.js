/**
 *  Actions triggerred when alert is dispatched
 */

// Import alert constant types form alertTypes
import { alertConstants } from './alertTypes';

// Success function to alert the user incase of success in
// functionalities of application such as addbook success
const success = message => ({ type: alertConstants.SUCCESS, message });
// Error function to alert the user incase of error in
// functionalities of application such as addbook error
const error = message => ({ type: alertConstants.ERROR, message });
// Clear function on the alert
const clear = () => ({ type: alertConstants.CLEAR });

// Export success, error and clear as alertActions
export const alertActions = {
  success,
  error,
  clear,
};
