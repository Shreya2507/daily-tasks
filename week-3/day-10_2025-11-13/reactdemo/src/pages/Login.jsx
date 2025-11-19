import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import "../styles/login.css"

const Login = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsAuthenticated(true);
        console.log("Authenticated");
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        navigate("/dashboard");
    }
  return (
    <div id='loginContainer'>
      <div className='heading'>
        Welcome to QuickDash
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login
