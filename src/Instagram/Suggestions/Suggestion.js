import React, { Component } from 'react';
import './Suggestion.scss'
import Suggestuser from "./SuggestUser.json";

export class Suggestion extends Component {
    render() {
        return (
            <div className="suggestion">
               <div className="suggest-head">
                <span className="suggest-tag">Suggestions For You</span>
                <span className="see-all"><strong>See All</strong></span>
               </div> 
               <div className="container">
               {Suggestuser.map((Suggestuser) => {
                  return (
                      <div className="suggestuser"  key={Suggestuser.id}>
                        <img src={Suggestuser.dp} alt="dp"></img>
                        <span className="user-disc">
                          <label><strong>{Suggestuser.username}</strong></label>                   
                          <label className="mins-ago">{Suggestuser.newuser}</label>                   
                        </span>
                        <button className="btn">Follow</button>
                      </div>
                    )
                })} 
               </div>              
            </div>
        )
    }
}

export default Suggestion
