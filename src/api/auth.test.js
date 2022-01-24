import axios from 'axios';

import { loginAsync, registerAsync } from './auth';

jest.mock('axios');

const mockedUser = {
  email: 'mocked@email.com',
  password: 'mocked-password',
};

// const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

describe('Auth.js', () => {
  describe('loginAsync calls', () => {
    it('should return success true object', async () => {
      const message = 'mocked error message';
      axios.post.mockRejectedValueOnce(new Error(message));

      const result = await loginAsync(mockedUser.email, mockedUser.password);
      expect(axios.post).toHaveBeenCalledWith('/login', mockedUser);
      expect(result.success).toBeFalsy();
      expect(result.errorMessage).toEqual('Login failed. Please check your credentials.');
      expect(result.data).toBe(null);
    });

    it('should return success false object', async () => {
      const token = { data: { token: 'token-string' } };
      axios.post.mockResolvedValueOnce(token);

      const result = await loginAsync(mockedUser.email, mockedUser.password);
      expect(axios.post).toHaveBeenCalledWith('/login', mockedUser);
      expect(result.success).toBeTruthy();
      expect(result.errorMessage).toEqual('');
      expect(result.data).toEqual(token.data);
    });
  });
  describe('registerAsync calls', () => {});
});
