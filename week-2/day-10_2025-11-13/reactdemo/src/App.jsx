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

  
  useEffect(() => {
    const getAuthenticationStatus = async () => {
      if(localStorage.getItem("isAuthenticated")){
        const status = await JSON.parse(localStorage.getItem("isAuthenticated"));
        setIsAuthenticated(status);
        console.log("User is authenticated already");
      }      
    }

    getAuthenticationStatus();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        
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
