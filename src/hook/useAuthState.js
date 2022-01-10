import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../constants/app';
import { LOGIN_PATH } from '../constants/routes';

export const useAuthState = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      return { isLoggedIn: true };
    }
    return { isLoggedIn: false };
  });

  return {
    ...authStatus,
    logOut: () => {
      localStorage.removeItem(TOKEN_KEY);
      setAuthStatus({ isLoggedIn: false });
      navigate(LOGIN_PATH);
    },
  };
};
