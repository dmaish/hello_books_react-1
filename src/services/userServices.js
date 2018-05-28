export const userServices = {
  register
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringfy(user)
  };
  return fetch('http://127.0.0.1:5000/api/v1/auth/register',
  requestOptions).then
  (handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
}
