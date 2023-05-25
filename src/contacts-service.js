import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = async credentials => {
  const response = await axios.post('/users/signup', credentials);
  setAuthHeader(response.data.token);
  return response.data;
};

export const loginUser = async credentials => {
  const response = await axios.post('/users/login', credentials);
  setAuthHeader(response.data.token);
  return response.data;
};

export const logOutUser = async () => {
  const response = await axios.post('/users/logout');
  clearAuthHeader();
  return response.data;
};

export const getCurrentUser = async persistedToken => {
  setAuthHeader(persistedToken);
  const response = await axios.get('/users/current');
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addNewContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContactById = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
