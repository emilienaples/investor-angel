"use client";

import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  console.log('nav.........', showSideBar)
  
  function handleClick(e) {
    e.preventDefault();
    console.log("Clicked me!");
    alert("Clicked me!");
  }

  return (
    <>
    
    <div className='custom_header'>
      <div className='logo'>
        <Link href={'./'}>Investor Angel</Link>
        {/* <button onClick={(e) => handleClick(e)}>Click me</button>
        <button className='menu_toggle_bar' onClick={() => setShowSideBar(true)}>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/></svg>
        </button> */}
      </div>
      {/* mobile_nav */}
      <div className='navLinks'>
        <Link href={'#about_page'}>About Us</Link>
        <Link href={'#lifeInsurance_page'}>Life Insurance Basics</Link>
        <Link href={'#annuity_page'}>Annuity Basics</Link>
      </div>
    </div>

    <div className={`sidebar_mobile ${showSideBar ? 'showPanel' : 'hidePanel'}`}>
      <button className='menu_toggle_bar_close' onClick={() => setShowSideBar(false)}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
        </button>
      <Link className='logo' href={'./'}>Investor Angel</Link>
      <div className='navLinksMobile'>
        <Link href={'#about_page'}>About Us</Link>
        <Link href={'#lifeInsurance_page'}>Life Insurance Basics</Link>
        <Link href={'#annuity_page'}>Annuity Basics</Link>
      </div>
    </div>
    </>
  )
}

export default Header
