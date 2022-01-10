import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login';

import { CONTACT_PATH, HOME_PATH, LOGIN_PATH } from './constants/routes';

function App() {
  return (
    <div className="container">
      <header>
        <Navigation />
      </header>
      <div className="row">
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={CONTACT_PATH} element={<Contact />} />
          <Route path={LOGIN_PATH} element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
