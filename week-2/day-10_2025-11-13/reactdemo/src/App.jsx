import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UndefinedRoutePage from './pages/UndefinedRoutePage';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';
import DigitalWatch from './pages/DigitalWatch';
import Counter from './pages/Counter';
import Header from './components/Header';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const getAuthenticationStatus = async () => {
  //   const status = await JSON.parse(localStorage.getItem("isAuthenticated"));
  //   setIsAuthenticated(status);

  // }
  useEffect(() => {
    // getAuthenticationStatus();
    // const status = await JSON.parse(localStorage.getItem("isAuthenticated"));
    // setIsAuthenticated(status);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route element={<Header />}>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/digitalWatch' element={<DigitalWatch />}/>
          </Route>
        </Route>

        <Route path="*" element={<UndefinedRoutePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
