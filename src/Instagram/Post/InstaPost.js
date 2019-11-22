import React, { Component } from "react";
import './InstaPost.scss'
import Posts from "./Post.json";

export class InstaPost extends Component {
  render() {
    return (
      <div className="instapost">
        {Posts.map((post) => {
          return (
             <div key={post.id} className="instapost-content">
               <div className="post-header">
                <img src={post.dp} alt="dp"></img>
                <span className="pusername"><strong>{post.username}</strong></span>                   
               </div>
               <div className="post-content">
                 <img src={post.userpost} alt="post"></img>
               </div> 
             </div>
            )
        })}
      </div>
    );
  }
}

export default InstaPost;
