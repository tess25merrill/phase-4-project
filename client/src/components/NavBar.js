import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
