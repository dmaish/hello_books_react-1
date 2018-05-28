import {userConstants} from "../actions/actionTypes";

export function registration(state = {}, {type}) {
  switch (type) {
    case userConstants.REGISTER_REQUEST:
    return {registering: true};
    case userConstants.REGISTER_SUCCESS:
    return {};
    case userConstants.REGISTER_FAILURE:
    return {};
    default:
    return state
  }
}
