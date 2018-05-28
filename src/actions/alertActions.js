import {alertConstants} from "./alertTypes";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return {type: alertConstants.SUCCESS, message};
}
function error(message) {
  return {tpe: alertConstants.ERROR, message};
}
function clear() {
  return {type: alertConstants.CLEAR};
}
