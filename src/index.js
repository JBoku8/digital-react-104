import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { ProviderAuth } from './hook/useAuthState';
import ErrorBoundary from './components/ErrorBoundary';

import App from './App';

import './index.css';

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ProviderAuth>
          <App />
        </ProviderAuth>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
