import React from 'react';
import { useState } from 'react';
import './Header.css'

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


