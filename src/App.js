import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Loader } from './components/Loader';

import Home from './pages/home';

// Code Splitting
// import Contact from './pages/contact';
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH, LOGIN_PATH } from './constants/routes';

const Contact = React.lazy(() => import('./pages/contact'));
const Login = React.lazy(() => import('./pages/login'));
const About = React.lazy(() => import('./pages/about'));

function App() {
  return (
    <div className="container">
      <header>
        <Navigation />
      </header>
      <div className="row">
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route
            path={CONTACT_PATH}
            element={
              <Suspense fallback={<Loader title="Contact" />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path={LOGIN_PATH}
            element={
              <Suspense fallback={<Loader title="Login" />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path={ABOUT_PATH}
            element={
              <Suspense fallback={<Loader title="About" />}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
