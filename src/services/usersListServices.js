/**
 * It contains all fetch requests services for getting all users
 */
import { accessToken } from '../helpers/token';

export const usersList = () => {
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken().access_token}` },
  };
  return fetch('https://stark-falls-93345.herokuapp.com/admin/users/', requestOptions).then(
    handleResponse,
  );
};

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.json());
  }
  return response.json();
}
