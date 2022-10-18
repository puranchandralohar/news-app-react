import React, { useEffect, useState } from 'react'
import './Footer.css'

export function Footer() {

  const [date, setDate] = useState(new Date())
    
    useEffect(() => {
        const runningTime = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(runningTime)
        }
    
    });


  return (
    <footer>
        <p>Made with <span className='heart'><i className="fa-solid fa-heart"></i></span> by Puran Chandra</p>
        <p>{date.toLocaleString()}</p>
    </footer>
  )
}
