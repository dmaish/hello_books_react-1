export const userServices = {
  register,
  login
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/register',
  requestOptions)
  .then(handleResponse);
}

function login(user) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/login',
  requestOptions)
  .then(handleResponse)
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
}
