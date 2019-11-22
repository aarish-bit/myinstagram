import React, { Component } from 'react'
import './Instagram.scss'
import InstaToolbar from './toolbar/InstaToolbar'
import InstaPost from './Post/InstaPost';
import InstaStatus from './status/InstaStatus';

export class Instagram extends Component {
    render() {
        return (
            <div className="instagram">
                <InstaToolbar />
                <hr />
               <div className="row instgram-content">
                  <InstaPost  className="col-md-7"/>
                  <InstaStatus className="col-md-5"/>
               </div> 
            </div>
        )
    }
}

export default Instagram
