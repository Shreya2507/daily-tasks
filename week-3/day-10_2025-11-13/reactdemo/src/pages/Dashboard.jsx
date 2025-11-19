import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import "../styles/dashboard.css"
import { CiLogout } from "react-icons/ci";

const Dashboard = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  }
  return (
    <div id='dashboard'>
    <Header />
    <button onClick={logout} class='logout'><CiLogout /></button>
    <div className='welcomeText'>
      Welcome User !
    </div>
    <div className='startText'>Select an option from the navbar to start exploring</div>
    <Outlet class='outlet' />
    </div>
  )
}

export default Dashboard
