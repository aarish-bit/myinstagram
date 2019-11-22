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
          <img src='./toolbar-icons/compass.png' className="user-logo" alt="logo" />
          <img src='./toolbar-icons/heart.png' className="user-logo" alt="logo" />
          <img src='./toolbar-icons/user.png' className="user-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default InstaToolbar;
