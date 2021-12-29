import { Link } from 'react-router-dom';

import { HOME_PATH, CONTACT_PATH } from '../../constants/routes';

function Navigation() {
  return (
    <nav
      style={{
        display: 'flex',
        borderBottom: '1px solid #ccc',
        paddingBottom: '1rem',
      }}
    >
      <Link to={HOME_PATH}>Home</Link>

      <Link to={CONTACT_PATH}>Contact</Link>
    </nav>
  );
}

export default Navigation;
