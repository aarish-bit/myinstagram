import React, { Component } from 'react';
import './InstaStatus.scss'
import Status from "./Status.json";

export class InstaStatus extends Component {
    render() {
        return (
            <div className="instastatus">
               <div className="status-head">
                <span className="stories-tag">Stories</span>
                <span className="watch-all"><strong>Watch All</strong></span>
               </div> 
               <div className="container">
               {Status.map((Stories) => {
                  return (
                      <div className="row stories"  key={Stories.id}>
                        <img src={Stories.dp} alt="dp"></img>
                        <span className="story-disc">
                          <label><strong>{Stories.username}</strong></label>                   
                          <label className="mins-ago">{Stories.minago}</label>                   
                        </span>
                      </div>
                    )
                })} 
               </div>              
            </div>
        )
    }
}

export default InstaStatus
