import React from 'react';
import './Toolbar.scss';
import { NavLink } from 'react-router-dom';


function Toolbar() {
  
  return (
    <div className="toolbar">
      <header className="toolbar-content">
        <ul>
          <li>
            <NavLink to="/">
              <b>Home</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Instagram">
              <b>Instagram</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Admin">
              <b>Admin</b>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Toolbar;
