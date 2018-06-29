export function accessToken() {
	let access_token = JSON.parse(localStorage.getItem("access_token"));
	if (access_token) {
		return {"Authorization": "Bearer " + access_token.access_token};
	}
	else {
		return {};
	}
}
