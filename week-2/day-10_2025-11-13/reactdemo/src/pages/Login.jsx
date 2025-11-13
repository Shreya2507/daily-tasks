import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

const Login = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/dashboard");
    }
  return (
    <>
    <div>
      Login Page
    </div>
    <button onClick={handleLogin}>Log In</button>
    </>
  )
}

export default Login
