/**
* Get token from local storage to be used for authentication
*/

export function accessToken () {
	let access_token = JSON.parse(localStorage.getItem("access_token"));
	if (access_token) {
		return {"access_token": access_token};
	}
	else {
		return {};
	}
}
