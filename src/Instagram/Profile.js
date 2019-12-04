import React from 'react'
import './Instagram.scss'

export default function Profile() {
  return (
    <div className="profile">
      <img src="/post/aarish.jpg" alt="dp" className="profile-dp"></img>
      <span className="profile-disc">
      <label><strong>nightmare_king</strong></label>                   
      <label className="user">Aarish Hussain</label>                   
      </span>
    </div>
  )
}
