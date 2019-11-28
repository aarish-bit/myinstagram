import React from 'react';
import './InstaToolbar.scss';
import notifications from './notify.json'

function InstaToolbar() {
  return (
    <div className="InstaToolbar">
      <div className="InstaToolbar-content">
        <div className="InstaToolbar-logo">
          <img src="./toolbar-icons/camera.png" alt="camera" className="insta-camera" />
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
              {notifications.map((notify)=>{
                return (
                  <div className="notify"  key={notify.id}>
                    <img src={notify.dp} alt="dp"></img>
                    <span className="user-disc">
                      <label><strong>{notify.username}</strong></label>                   
                    </span>
                    <button className="btn">Follow</button>
                  </div>
                )
              })}
            </div>
          </span> 
          <span><img src='./toolbar-icons/user.png' className="user-logo" alt="logo" /></span>
          <span><img src="./toolbar-icons/share.jpeg" alt="" className="share-logo"></img></span>
        </div>
      </div>
    </div>
  );
}

export default InstaToolbar;
