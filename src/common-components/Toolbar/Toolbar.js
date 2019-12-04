import React from 'react';
import './Toolbar.scss';
import { NavLink } from 'react-router-dom';


function Toolbar() {
  
  return (
    <div className="toolbar">
      <header className="toolbar-content">
            <NavLink to="/Instagram">
              <b>Instagram</b>
            </NavLink>
      </header>
    </div>
  );
}

export default Toolbar;
