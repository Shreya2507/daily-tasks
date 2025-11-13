import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div style={{width: '100vw', height:'40px', backgroundColor: '#646cff', position: 'absolute', top: 0, left:0, right:0}}>
        <Link style={{color: 'white'}} to={"/counter"}>Counter</Link>
        <Link style={{color: 'white'}} to={"/digitalWatch"}>Digital Watch</Link>     
    </div>
    <Outlet />
    </>

  )
}

export default Header
