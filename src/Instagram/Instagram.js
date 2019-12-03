import React, { Component } from 'react'
import './Instagram.scss'
import InstaToolbar from './toolbar/InstaToolbar'
import InstaPost from './Post/InstaPost';
import InstaStatus from './status/InstaStatus';
import Suggestion from './Suggestions/Suggestion';
import Profile from './Profile';

export class Instagram extends Component {
    render() {
        return (
            <div className="instagram">
              <InstaToolbar />
              <hr />
              <div className="container insta-container">
                <div className="row instgram-content">
                  <InstaPost  className="first"/>
                  <div className="second">
                    <Profile />
                    <InstaStatus />
                    <Suggestion />                           
                  </div>
                </div> 
              </div>
            </div>
        )
    }
}

export default Instagram
