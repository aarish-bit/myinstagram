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
            <NavLink to="/Game">
              <b>tic-tac-toe</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Matrix">
              <b>Matrix</b>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Toolbar;
