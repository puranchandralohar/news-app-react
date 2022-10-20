import React, { useState } from 'react';
import './Style.css';

export function LikeCounter() {

    const[like,setLike]=useState(0);
    const[dislike,setDislike]=useState(0);

    const upvote = ()=>{
        setLike(like+1)
    }

    const downvote =()=>{
        setDislike(dislike-1)
    }




  return (
    <>
        <div className="btns">
            <button className="like cta_btn" onClick={upvote}><i className="fa-solid fa-thumbs-up"></i>{" "}{like}</button>
            <button className="dislike cta_btn" onClick={downvote}><i className="fa-solid fa-thumbs-down"></i>{" "}{dislike}</button>
            <div className="Comment cta_btn"><i className="fa-solid fa-comment"></i>365</div>
        </div>
    </>
  )
}
