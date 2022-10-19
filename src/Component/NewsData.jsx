import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Loader } from '../Common/Loader';
import '../Common/DarkMode.css';
import './Style.css';



export default function NewsData() {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        axios
            .get(`https://newsapi.org/v2/everything?q=keyword&apiKey=3064d88d2d1345a7915d57781a10a49e`)
            .then((response)=>{
               
                let result = response.data.articles;
                setData([...data,...result]);
                setLoading(true)
                // console.log(result)
            })
    },[])

    


    


  return (
    <section className='container'>
        <h1>Latest News</h1>
        { !loading ? <Loader/> : ""}
        <div className='articles'>
    
        {data.map((item,index)=>{
                return(
                    <div className='article' key={index} >
                            
                            <div className="article_image">
                                <img src={item.urlToImage} alt="" />
                            </div>

                             <div className="article_title">
                                <h3>{item.title}</h3>
                            </div>
                            
                            <div className="article_desciption">
                                <p>{item.description}</p>
                            </div>

                            {/* <div className="content">
                                <p>{item.content}</p>
                            </div> */}
                            
                            <div className="article_details">
                                <p>{item.author}</p>
                                <p>{item.publishedAt}</p>
                            </div>

                            <div className="btns">
                                <div className="like"><i class="fa-solid fa-thumbs-up"></i>8.2k</div>
                                <div className="dislike"><i class="fa-solid fa-thumbs-down"></i>1.6k</div>
                                <div className="Comment"><i class="fa-solid fa-comment"></i>365</div>
                            </div>                        
                   </div>

                )
            })}
   </div>
   </section>
  )
}
