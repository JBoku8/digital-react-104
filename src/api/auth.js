import axios from 'axios';

export const loginAsync = async (email, password) => {
  const response = await axios.post('/login', {
    email,
    password,
  });
  return response.data;
};

export const registerAsync = async (email, password) => {
  const response = await axios.post('/register', {
    email,
    password,
  });
  return response.data;
};
