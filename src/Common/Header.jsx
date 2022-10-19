import React from 'react';
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

export function Header() {

  const [theme, setTheme] = useState('header_light');
  const [themeIcon, setThemeIcon] = useState('moon')


  const toggleTheme = () => {
    if (theme === 'header_light') {
      setTheme('header_dark');
      setThemeIcon('sun')
    } else {
      setTheme('header_light');
      setThemeIcon('moon')
    }
  };



  return (
    <header className={"header " + theme}>
      <div className="site_name">
        <h1><a href="/"><span>Express</span> News</a></h1>
      </div>

      <nav className="navbar">
        <div className="searchbar">
          <input type="text" placeholder='Search...' />
        </div>
        <button className='themeBtn' onClick={toggleTheme}><i class={"fa-solid fa-"+themeIcon}></i></button>
        <ul className="nav">
          <li><Link to="/">Headlines</Link></li> 
          <li><Link to ="/epaper">ePaper</Link></li> 
          <li><Link to = "/About">About</Link></li> 
          <li><Link to = "/Contact">Contact</Link></li> 
        </ul>
        <button className='login btn'>Login</button>
      </nav>
    </header>
  )
}


