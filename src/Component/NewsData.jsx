import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Loader } from '../Common/Loader';
import { LikeCounter } from './LikeCounter';
import Comments from './Comments';

import './Style.css';
import '../Common/darkmode.css';



export default function NewsData({value,theme}) {


    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    
    

    useEffect(()=>{
        axios
            .get(`https://newsapi.org/v2/everything?q=keyword&apiKey=3064d88d2d1345a7915d57781a10a49e`)
            .then((response)=>{
               
                let result = response.data.articles;
                setData([...data,...result]);
                setFilteredData([...data,...result])
                setLoading(true)
            })
    },[])


    useEffect(()=>{
        const afterFiltered = filteredData.filter((ele)=>{
            if(ele.title){
                return ele.title.includes(value.toLowerCase());
            }
        });
        setFilteredData(afterFiltered);
    },[value]);


    //Delete an article
    function deleteArticle(index) {
        const newData = filteredData.filter((ele, id) => {
            return index !== id;
        });
        setFilteredData(newData);
    }


  return (
    <section className={"container " + theme}>
        <h1>Latest News</h1>
        { !loading ? <Loader/> : ""}
        <div className='articles'>
    
        {filteredData.map((item,index)=>{
                return(
                    <div className='article' key={index} >
                            <button className='delete_btn' onClick={()=>deleteArticle(index)}>
                                <i className="fa-solid fa-delete-left"></i>
                            </button>
                            
                            <div className="article_image">
                                <img src={item.urlToImage} alt="" />
                            </div>

                             <div className="article_title">
                                <h3>{item.title}</h3>
                            </div>
                            
                            <div className="article_desciption">
                                <p>{item.description}</p>
                            </div>

                            <div className="article_details">
                                <p>{item.author}</p>
                                <p>{item.publishedAt}</p>
                            </div>

                            <LikeCounter />
                            <Comments />
                     
                   </div>

                )
            })}
   </div>
   </section>
  )
}
