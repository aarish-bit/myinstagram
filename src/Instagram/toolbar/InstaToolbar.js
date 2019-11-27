import React from 'react';
import './InstaToolbar.scss';

function InstaToolbar() {
  return (
    <div className="InstaToolbar">
      <div className="InstaToolbar-content">
        <div className="InstaToolbar-logo">
          <img src='./logo/instagram.jpg' className="insta-logo" alt="logo" />
          <span className="line-between"></span>
          <img src='./logo/images.png' className="insta-head" alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="&#61442; Search" className="search"></input>
        </div>
        <div className="insta-icons">
          <span><img src='./toolbar-icons/compass.png' className="user-logo" alt="logo" /></span>
          <span className="dropdown">
            <span type="button" className="btn dropdown-toggle" data-toggle="dropdown">
              <img src='./toolbar-icons/heart.png' alt="logo" />
            </span>
            <div className="dropdown-menu">
             hiii
            </div>
          </span> 
          <span><img src='./toolbar-icons/user.png' className="user-logo" alt="logo" /></span>
        </div>
      </div>
    </div>
  );
}

export default InstaToolbar;
