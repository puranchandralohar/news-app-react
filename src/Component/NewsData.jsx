import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './DarkMode.css'

export default function NewsData() {

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://newsapi.org/v2/everything?q=keyword&apiKey=3064d88d2d1345a7915d57781a10a49e`)
            .then((response)=>{
                let result = response.data.articles;
                setData([data,...result]);
                // console.log(result)
            })
    },[])


  return (
   <>
        {data.map((item,index)=>{
                return(
                    <div className='articles' key={index} >
                        <h1>{item.title}</h1>
                        <h3>{item.description}</h3>
                        <img src={item.urlToImage} alt="?" />
                        <p>{item.content}</p>
                        <p>{item.author}</p>
                        <p>{item.publishedAt}</p>
                   </div>

                )
            })}
   </>
  )
}
