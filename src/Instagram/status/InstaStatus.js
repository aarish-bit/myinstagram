import React, { Component } from 'react'
import Status from "./Status.json";

export class InstaStatus extends Component {
    render() {
        return (
            <div className="instastatus">
                {Status.map((Stories) => {
                  return (
                    <div key={Stories.id}>
                      <div className="Stories-header">
                        <img src={Stories.dp} alt="dp"></img>
                        <span>{Stories.username}</span>                   
                      </div>
                    </div>
                    )
                })} 
            </div>
        )
    }
}

export default InstaStatus
