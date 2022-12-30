import React, { useState } from 'react'
import './Style.css'

export default function Comments() {
    const [comment, setComment] = useState('');
    const [commentlist, setCommentlist] = useState([])



    const handleComment =(e)=>{
        setComment(e.target.value)
    }

    const addComment =()=>{
        if(comment.length <= 0) alert('Empty Comment');
        else{
            setCommentlist([...commentlist,comment])
            setComment("");
        }
    }


  return (
    <div className='comment_section'>
        <div className="comment_wrapper">
            <div className="comment_box">
                <input 
                type="text" 
                placeholder='Share your Comments...' 
                value={comment}
                onChange={handleComment}/>
            </div>
            <button className="comment_btn" onClick={addComment}>Send</button>
            <div className="Comment cta_btn"><i className="fa-solid fa-comment"></i>All Comments{" "}{commentlist.length}</div>
        </div>
        <div className="comments_area">
            {commentlist.map((item)=>{
                return(
                    <div className='each_comment'>
                        <button className='del_comment' onClick={()=>{
                            let afterDel = commentlist.filter((value)=> value !== item);
                            setCommentlist([...afterDel])
                        }}><i class="fa-regular fa-trash-can"></i></button>
                        <p>{item}</p>
                    </div>
                    
                )
                
            })}
        </div>
    </div>
  )
}
