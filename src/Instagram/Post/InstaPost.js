import React, { Component } from "react";
import './InstaPost.scss'
import Posts from "./Post.json";
import OptionModal from "./OptionModal";

export class InstaPost extends Component {
  render() {
    return (
      <div className="instapost">
        {Posts.map((post) => {
          return (
              <div key={post.id} className="instapost-content">
               <div className="post-header">
                <span><img src={post.dp} alt="dp"></img></span>
                <span className="pusername"><strong>{post.username}</strong></span>
                <OptionModal />
               </div>
               <div className="post-content">
                <img src={post.userpost} alt="post"></img>
               </div> 
               <div className="post-option">
                 <span className="opt-heart"><img src="./toolbar-icons/heart.png" alt=""></img></span>
                 <span className="opt-comment"><img src="./post/commentlogo.png" alt=""></img></span>                 
                 <span className="opt-share"><img src="./toolbar-icons/share.jpeg" alt=""></img></span>
                 <span className="opt-save"><img src="./post/savelogo.png" alt=""></img></span>
                </div>
                <div className="likes">
                  <label><strong>{post.likes}</strong></label>   
                </div>
                <div className="post-caption">
                  <label><strong>{post.username}</strong></label> 
                  <label>{post.caption}</label>  
                </div>
                <div className="post-mins-ago">
                  <label>{post.minago}</label>
                </div>
                <div className="comment-box">
                  <input type="text" placeholder="Add a comment..."></input>
                  <button className="btn">Post</button>
                </div>
              </div>
            )
        })}
      </div>
    );
  }
}

export default InstaPost;
