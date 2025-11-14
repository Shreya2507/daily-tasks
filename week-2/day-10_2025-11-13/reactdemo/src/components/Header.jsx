import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/header.css"
const Header = () => {
  return (
    <header>

      <Link to={"/dashboard"} className='logo'>QuickDash</Link>
      <div class='links'>
          {/* <Link style={{color: 'white'}} to={"/dashboard"}>Go back to dashboard</Link> */}
          <Link className='link' style={{color: 'white'}} to={"/dashboard/counter"}>Counter</Link>
          <Link className='link' style={{color: 'white'}} to={"/dashboard/digitalWatch"}>Digital Watch</Link>     
      </div>
   
    </header>

  )
}

export default Header
