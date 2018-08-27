/**
*  Actions triggerred when alert is dispatched
*/

// Import alert constant types form alertTypes
import {alertConstants} from "./alertTypes";

// Export success, error and clear as alertActions
export const alertActions = {
	success,
	error,
	clear
};
// Success function to alert the user incase of success in
// functionalities of application such as addbook success
function success (message){
	return {type: alertConstants.SUCCESS, message};
}
// Error function to alert the user incase of error in
// functionalities of application such as addbook error
function error(message){
	return {type: alertConstants.ERROR, message};
}
// Clear function on the alert
function clear(){
	return {type: alertConstants.CLEAR};
}
