import React from 'react';
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="site_name">
        <h1><a href="/"><span>Express</span> News</a></h1>
      </div>

      <nav className="navbar">
        <div className="searchbar">
          <input type="text" placeholder='Search...' />
        </div>
        <ul className="nav">
          <li><a href="/">Headlines</a></li> 
          <li><a href="/">ePaper</a></li> 
          <li><a href="/">About</a></li> 
          <li><a href="/">Contact</a></li> 
        </ul>
        <button className='login btn'>Login</button>
      </nav>
    </header>
  )
}


